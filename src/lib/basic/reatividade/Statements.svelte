<script lang="ts">
  //tag de script
  /**
   * * STATEMENTS
   *
   * Não estamos limitados a declarar valores reativos — também podemos executar instruções arbitrárias de forma reativa. Por exemplo, podemos registrar o valor de countsempre que ele muda:
   */

  //declara uma variavel que armazenara um valor do contador
  let count = 0;

  //podemos também executar instruções aleatorias de forma reativa
  //aqui vamos registar o valor de count sempre que ele mudar
  $: console.log(`the count is ${count}`);

  //agrupundo instruções reativas em bloco
  //sempre que count for alterado ira executar este bloco de instruções reativas
  //OBS: parece o hook useEffect do react para sincronizar com sitemas externos fora do react
  $: {
    console.log(`the count is ${count}`);
    console.log(`this will also be logged whenever count changes`);
  }

  //podemos colocar a declaração de instrução reativa, na frente de coias como if blocos
  //ira ser executada apos o count ter sido alterado
  $: if (count >= 10) {
    alert("count is dangerously high!");
    count = 0;
  }

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
