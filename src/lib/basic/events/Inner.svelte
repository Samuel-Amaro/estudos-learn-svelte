<script lang="ts">
  //tag de script
  import { createEventDispatcher } from "svelte";

  //componentes támbem podem despachar eventos.

  //criando um despachante de eventos
  //createEventDispatcher deve ser chamado quando o componente é instanciado pela primeira vez - você não pode fazer isso mais tarde, por exemplo, em um setTimeout retorno de chamada. Isso está vinculado dispatch à instância do componente.
  const dispatch = createEventDispatcher();

  //function manipuladora de evento
  function sayHello() {
    //quando o evento de click for acionado ira despachar um novo evento
    //despacha um evento de message com o valor "Hello!"
    dispatch("message", { text: "Hello!" });
  }
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva.-->
<button type="button" on:click={sayHello}>Click to say hello</button>
