<script lang="ts">
  import Board from "./Board.svelte";
  import { getWinningLine } from "./utils";

  /**
   * * <svelte:fragment />
   * 
   * O <svelte:fragment> elemento permite colocar conteúdo em um slot nomeado sem envolvê-lo em um elemento DOM contêiner.
   * 
   * Neste exercício, estamos fazendo um jogo Tic-Tac-Toe. 
   */
  
  let squares = Array(9).fill("");
  let next = "x";

  $: winningLine = getWinningLine(squares);
</script>

<div class="container">
  <Board size={3}>
    <!--
      - O <svelte:fragment> elemento permite colocar conteúdo em um slot nomeado sem envolvê-lo em um elemento DOM contêiner. Isso mantém intacto o layout do fluxo do seu documento.
    -->
    <svelte:fragment slot="game">
      {#each squares as square, i}
        <button
          class="square"
          class:winning={winningLine?.includes(i)}
          disabled={square}
          on:click={() => {
            squares[i] = next;
            next = next === "x" ? "o" : "x";
          }}
        >
          {square}
        </button>
      {/each}
    </svelte:fragment>

    <div slot="controls">
      <button
        on:click={() => {
          squares = Array(9).fill("");
          next = "x";
        }}
      >
        Reset
      </button>
    </div>
  </Board>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 auto;
  }

  .square,
  .square:disabled {
    background: white;
    border-radius: 0;
    color: #222;
    opacity: 1;
    font-size: 2em;
    padding: 0;
  }

  .winning {
    font-weight: bold;
  }

  .container:has(.winning) .square:not(.winning) {
    color: #ccc;
  }
</style>
