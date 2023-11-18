<script lang="ts">
  import { onMount } from "svelte";
  import { paint } from "./gradient";

  /**
   * * ON MOUNT(NA MONTAGEM)
   *
   * Cada componente possui um ciclo de vida que começa quando é criado e termina quando é destruído. Existem várias funções que permitem executar código em momentos importantes durante esse ciclo de vida. O que você usará com mais frequência é o onMount, que é executado depois que o componente é renderizado pela primeira vez no DOM.
   */

  //onMount e uma function do ciclo de vida de um componente(quando e criado e destruido), a function onMount e executado depois que o componete é renderizado pela primeira vez no DOM. a onMount function executa um codigo depois que o componente e renderizado no DOM pela primera vez. esta function sera executada quando o componente for montado.
  onMount(() => {
    const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const context = canvas?.getContext("2d") as CanvasRenderingContext2D;

    let frame = requestAnimationFrame(function loop(t) {
      requestAnimationFrame(loop);
      paint(context, t);
    });

    //function de limpeza do onMount, que e executada antes do componente ser destruido
    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<canvas width={32} height={32} />

<style>
  canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #666;
    mask: url(../../assets/svelte-logo-mask.svg) 50% 50% no-repeat;
    mask-size: 60vmin;
    -webkit-mask: url(../../assets/svelte-logo-mask.svg) 50% 50% no-repeat;
    -webkit-mask-size: 60vmin;
  }
</style>
