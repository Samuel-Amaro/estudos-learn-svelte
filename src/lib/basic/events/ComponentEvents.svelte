<script lang="ts">
  //tag script
  import Inner from "./Inner.svelte";

  /**
   * * EVENTOS DE COMPONENTES
   *
   * Os componentes também podem despachar eventos(refere-se a iniciar ou acionar um evento). Para fazer isso, eles devem criar um despachante de eventos.
   */

  //function manipuladora do evento de componente
  function handleMessage(event: CustomEvent<any>) {
    alert(event.detail.text);
  }
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva. aqui iremos ouvir um evento de componente, on:message que tera um manipulador-->
<Inner on:message={handleMessage}/>
