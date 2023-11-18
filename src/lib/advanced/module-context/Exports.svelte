<script lang="ts">
  import AudioPlayer, { stopAll } from "./AudioPlayer.svelte";
  import { tracks } from "./tracks";

  /**
   * * EXPORTS
   *
   * Qualquer coisa exportada de um context="module" bloco de script torna-se uma exportação do próprio módulo. Vamos exportar uma stopAll função:
   */
</script>

<div class="centered">
  {#each tracks as track}
    <AudioPlayer {...track} />
  {/each}

  <button type="button" on:click={stopAll}>stop all</button>
</div>

<style>
  .centered {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    gap: 0.5em;
    max-width: 40em;
    margin: 0 auto;
  }
</style>
