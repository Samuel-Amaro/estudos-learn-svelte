<script lang="ts">
  import type { TransitionConfig } from "svelte/transition";
  import AddingParameters from "./AddingParameters.svelte";

  /**
   * * CUSTOM JS TRANSITIONS(CSS JS CUSTOMIZADOS)
   *
   * Embora geralmente você deva usar CSS para transições tanto quanto possível, existem alguns efeitos que não podem ser obtidos sem JavaScript, como o efeito de máquina de escrever:
   */

  //declara uma variavel que e um state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let visible = false;

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

  function typewriter(
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
</script>

<label>
  <!--usando a diretiva bind:checked={state} podemos vincular o state do checkbox input value ao state interno do componente visible-->
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <!--usando a transition diretiva, junto a function typewriter de transition customizada function de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom.AddingParameters
  a transition aqui e para efeitor de entrar e sair do dom como maquina de escrever
  -->
  <p transition:typewriter>The quick brown fox jumps over the lazy dog</p>
{/if}
