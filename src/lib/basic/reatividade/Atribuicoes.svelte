<script lang="ts">//tag de script

  /**
   * * ATRIBUIÇÕES(ASSIGNMENTS)
   * 
   *  No coração do Svelte está um poderoso sistema de reatividade para manter o DOM sincronizado com o estado do seu aplicativo - por exemplo, em resposta a um evento.
  */

  //declara uma variavel que armazena o valor do contador
  let count = 0;

  //function manipuladora de evento de click
  function increment() {
    //incrementa + 1 no valor atual de count
    //svelte instrumenta esta atribuição com algum código que informa que o DOM precisará ser atualizado.
    //em resposta ao evento a UI sera atualizado, mostrando o valor atualizado
    count += 1;
  }
</script>

<!--para demostração do sistema de reatividade do svelte tivemos que conectar um manipulador de eventos, nos referimos a variavel count dentro da marcação html usando as {}, mostrando assim o valor atual de count-->
<button type="button" on:click={increment}>
  Clicked {count} 
  {count === 1 ? 'time' : 'times'}
</button>