<script lang="ts">
  import RedThing from "./RedThing.svelte";
  import GreenThing from "./GreenThing.svelte";
  import BlueThing from "./BlueThing.svelte";

  /**
   * * <svelte:component />
   *
   * Svelte fornece uma variedade de elementos integrados.
   *
   * Um componente pode mudar completamente seu tipo com <svelte:component>
   *
   *  podemos criar um único componente dinâmico:
   *
   * O this valor pode ser qualquer construtor de componente ou um valor falso — se for falso, nenhum componente será renderizado.
   */

  const options = [
    { color: "red", component: RedThing },
    { color: "green", component: GreenThing },
    { color: "blue", component: BlueThing },
  ];

  let selected = options[0];
</script>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option.color}</option>
  {/each}
</select>

<!--
  - O <svelte:component> elemento renderiza um componente dinamicamente, usando o construtor do componente especificado como this propriedade. Quando a propriedade muda, o componente é destruído e recriado.
  - Se this for falso, nenhum componente será renderizado.
  - aqui renderizazmos diferentes tipos de componente usando um componente integrado do proprio svelte, ele renderiza um componente dinamicamente
  - podemos susbtituir uma longa lista de if blocos aqui por um componente dinamico
-->
<!--
  {#if selected.color === 'red'}
	  <RedThing/>
  {:else if selected.color === 'green'}
    <GreenThing/>
  {:else if selected.color === 'blue'}
    <BlueThing/>
  {/if}
-->
<svelte:component this={selected.component} />
