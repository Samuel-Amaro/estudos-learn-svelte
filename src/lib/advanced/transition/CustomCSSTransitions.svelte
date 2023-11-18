<script lang="ts">
  import { fade, type TransitionConfig } from "svelte/transition";
  import { elasticOut } from "svelte/easing";

  /**
   * * CUSTOM CSS TRANSITIONS(CUSTOMIZADA TRANSIÇÕES CSS)
   *
   * O svelte/transition módulo possui algumas transições integradas, mas é muito fácil criar a sua própria.
   */

  //declara uma variavel que e um state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let visible = true;

  //criando a propria function de transição customizada
  //A função recebe dois argumentos — o node ao qual a transição é aplicada e quaisquer parâmetros que foram passados ​​— e retorna um objeto de transição que pode ter as seguintes propriedades:
  //delay- milissegundos antes do início da transição
  //duration— duração da transição em milissegundos
  //easing— uma p => tfunção de atenuação
  //css- uma (t, u) => cssfunção, ondeu === 1 - t
  //tick— uma (t, u) => {...}função que tem algum efeito no nó
  //O tvalor está 0 no início de uma introdução ou no final de um outro e 1 no final de uma introdução ou no início de um outro.
  //Na maioria das vezes você deve retornar a css propriedade e não a tick propriedade, já que as animações CSS são executadas no thread principal para evitar instabilidade sempre que possível. Svelte 'simula' a transição e constrói uma animação CSS, depois a deixa rodar.
  function spin(node: HTMLElement, { duration }: TransitionConfig) {
    return {
      duration, //duração da transição
      css: (t: number) => {
        //uma css function (t, u) => {...}
        //O tvalor está 0 no início de uma introdução ou no final de um outro e 1 no final de uma introdução ou no início de um outro.
        const eased = elasticOut(t);

        return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * (1 - t))}%,
						${Math.min(50, 500 * (1 - t))}%
					);`;
      },
    };
  }

  //Lembre-se: com grande poder vem uma grande responsabilidade.
</script>

<label>
  <!--usando a diretiva bind:checked={state} podemos vincular o state do checkbox input value ao state interno do componente visible-->
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <!--usando a transition diretiva, junto a function fly function de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom
  - usando a fly function de transição com paramentros, Anima as posições x e y e a opacidade de um elemento.
  - option y o deslocamentto y para animar de e para, o padrão e 0
  - duration milissegundos que dura transição
  - Observe que a transição é reversível — se você alternar a caixa de seleção enquanto a transição estiver em andamento, ela fará a transição do ponto atual, em vez do início ou do fim.
  - usando as in(entrada) é out(saida) diretiva juntas para criar uma transição na entrada usando function spin de transição customizada e fade no out(saida) diretiva, a transição fara o elemento entrar e sair do DOM de forma diferente
  -->
  <div class="centered" in:spin={{ duration: 8000 }} out:fade>
    <span>transitions!</span>
  </div>
{/if}

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>
