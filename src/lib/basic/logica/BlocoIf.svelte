<script lang="ts">
  //tag de script
  /**
   * * IF BLOCKS
   *
   * HTML não tem como expressar lógica , como condicionais e loops. Svelte faz.
   *
   * Para renderizar condicionalmente alguma marcação, nós a envolvemos em um if bloco. Vamos adicionar algum texto que aparece quando counté maior que 10:
   */

  //declara uma variavel que armazenara um valor do contador
  //declara um state interno do componente
  let count = 0;

  //function manipuladora de evento de click
  function increment() {
    //incrementa + 1 no valor atual de count
    //svelte instrumenta esta atribuição com algum código que informa que o DOM precisará ser atualizado.
    //em resposta ao evento a UI sera atualizado, mostrando o valor atualizado
    //o sitema de reatividade sera acionado, pois atualizamos um state, em resposta a um evento, assim o dom sera atualizado e UI sera atualizada
    count += 1;
  }
</script>

<!--para demostração do sistema de reatividade do svelte tivemos que conectar um manipulador de eventos, nos referimos a variavel count dentro da marcação html usando as {}, mostrando assim o valor atual de count-->
<button type="button" on:click={increment}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<!--utilizando logica condicional na marcação html, para renderizar condicionalmente uma marcação, isso e graças ao svelte que permite logica no html. para renderizar condicionalmente alguma marcação html, nós a envolvemos em um if bloco, aqui so e renderiza a marcação abaixo somente se count for maior que 10-->
{#if count > 10}
  <p>{count} is greater than 10</p>
{/if}
