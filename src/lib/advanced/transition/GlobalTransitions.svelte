<script lang="ts">
  import { slide } from "svelte/transition";

  /**
   * * TRANSITIONS GLOBAL
   *
   * Normalmente, as transições só serão reproduzidas nos elementos quando o bloco que os contém diretamente for adicionado ou destruído. No exemplo aqui, alternar a visibilidade de toda a lista não aplica transições a elementos individuais da lista.
   *
   * Em vez disso, gostaríamos que as transições fossem reproduzidas não apenas quando itens individuais são adicionados e removidos com o controle deslizante, mas também quando alternamos a caixa de seleção.
   *
   * Podemos conseguir isso com uma transição global , que é reproduzida quando qualquer bloco contendo as transições é adicionado ou removido:
   */

  //declara uma variavel que e um state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let showItems = true;
  let i = 5;
  let items = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
</script>

<label>
  <!--usando a diretiva bind:checked={state} podemos vincular o state do checkbox input value ao state interno do componente showItems-->
  <input type="checkbox" bind:checked={showItems} />
  show list
</label>

<label>
  <!--usando a diretiva bind:checked={state} podemos vincular o state do checkbox input value ao state interno do componente i-->
  <input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
  {#each items.slice(0, i) as item}<!--itera uma lista-->
    <!--usando a transition diretiva, junto a function slide function de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom
  - a slide function de transição Desliza um elemento para dentro e para fora.
  - Observe que a transição é reversível — se você alternar a caixa de seleção enquanto a transição estiver em andamento, ela fará a transição do ponto atual, em vez do início ou do fim.
  - a global transition reproduz qualquer bloco contendo as transições é adicionado ou removido 
-->
    <div transition:slide|global>
      {item}
    </div>
  {/each}
{/if}

<style>
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>
