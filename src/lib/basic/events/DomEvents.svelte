<script lang="ts">
  //tag de script
  /**
   * * DOM EVENTS(EVENTOS DO DOM)
   *
   * Como já vimos brevemente, você pode ouvir qualquer evento DOM em um elemento (como click ou pointermove ) com a on:diretiva:
   */

  //declara uma variavel que armazena um valor
  //esta variavel e um state interno do componente
  let m = { x: 0, y: 0 };

  //function manipuladora de evento 
  function handleMove(
    event: PointerEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) {
    //atribuimos os valores das cordenadas X, Y do pointer event
    //para o nosso state
    //a atribuição de valor ao state ou propriedades do state, aciona a reatividade, informando ao dom, para ser atualizado, e atualizar a UI.
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva:-->
<div on:pointermove={handleMove}>
  The pointer is at {m.x} x {m.y}
</div>

<style>
  /*tag de style para o componenente, lembrando que o css e local, somente ao componente, as regras css abaixo são escopo do componente */

  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
