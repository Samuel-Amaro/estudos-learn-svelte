<script lang="ts">//tag de script
  /**
   * * TAGS HTML
   * 
   * Normalmente, as strings são inseridas como texto simples, o que significa que os caracteres gostam < e > não têm nenhum significado especial.
   * 
   * Mas às vezes você precisa renderizar HTML diretamente em um componente. Por exemplo, as palavras que você está lendo agora existem em um arquivo markdown que é incluído nesta página como um blob de HTML.
   * 
   * No Svelte, você faz isso com a {@html ...}tag especial:
  */

 //declara uma variavel que armazena um valor
 let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<!--
aqui estamos renderizando um html diretamente em um componente, usando a tag especial @html
-->
<p>{@html string}</p>