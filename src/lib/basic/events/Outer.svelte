<script lang="ts">
  import Inner from "./Inner.svelte";
</script>

<!--uma on:message diretiva de evento sem valor significa encaminhar  todos os message eventos para os componentes aninhados-->
<Inner on:message />
