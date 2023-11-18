<script lang="ts">
  //o script bloco são executados somente quando o componente e criado
  /**
   * * IN AND OUT(ENTRADA E SAIDA)
   *
   * Em vez da transition diretiva, um elemento pode ter uma in(entrada) ou uma out(saida) diretiva, ou ambas juntas. Importar fade junto fly...
   */

  import { fade, fly } from "svelte/transition";
  //declara uma variavel que e um state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let visible = true;
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
  - a fade function Anima a opacidade de um elemento de 0 até a opacidade atual para transições de entrada e da opacidade atual para 0 para transições de saída.
  - usando as in(entrada) é out(saida) diretiva juntas para criar uma transição na entrada usando function fly e fade no out(saida) diretiva, a transição ira começar e sair de forma diferente
  -->
  <p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
{/if}
