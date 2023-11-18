<script lang="ts">
  //tag de script

  /**
   * * DECLARAÇÕES(DECLARATIONS)
   *
   * Svelte atualiza automaticamente o DOM quando o estado do seu componente muda. Freqüentemente, algumas partes do estado de um componente precisam ser calculadas a partir de outras partes (como a fullname derivada de a firstname e a lastname) e recalculadas sempre que mudam.
   *
   * Para estes, temos declarações reativas .
   */

  //declara uma variavel que armazenara um valor do contador
  let count = 0;

  //aqui temos uma declaração reativa, o doubled estado e calculado a partir do estado derivado count
  //Se uma instrução reativa consistir inteiramente em uma atribuição a uma variável não declarada, o Svelte injetará uma let declaração em seu nome.
  //a logica aqui e o seguinte, executar novamente este codigo sempre que qualquer um dos valores referenciados mudar, no caso o proprio count, se mudar atualizara o doubled state
  //aqui temos um valor reativo
  //declarações e instruções reativas serão executadas após outro código de script e antes da renderização da marcação html do componente.
  $: doubled = count * 2;

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
<!--
  usando as variaveis em nossa marcação com as {}
-->
<p>{count} doubled is {doubled}</p>
