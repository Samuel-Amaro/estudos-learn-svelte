<script lang="ts">
  //tag de script
  /**
   * * MANIPULADORES DE EVENTOS INLINE
   *
   * Você também pode declarar manipuladores de eventos in-line:
   */

  //declara uma variavel que armazena um valor
  //esta variavel e um state interno do componente
  let m = { x: 0, y: 0 };
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva:. podemos também declarar manipuladores de evento inline, no praprio marcação. obs: alguns podem dizer para evitar manipuladores de eventos inline por motivo de desempenho, esse conselho não se aplica ao svelte, o compilador sempre fara a coisa certa, seja qual for a forma que eu escolher-->
<div
  on:pointermove={(e) => {
    //atribuimos os valores das cordenadas X, Y do pointer event
    //para o nosso state
    //a atribuição de valor ao state ou propriedades do state, aciona a reatividade, informando ao dom, para ser atualizado, e atualizar a UI.
    m = { x: e.clientX, y: e.clientY };
  }}
>
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
