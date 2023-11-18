<script lang="ts">
  import type { ComponentType, SvelteComponent } from "svelte";
  import { trapFocus } from "../actions/actions";
  import Canvas from "./Canvas.svelte";

  /**
   * * BINDING TO COMPONENTE INSTANCES(VINCULAÇÃO A INSTÂNCIAS DE COMPONENTES)
   *
   * Assim como você pode vincular a elementos DOM, você pode vincular às próprias instâncias de componentes com bind:this.
   * 
   * Isso é útil nos raros casos em que você precisa interagir com um componente programaticamente (em vez de fornecer adereços atualizados).
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
  let canvas: SvelteComponent;
</script>

<div class="container">
  <!--assim como podemos vincular a alementos DOM, você pode vincular ás próprias instâncias de componentes com bind:this, aqui usamos esta diretiva para podermos ter uma referncia dessa instancia do componente Canvas-->
  <Canvas bind:this={canvas} color={selected} {size} />

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
    <button on:click={() => canvas.clear()}> clear </button>
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
