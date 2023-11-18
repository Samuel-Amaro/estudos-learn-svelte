<!--
  - O <svelte:options> elemento fornece um local para especificar opções do compilador por componente, que são detalhadas na seção do compilador . As opções possíveis são:
  - immutable={true}— você nunca usa dados mutáveis, então o compilador pode fazer verificações simples de igualdade referencial para determinar se os valores foram alterados
  - immutable={false}- o padrão. Svelte será mais conservador sobre se os objetos mutáveis ​​mudaram ou não
  - accessors={true}— adiciona getters e setters para os adereços do componente
accessors={false}- o padrão
  - namespace="..."— o namespace onde este componente será usado, mais comumente "svg"; use o namespace "estrangeiro" para cancelar nomes de atributos que não diferenciam maiúsculas de minúsculas e avisos específicos de HTML
  - customElement="..."— o nome a ser usado ao compilar este componente como um elemento personalizado
-->
<svelte:options immutable={true} />

<script lang="ts">
  import { afterUpdate } from "svelte";
  import flash from "./flash";

  export let todo: {
    id: number;
    done: boolean;
    text: string;
  };

  let element: HTMLLIElement;

  afterUpdate(() => {
    flash(element);
  });
</script>

<!-- the text will flash red whenever
     the `todo` object changes -->
<li bind:this={element}>
  <label>
    <input type="checkbox" checked={todo.done} on:change />
    {todo.text}
  </label>
</li>
