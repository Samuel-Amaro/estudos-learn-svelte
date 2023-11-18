<script lang="ts">
  import FilterableList from "./FilterableList.svelte";
  import { colors } from "./colors";

  /**
   * * CHECKING FOR SLOT CONTENT(VERIFICANDO CONTEUDO DE SLOT)
   * 
   * $$slotsé um objeto cujas chaves são os nomes dos slots passados ​​para o componente pelo pai. Se o pai não passar em um slot com um nome específico, esse nome não estará presente em $$slots. Isso permite que os componentes renderizem um slot (e outros elementos, como wrappers para estilo) somente se o pai o fornecer.
   *
   */

</script>

<!--
  - Os componentes podem ter conteúdo filho, da mesma forma que os elementos.
  - este e um componente que aceita elementos com slot nomeados e elementos padrão como filho direto, vamos export um conteudo que pode ser usado por esses filhos aqui como conteudo por meio  da let:diretiva, aqui estamos expondo o conteudo com slot
  - let:item={row} e um valor fornecido pelo slot filho de volta ao pai no caso este componente, aqui o pai no caso o componente expoe os valores ao slot template usando a let:diretiva
-->
<FilterableList data={colors} field="name" let:item={row}>
  <!--
    - o conteudo abaixo representa filhos do componente 
    - e um slot nomeado, que representa um filho do componente com mais controle
    - além de criar o conteudo aqui que vai ser filho do componente, precisa ir dentro do componente e criar os slots nomeados correspondetes dentro de componente
  -->
  <div class="row">
    <span class="color" style="background-color: {row.hex}" />
    <span class="name">{row.name}</span>
    <span class="hex">{row.hex}</span>
    <span class="rgb">{row.rgb}</span>
    <span class="hsl">{row.hsl}</span>
  </div>
</FilterableList>

<style>
  .row {
    display: grid;
    align-items: center;
    grid-template-columns: 2em 4fr 3fr;
    gap: 1em;
    padding: 0.1em;
    background: var(--bg-1);
    border-radius: 0.2em;
  }

  header {
    font-weight: bold;
  }

  .row:not(header):hover {
    background: var(--bg-2);
  }

  .color {
    aspect-ratio: 1;
    height: 100%;
    border-radius: 0.1em;
  }

  .rgb,
  .hsl {
    display: none;
  }

  @media (min-width: 40rem) {
    .row {
      grid-template-columns: 2em 4fr 3fr 3fr;
    }

    .rgb {
      display: block;
    }
  }

  @media (min-width: 60rem) {
    .row {
      grid-template-columns: 2em 4fr 3fr 3fr 3fr;
    }

    .hsl {
      display: block;
    }
  }
</style>
