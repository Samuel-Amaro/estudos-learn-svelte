<script lang="ts">
  /**
   * * CONTENT EDITABLE BINDINGS(LIGAÇÕES EDITÁVEIS DE CONTEÚDO)
   *
   * Elementos com um atributo contenteditable suportam ligações(vinculações) textContent e innerHTML:
   */

  //declaramos uma variavel de state interno do componente
  //ao receber uma nova atribuição de valor, ira atualiza o dom e acionar uma nova renderização
  let html = "<p>Write some text!</p>";
</script>

<!--
  - elementos com um atributo nativo de html contenteditable suportam vinculações(bindings) as seguintes vinculações especificas, innerHTML, innerText, textContent, aqui iremos vincular o state interno html ao conteudo interno do elemento div usando a diretiva bind:innerHtml={html}
  - Os dados normalmente fluem de pai para filho. A bind:diretiva permite que os dados fluam no sentido inverso, do filho para o pai. A maioria das ligações são específicas para elementos específicos. 
-->
<div bind:innerHTML={html} contenteditable />

<pre>{html}</pre>

<style>
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>
