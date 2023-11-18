<script lang="ts">
  /**
   * * <svelte:head />
   *
   * O <svelte:head> elemento permite inserir elementos dentro do <head> do seu documento. Isso é útil para itens como tags <title> e <meta>, que são essenciais para um bom SEO.
   *
   * Como são muito difíceis de mostrar no contexto deste tutorial, usaremos isso para uma finalidade diferente: carregar folhas de estilo.
   *
   * No modo de renderização do lado do servidor (SSR), o conteúdo de <svelte:head> é retornado separadamente do restante do seu HTML.
   */
  const themes = ["margaritaville", "retrowave", "spaaaaace", "halloween"];
  let selected = themes[0];
</script>

<!--
  - Este elemento permite inserir elementos em arquivos document.head. Durante a renderização no servidor, head o conteúdo é exposto separadamente do html conteúdo principal.
  - Assim como acontece com <svelte:window>, <svelte:document>e <svelte:body>, este elemento só pode aparecer no nível superior do seu componente e nunca deve estar dentro de um bloco ou elemento.
-->
<svelte:head>
  <link
    rel="stylesheet"
    href="https://httpslearnsveltedev-xfsn--5173--5a198b5c.local-corp.webcontainer.io/stylesheets/{selected}.css"
  />
  <title>Hello world!</title>
  <meta
    name="description"
    content="This is where the description goes for SEO"
  />
</svelte:head>

<h1>Welcome to my site!</h1>

<select bind:value={selected}>
  <option disabled>choose a theme</option>

  {#each themes as theme}
    <option>{theme}</option>
  {/each}
</select>
