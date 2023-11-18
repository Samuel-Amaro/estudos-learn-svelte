<script lang="ts">
  /**
   * * ADDING PARAMETERS(ADICIONANDO PARAMENTROS)
   *
   * Funções de transição podem aceitar parâmetros. Substitua a fade transição por fly...
   */

  import { fly } from "svelte/transition";
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
  -->
  <p transition:fly={{ y: 200, duration: 2000 }}>Flies in and out</p>
{/if}
