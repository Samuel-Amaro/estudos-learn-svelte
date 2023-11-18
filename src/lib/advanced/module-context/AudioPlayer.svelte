<!--
  - declaramos um context="module" bloco
  - O código contido nele será executado uma vez, quando o módulo for avaliado pela primeira vez, e não quando um componente for instanciado.
  - aqui vamos executar um context module bloco que o codigo que contém aqui sera compatilhado por todas as instancias do componente AudioPlayer, todas instancias do componente AudioPlayer inicializa e compartilha este codigo, somente entre as instancias deste componente inicializadas
  - este aqui e um caso para executar algum codigo fora de uma instancia de componente individual
-->
<script lang="ts" context="module">
  //tag de script separada
  //state local para um current audio que esta em execução
  //por meio deste state usando o context module bloco
  //Agora é possível que os componentes “conversem” entre si sem qualquer gerenciamento de estado:
  let current: EventTarget & HTMLAudioElement;

  //Qualquer coisa exportada de um context="module"bloco de script torna-se uma exportação do próprio módulo do componente. 
  //exporta uma function
  //Você não pode ter uma exportação padrão porque o componente é a exportação padrão.
  export function stopAll() {
    current?.pause();
  }
</script>

<script lang="ts">
  //tag de script normal
  //props do componente AudioPlayer
  export let src: string;
  export let title: string;
  export let artist: string;

  //variaveis de state interno do componente
  //ao recebcer novas atribuições de valores atualiza o dom e aciona nova renderização
  let time = 0;
  let duration = 0;
  let paused = true;

  //function de formatação
  function format(time: number) {
    if (isNaN(time)) return "...";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
</script>

<div class="player" class:paused>
  <!--
    - audio elemento, junto com suas vinculações(vincula um state interno a uma propriedade do elemento audio), usaremos a forma abreviada para src, duration, paused, as vinculações que estamos usando aqui que são especificas do elemento audio
   - duration(somente leitura) - a duração total do video, em segundos
   - paused(leitura e escrita) - booleano que indica se esta pausado ou não
   - currentTime(leitura e escrita) - o ponto atual no vídeo, em segundos
  -->
  <audio
    {src}
    bind:currentTime={time}
    bind:duration
    bind:paused
    on:play={(e) => {
      //ouvinte de evento para quando o audio for iniciado
      const audio = e.currentTarget;

      if (audio !== current) {
        current?.pause();
        current = audio;
      }
    }}
    on:ended={() => {
      //ouvinte de evento para quando o audio terminar de exeuctar
      //quando a faixa terminar, seja gentil e retroceda
      time = 0;
    }}
  />

  <button
    class="play"
    aria-label={paused ? "play" : "pause"}
    on:click={() => (paused = !paused)}
  />

  <div class="info">
    <div class="description">
      <strong>{title}</strong> /
      <span>{artist}</span>
    </div>

    <div class="time">
      <span>{format(time)}</span>
      <div
        class="slider"
        on:pointerdown={(e) => {
          //Vamos adicionar a capacidade de buscar uma parte específica de uma trilha arrastando o controle deslizante. Dentro do manipulador do slider pointerdown há uma seek função onde podemos atualizar time:
          const div = e.currentTarget;

          function seek(e) {
            const { left, width } = div.getBoundingClientRect();

            let p = (e.clientX - left) / width;
            if (p < 0) p = 0;
            if (p > 1) p = 1;

            time = p * duration;
          }

          seek(e);

          window.addEventListener("pointermove", seek);

          window.addEventListener(
            "pointerup",
            () => {
              window.removeEventListener("pointermove", seek);
            },
            {
              once: true,
            }
          );
        }}
      >
        <div class="progress" style="--progress: {time / duration}%" />
      </div>
      <span>{duration ? format(duration) : "--:--"}</span>
    </div>
  </div>
</div>

<style>
  :root {
    --bg-1: hsl(0, 0%, 18%);
    --bg-2: hsl(0, 0%, 30%);
    --fg-3: hsl(0, 0%, 60%);
    --fg-1: hsl(0, 0%, 90%);
    --bg-3: hsl(0, 0%, 40%);
    --link: hsl(206, 96%, 72%);
    --link-hover: hsl(206, 96%, 78%);
    --link-active: hsl(206, 96%, 64%);
  }

  .player {
    display: grid;
    grid-template-columns: 2.5em 1fr;
    align-items: center;
    gap: 1em;
    padding: 0.5em 1em 0.5em 0.5em;
    border-radius: 2em;
    background: var(--bg-1);
    transition: filter 0.2s;
    color: var(--fg-3);
    user-select: none;
  }

  .player:not(.paused) {
    color: var(--fg-1);
    filter: drop-shadow(0.5em 0.5em 1em rgba(0, 0, 0, 0.1));
  }

  button {
    width: 100%;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 50%;
  }

  [aria-label="pause"] {
    background-image: url(./pause.svg);
  }

  [aria-label="play"] {
    background-image: url(./play.svg);
  }

  .info {
    overflow: hidden;
  }

  .description {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2;
  }

  .time {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .time span {
    font-size: 0.7em;
  }

  .slider {
    flex: 1;
    height: 0.5em;
    background: var(--bg-2);
    border-radius: 0.5em;
    overflow: hidden;
  }

  .progress {
    width: calc(100 * var(--progress));
    height: 100%;
    background: var(--bg-3);
  }
</style>
