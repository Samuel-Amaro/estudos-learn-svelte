<script lang="ts">
  /**
   * * <svelte:element />
   *
   * Da mesma forma, nem sempre sabemos antecipadamente que tipo de elemento DOM renderizar. <svelte:element> é útil aqui.
   *
   *  Assim como no exercício anterior , podemos substituir uma longa sequência de if blocos por um único elemento dinâmico:
   *
   * O thisvalor pode ser qualquer string ou um valor falso — se for falso, nenhum elemento será renderizado.
   */

  const options = ["h1", "h2", "h3", "p", "marquee"];

  let selected = options[0];
</script>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>

<!--{#if selected === "h1"}
  <h1>I'm a <code>&lt;h1&gt;</code> element</h1>
{:else}
  <p>TODO others</p>
{/if}
-->

<!--
  - O <svelte:element>elemento permite renderizar um elemento de um tipo especificado dinamicamente. Isso é útil, por exemplo, ao exibir conteúdo rich text de um CMS. Quaisquer propriedades e ouvintes de eventos presentes serão aplicados ao elemento.
  - A única ligação suportada é bind:this, já que as ligações específicas do tipo de elemento que o Svelte faz no momento da construção (por exemplo, bind:valuepara elementos de entrada) não funcionam com um tipo de tag dinâmico.
  - Se thistiver um valor nulo, o elemento e seus filhos não serão renderizados.
  - Se thisfor o nome de um elemento void (por exemplo, br) e <svelte:element> tiver elementos filhos, um erro de tempo de execução será gerado no modo de desenvolvimento.
  - aqui renderizamos diferentes tipos de elementos html usando um componente integrado do proprio svelte, ele renderiza um elemento de tipo especificado dinamicamente
  - podemos susbtituir uma longa lista de if blocos aqui por um componente dinamico
-->
<svelte:element this={selected}>
  I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>
