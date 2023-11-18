<script lang="ts">
  import AudioPlayer from "./AudioPlayer.svelte";
  import { tracks } from "./tracks";

  /**
   * * SHARING CODE
   * 
   * Em todos os exemplos que vimos até agora, o <script> bloco contém código que é executado quando cada instância do componente é inicializada. Para a grande maioria dos componentes, isso é tudo que você precisa.
   * 
   * Muito ocasionalmente, você precisará executar algum código fora de uma instância de componente individual. Por exemplo: voltando ao nosso reprodutor de áudio personalizado de um exercício anterior , você pode reproduzir todas as quatro faixas simultaneamente. Seria melhor se jogar um impedisse todos os outros.
   * 
   * Podemos fazer isso declarando um <script context="module">bloco. O código contido nele será executado uma vez, quando o módulo for avaliado pela primeira vez, e não quando um componente for instanciado. 
  */
</script>

<div class="centered">
  {#each tracks as track}
    <AudioPlayer {...track} />
  {/each}
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
