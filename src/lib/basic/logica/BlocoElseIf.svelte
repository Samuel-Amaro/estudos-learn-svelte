<script lang="ts">
  //tag de script
  /**
   * * ELSE-IF BLOCOS
   *
   * Várias condições podem ser 'encadeadas' junto com else if:
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

<!--encadeando varias condições de renderização com blocos else if-->
<!--utilizando logica condicional na marcação html, para renderizar condicionalmente uma marcação, isso e graças ao svelte que permite logica no html. para renderizar condicionalmente alguma marcação html, nós a envolvemos em um if bloco, aqui so e renderiza a marcação abaixo somente se count for maior que 10, se não for renderiza a marcação do bloco else if, se não for true a condição renderiza bloco else-->
{#if count > 10} <!--# indica uma tag de abertura de bloco-->
  <p>{count} is greater than 10</p>
{:else if count < 5} <!--: caractere, indica uma tag de continuação de bloco-->
  <p>{count} is less than 5</p>
{:else} <!--: caractere, indica uma tag de continuação de bloco-->
  <p>{count} is between 5 and 10</p>
{/if} <!--/ caractere sempre indica uma tag de fechamento de bloco-->