<script lang="ts">
  import FilterableList from "./FilterableList.svelte";
  import { colors } from "./colors";

  /**
   * * SLOTS PROPS
   *
   * Os componentes podem transmitir dados de volta ao seu conteúdo com slot por meio de suportes(props) de slot. Neste aplicativo, temos uma lista de cores CSS nomeadas. Digitar em <input> filtrará a lista.
   * 
   * No momento, todas as linhas mostram AliceBlue, e por mais linda que seja, não é isso que queremos.
   * 
   * Os slots nomeados também podem ter acessórios(props); use a let diretiva em um elemento com um slot="..." atributo, em vez de no próprio componente.
   */

  //declara um state interno do componente
  //let row = colors[0];
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
  <header slot="header" class="row">
    <span class="color" />
    <span class="name">name</span>
    <span class="hex">hex</span>
    <span class="rgb">rgb</span>
    <span class="hsl">hsl</span>
  </header>

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
