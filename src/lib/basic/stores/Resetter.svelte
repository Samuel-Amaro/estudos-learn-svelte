<script lang="ts">
  import { count } from "./stores";

  //function manipuladora de evento
  function reset() {
    //aqui atribuimos o valor 0 ao store count
    count.set(0);
  }
</script>

<!--usando a diretiva on:event para anexar um evento e um manipulador no button elemento-->
<button on:click={reset}> reset </button>
