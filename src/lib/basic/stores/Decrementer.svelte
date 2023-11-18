<script lang="ts">
  import { count } from "./stores";

  //function manipuladora de evento
  function decrement() {
    //aqui atribuimos um novo valor ao store count, por meio da callback atualizamos um novo valor para o count store
    //atualiza o count store
    count.update((n) => n - 1);
  }
</script>

<!--usando a diretiva on:event para anexar um evento e um manipulador no button elemento-->
<button on:click={decrement}> - </button>
