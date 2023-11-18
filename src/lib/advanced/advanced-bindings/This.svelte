<script lang="ts">
  import { onMount } from "svelte";
  import { paint } from "./gradient";

  /**
   * * THIS(ESTE)
   *
   * Em um exercício anterior , aprendemos como usar a onMount função de ciclo de vida para pintar em uma tela.
   *
   * Mas o exemplo tem bugs — é o using document.querySelector('canvas'), que sempre retornará o primeiro <canvas>encontrado na página, que pode não ser aquele pertencente ao nosso componente.
   *
   * Em vez disso, podemos usar a this ligação somente leitura para obter uma referência ao elemento:
  */

  //declara uma variavel de state interno do componente
  //ao receber uma nova atribuição de valor ira atualizar o dom acionar uma nova renderização
  //ira armazenar uma referencia a um elemento canvas
  // Observe que o valor de canvas será undefined até que o componente seja montado.
  let canvas: HTMLCanvasElement;

  //onMount e uma function do ciclo de vida de um componente(quando e criado e destruido), a function onMount e executado depois que o componete é renderizado pela primeira vez no DOM. a onMount function executa um codigo depois que o componente e renderizado no DOM pela primera vez. esta function sera executada quando o componente for montado.
  onMount(() => {
    //Mas o exemplo tem bugs — está usando document.querySelector('canvas'), que sempre retornará o primeiro <canvas> encontrado na página, que pode não ser aquele pertencente ao nosso componente.
    //const canvas = document.querySelector("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);
      paint(context, t);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<!--aqui vamos usar a bind:property={state} vinculação somente leitura para obter uma referencia ao elemento canvas. usamos a this vinculação que e somente leitura, essa vinculação ira referenciar o elmeneto canvas na variavel de state interno canvas. Observe que o valor de canvas será undefined até que o componente seja montado.-->
<canvas bind:this={canvas} width={32} height={32} />

<style>
  canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #666;
    mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
    mask-size: 60vmin;
    -webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
    -webkit-mask-size: 60vmin;
  }
</style>
