<script lang="ts">
  //props do componente
  export let data: { hex: string; name: string; rgb: string; hsl: string }[];
  export let field: string;

  //state interno do componente, que atualiza o dom e aciona renderização
  let search = "";

  //sempre que search mudar ira executar esta declaração reativa
  $: regex = search ? new RegExp(search, "i") : null;
  //sempre que regex mudar ira executar esta declaração reativa
  $: matches = (item: { [index: string]: string; hex: string; name: string }) =>
    regex ? regex.test(item[field]) : true;
</script>

<div class="list">
  <label>
    Filter: <input bind:value={search} />
  </label>

  <!--
    - verificando o conteudo do slot
    - vamos usar a $$slots variavel especial
    - $$slots é um objeto cujas chaves são os nomes dos slots passados ​​para o componente pelo pai. Se o pai não passar em um slot com um nome específico, esse nome não estará presente em $$slots. Isso permite que os componentes renderizem um slot (e outros elementos, como wrappers para estilo) somente se o pai o fornecer.
  -->
  {#if $$slots.header}
    <div class="header">
      <!-- 
        - aqui vai um slot elemento
        - Os slots nomeados permitem que os consumidores atinjam áreas específicas. Eles também podem ter conteúdo substituto.
        - um filho de um componente e representado pelo slot elemento 
        - o slot ajuda a representar um filho do componente e onde podemos colocalo dentro do componente.
        - quando precisamos de mais controle sobre o posionamento de um slot, podemos usar slots nomeados
        - podemos posionalos onde queremos dentro do componente, esses slots representam filhos diretos do compoonente, quando renderizado
      -->
      <slot name="header" />
    </div>
  {/if}

  <div class="content">
    {#each data.filter(matches) as item}
      <!--
        - item={item} === {item}
        - Os slots podem ser renderizados zero ou mais vezes e podem passar valores de volta ao pai usando adereços. O pai expõe os valores ao modelo de slot usando a let:diretiva.
        - aqui iremos transmitir dados de volta ao conteudo com slot por meio de slot props, vamos transmitir a item object ao conteudo, por meio de slot, usando a slot props, isso ira ser exposto ao componente.
        - passando os dados para ser exposto ao conteudo por meio do slot props
        - o slot ajuda a representar um filho do componente e onde podemos colocalo dentro do componente, aqui e um slot padrão que renderiza filhos direto do componente
      -->
      <slot {item} />
    {/each}
  </div>
</div>

<style>
  .list {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .header {
    border-top: 1px solid var(--bg-2);
    padding: 0.2em 0;
  }

  .content {
    flex: 1;
    overflow: auto;
    padding-top: 0.5em;
    border-top: 1px solid var(--bg-2);
  }
</style>
