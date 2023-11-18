<script lang="ts">
  /**
   * * <svelte:document />
   *
   * O <svelte:document> elemento permite que você ouça eventos disparados no document. Isso é útil com eventos como selectionchange, que não são acionados window.
   *
   * Adicione o selectionchange manipulador à <svelte:document> tag:
   *
   * Evite mouseenter manipuladores mouseleave neste elemento, pois esses eventos não são acionados document em todos os navegadores. Use <svelte:body> em vez disso.
   */

  let selection: Selection | null = null;

  const handleSelectionChange = (
    e: Event & {
      currentTarget: EventTarget & Document;
    }
  ) => (selection = document.getSelection());
</script>

<!--
  - Da mesma forma <svelte:window>, esse elemento permite adicionar ouvintes a eventos em document, como visibility change, que não são acionados em window. Também permite usar ações em arquivos document.
  - Assim como acontece com <svelte:window>, este elemento só pode aparecer no nível superior do seu componente e nunca deve estar dentro de um bloco ou elemento.
  - Você também pode vincular(usando diretivas bind) às seguintes propriedades:
  - fullscreenElement
  - visibilityState
  - Todos são somente leitura.
-->
<svelte:document on:selectionchange={handleSelectionChange} />

<h1>Select this text to fire events</h1>
<p>Selection: {selection}</p>
