<script lang="ts">
  import { onMount } from "svelte";

  //props do componente Svelte
  export let color: string;
  export let size: number;

  export function clear() {
    context?.clearRect(0, 0, canvas.width, canvas.height);
  }

  //variaveis de state interno do componente
  //qualquer atribuição a essas variaveis aciona uma atualização no DOM, causando uma renderização
  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D | null;
  let previous: { x: number; y: number } | null;

  function get_coords(
    e: PointerEvent & {
      currentTarget: EventTarget & HTMLCanvasElement;
    }
  ) {
    const { clientX, clientY } = e;
    const { left, top } = canvas.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    return { x, y };
  }

  //onMount e uma function do ciclo de vida de um componente(quando e criado e destruido), a function onMount e executado depois que o componete é renderizado pela primeira vez no DOM. a onMount function executa um codigo depois que o componente e renderizado no DOM pela primera vez. esta function sera executada quando o componente for montado.
  onMount(() => {
    context = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  });
</script>

<!--vincula o elemento canvas ao state local canvas, bind:this={canvas}, Para obter uma referência a um nó DOM, usando a on:nameEvent={handler} para ouvir evento dom-->
<canvas 
  bind:this={canvas}
  on:pointerdown={(e) => {
    const coords = get_coords(e);
    if (context) {
      context.fillStyle = color;
      context.beginPath();
      context.arc(coords.x, coords.y, size / 2, 0, 2 * Math.PI);
      context.fill();
    }
    previous = coords;
  }}
  on:pointerleave={() => {
    previous = null;
  }}
  on:pointermove={(e) => {
    const coords = get_coords(e);

    if (e.buttons === 1) {
      e.preventDefault();
      if (context) {
        context.strokeStyle = color;
        context.lineWidth = size;
        context.lineCap = "round";
        context.beginPath();
        if (previous) context.moveTo(previous.x, previous.y);
        context.lineTo(coords.x, coords.y);
        context.stroke();
      }
    }
    previous = coords;
  }}
/>

{#if previous}
  <div
    class="preview"
    style="--color: {color}; --size: {size}px; --x: {previous.x}px; --y: {previous.y}px"
  />
{/if}

<style>
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .preview {
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    transform: translate(-50%, -50%);
    background: var(--color);
    border-radius: 50%;
    opacity: 0.5;
    pointer-events: none;
  }
</style>
