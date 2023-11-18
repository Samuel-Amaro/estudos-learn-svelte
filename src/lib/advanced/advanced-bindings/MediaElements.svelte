<script lang="ts">
  import AudioPlayer from "./AudioPlayer.svelte";
  import { tracks } from "./tracks";

  /**
   * * MEDIA ELEMENTS(ELEMENTOS DE MÍDIA)
   * 
   * Você pode vincular as propriedades dos elementos <audio> e <video>, facilitando (por exemplo) a criação de uma interface de usuário personalizada do player, como
   * 
   * O conjunto completo de ligações(vinculações) para <audio> e <video> é o seguinte - sete ligações somente leitura ...
   * 
   * duration(somente leitura) — a duração total do vídeo, em segundos
   * buffered(somente leitura) — uma matriz de {start, end}objetos
   * seekable(somente leitura) - idem
   * played(somente leitura) - idem
   * seeking(somente leitura) - booleano
   * ended(somente leitura) - booleano
   * readyState(somente leitura) — número entre (e incluindo) 0 e 4
   * 
   * ...e cinco ligações bidirecionais :
   * 
   * currentTime— o ponto atual no vídeo, em segundos
   * playbackRate— quão rápido reproduzir o vídeo, onde 1é 'normal'
   * paused- este deve ser autoexplicativo
   * volume— um valor entre 0 e 1
   * muted— um valor booleano onde true é silenciado
   * 
   * Os vídeos também possuem somente leitura videoWidth e videoHeight vinculações.
  */
</script>

<div class="centered">
  <!--usando o block logico each podemos iterar o array tracks, cada item do teack e um objeto com dados de faixa de musica, aqui usamos esses dados para fornecer a um componente que cria uma interface personaliza da player para agente-->
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
