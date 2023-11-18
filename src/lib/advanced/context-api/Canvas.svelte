<script lang="ts">
  import { afterUpdate, onMount, setContext, tick } from "svelte";

  export let width = 100;
  export let height = 100;

  let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D;
  let items = new Set<(ctx: CanvasRenderingContext2D) => void>();
  let scheduled = false;

  onMount(() => {
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  });

  //A API de contexto fornece um mecanismo para os componentes 'conversarem' entre si sem passar dados e funções como props ou despachar muitos eventos.
  //Associa um context objeto arbitrário(aleatorio) ao componente atual e ao especificado key e retorna esse objeto. O contexto fica então disponível para os filhos do componente (incluindo conteúdo com slot) com getContext.
  //Assim como as funções de ciclo de vida, esta deve ser chamada durante a inicialização do componente.
  //O contexto não é inerentemente reativo. Se você precisar de valores reativos no contexto, poderá passar um armazenamento(store) para o contexto, que será reativo.
  //o object de context pode incluir qualquer coisa, inclusive stores
  setContext("canvas", {
    //este aqui e o objeto de context que adicionamos um metodo addItem para ser usado por esse componente e seus filhos
    addItem,
  });

  //esta function add uma item na tela
  function addItem(fn: (ctx: CanvasRenderingContext2D) => void) {
    onMount(() => {
      items.add(fn);
      return () => items.delete(fn);
    });

    afterUpdate(async () => {
      if (scheduled) return;

      scheduled = true;
      await tick();
      scheduled = false;

      draw();
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    items.forEach((fn) => fn(ctx));
  }
</script>

<canvas bind:this={canvas} {width} {height}>
  <slot />
</canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
