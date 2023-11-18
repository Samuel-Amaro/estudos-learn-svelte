<script lang="ts">
  import Outer from "./Outer.svelte";

  //tag de script
  /**
   * * EVENT FORWARDING(ENACAMINHAMENTO DE EVENTOS DE COMPONENTE)
   *
   * Ao contrário dos eventos DOM, os eventos de componentes não borbulham. Se você quiser ouvir um evento em algum componente profundamente aninhado, os componentes intermediários deverão encaminhar o evento.
  */

  //function manipuladora do evento de componente
  function handleMessage(event: CustomEvent<any>) {
    alert(event.detail.text);
  }
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva. aqui iremos ouvir um evento de componente, on:message que tera um manipulador, o outer componente ira encaminhar o evento on:message para o inner componente, para que seja dispachado no Inner componente não no Outer, isso e para alguum componente que esta profundamente aninhado, os componentes intermediarios deverão encaminhar o evento até chegar no componente que tem que ser dispachado-->
<Outer on:message={handleMessage} />
