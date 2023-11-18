import { quintOut } from "svelte/easing";
import { crossfade, type TransitionConfig } from "svelte/transition";
  
//criando a propria function de transição customizada
//A função recebe dois argumentos — o node ao qual a transição é aplicada e quaisquer parâmetros que foram passados ​​— e retorna um objeto de transição que pode ter as seguintes propriedades:
//delay- milissegundos antes do início da transição
//duration— duração da transição em milissegundos
//easing— uma p => tfunção de atenuação
//css- uma (t, u) => cssfunção, ondeu === 1 - t
//tick— uma (t, u) => {...}função que tem algum efeito no nó
//O tvalor está 0 no início de uma introdução ou no final de um outro e 1 no final de uma introdução ou no início de um outro.

//Na maioria das vezes você deve retornar a css propriedade e não a tick propriedade, já que as animações CSS são executadas no thread principal para evitar instabilidade sempre que possível. Svelte 'simula' a transição e constrói uma animação CSS, depois a deixa rodar.
interface ConfigTransitionTypeWriter extends TransitionConfig {
  speed: number;
}

export default function typewriter(
  node: HTMLElement,
  { speed = 1 }: ConfigTransitionTypeWriter
) {
  const valid =
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE;

  if (!valid) {
    throw new Error(
      `This transition only works on elements with a single text node child`
    );
  }

  const text = node.textContent as string;
  const duration = text.length / (speed * 0.01);

  return {
    duration, //duração da transição
    tick: (t: number) => {
      //uma css function (t, u) => {...}
      //O tvalor está 0 no início de uma introdução ou no final de um outro e 1 no final de uma introdução ou no início de um outro.
      const i = Math.trunc(text.length * t);
      node.textContent = text.slice(0, i);
    },
  };
}

//aqui estamos usando a function crossfade de transição
// que cria um par de transições chamadas send e receive. Quando um elemento é 'enviado', ele procura um elemento correspondente sendo 'recebido' e gera uma transição que transforma o elemento na posição de sua contraparte e o desvanece. Quando um elemento é 'recebido', acontece o inverso. Se não houver contrapartida, a fallbacktransição é utilizada.
export const [send, receive] = crossfade({
	duration: (d) => Math.sqrt(d * 200), //milissegundos dura a transição

	fallback(node, params) { //Uma transição function de fallback a ser usada para envio quando não há nenhum elemento correspondente sendo recebido e para recebimento quando não há nenhum elemento sendo enviado.
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			duration: 600,
			easing: quintOut,
			css: (t) => `
				transform: ${transform} scale(${t});
				opacity: ${t}
			`
		};
	}
});