<script lang="ts">
  import { createEventDispatcher } from "svelte";

  //prop do componente Keypad
  export let value = "";

  //componentes támbem podem despachar eventos.

  //criando um despachante de eventos
  //createEventDispatcher deve ser chamado quando o componente é instanciado pela primeira vez - você não pode fazer isso mais tarde, por exemplo, em um setTimeout retorno de chamada. Isso está vinculado dispatch à instância do componente.
  //Cria um despachante de eventos que pode ser usado para despachar eventos de componentes . Os despachantes de eventos são funções que podem receber dois argumentos: name e detail.
  //Os eventos de componentes criados com createEventDispatcher criam um CustomEvent. Esses eventos não borbulham. O argumento detail corresponde à propriedade CustomEvent.detail e pode conter qualquer tipo de dados.
  const dispatch = createEventDispatcher();

  //arrow function manipuladora de evento
  const select = (num: number) => () => (value += num);
  const clear = () => (value = "");
  const submit = () => {
    //quando o evento de click for acionado ira despachar um novo evento
    //despacha um evento de submit
    dispatch("submit");
  };
</script>

<div class="keypad">
  <button on:click={select(1)}>1</button>
  <button on:click={select(2)}>2</button>
  <button on:click={select(3)}>3</button>
  <button on:click={select(4)}>4</button>
  <button on:click={select(5)}>5</button>
  <button on:click={select(6)}>6</button>
  <button on:click={select(7)}>7</button>
  <button on:click={select(8)}>8</button>
  <button on:click={select(9)}>9</button>

  <button disabled={!value} on:click={clear}>clear</button>
  <button on:click={select(0)}>0</button>
  <button disabled={!value} on:click={submit}>submit</button>
</div>

<style>
  .keypad {
    display: grid;
    grid-template-columns: repeat(3, 5em);
    grid-template-rows: repeat(4, 3em);
    grid-gap: 0.5em;
  }

  button {
    margin: 0;
  }
</style>
