<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import { trapFocus } from "./actions";

  /**
   * * THE USE DIRECTIVE(A DIRETIVA USE)
   *
   * As ações são essencialmente funções do ciclo de vida em nível de elemento. Eles são úteis para coisas como:
   *
   * interface com bibliotecas de terceiros
   * imagens carregadas lentamente
   * dicas de ferramentas
   * adicionando manipuladores de eventos personalizados
   *
   * Neste aplicativo, você pode rabiscar <canvas> e alterar as cores e o tamanho do pincel por meio do menu. Mas se você abrir o menu e percorrer as opções com a tecla Tab, logo descobrirá que o foco não está preso dentro do modal.
   */

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "white",
    "black",
  ];
  //variaveis de state interno do componente
  let selected = colors[0];
  let size = 10;

  let showMenu = true;
</script>

<div class="container">
  <Canvas color={selected} {size} />

  {#if showMenu}
    <div
      class="modal-background"
      on:click|self={(/*escutando evento de click com um modificador de evento self, apenas aciona o manipulador se for event.target o proprio elemento*/) =>
        (showMenu = false)}
      on:keydown={(e) => {
        if (e.key === "Escape") showMenu = false;
      }}
    >
      <!--usando a diretiva use, para usar uma action chamada trapFocus, essa action nos ajudara no gerenciamento de foco do elemento, a action são essencialmente functions do ciclo de vida em nivel de elemento, são executados apos o elemento ter sido montado no dom, e depois de ter sido destruido, são usadas junto com a use diretiva -->
      <div class="menu" use:trapFocus aria-label="Menu Colors">
        <ul class="colors">
          {#each colors as color}
            <li>
              <button
                class="color"
                aria-label={color}
                aria-current={selected === color}
                style="--color: {color}"
                on:click={() => {
                  selected = color;
                }}
              />
            </li>
          {/each}
        </ul>

        <label>
          small
          <input type="range" bind:value={size} min="1" max="50" />
          large
        </label>
      </div>
    </div>
  {/if}

  <div class="controls">
    <button class="show-menu" on:click={() => (showMenu = !showMenu)}>
      {showMenu ? "close" : "menu"}
    </button>
  </div>
</div>

<style>
  .container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .controls {
    position: absolute;
    left: 0;
    top: 0;
    padding: 1em;
  }

  .show-menu {
    width: 5em;
  }

  .modal-background {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(20px);
  }

  .menu {
    position: relative;
    background: var(--bg-2);
    width: calc(100% - 2em);
    max-width: 28em;
    padding: 1em 1em 0.5em 1em;
    border-radius: 1em;
    box-sizing: border-box;
    user-select: none;
  }

  .colors {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(9, 1fr);
    grid-gap: 0.5em;
  }

  .color {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: none;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
    transition: all 0.1s;
  }

  .color[aria-current="true"] {
    transform: translate(1px, 1px);
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
  }

  .menu label {
    display: flex;
    width: 100%;
    margin: 1em 0 0 0;
  }

  .menu input {
    flex: 1;
  }

  ul {
    list-style: none;
    width: 100%;
  }
</style>
