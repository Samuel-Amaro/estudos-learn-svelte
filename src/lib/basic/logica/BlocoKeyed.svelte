<script lang="ts">
  //tag script
  import Thing from "./Thing.svelte";
  /**
   * * CHAVE PARA CADA BLOCO
   *
   * Por padrão, quando você modifica o valor de um each bloco, ele adiciona e remove itens no final do bloco e atualiza todos os valores que foram alterados. Pode não ser isso que você deseja.
   * 
   *  gostaríamos de remover apenas o primeiro <Thing> componente e seu nó DOM e deixar os outros inalterados.
   * 
   * Para fazer isso, especificamos um identificador exclusivo (ou “chave”) para o each bloco:
   */

  //declara um array de objetos e o inicializa
  //e um state interno do componente que armazen um array de objetos
  let things = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ];

  //declara uma function manipuladora de evento
  function handleClick() {
    //o things array recebe uma copia de uma parte do array, a partir do segundo elemento
    //a atribuição de uma copia do array causa uma reatividade, fazendo assim atualizar o dom e refletir na UI
    //atribuir um novo array ao state
    //iso ira acionar a reatividade do svelte e causara uma atualização no dom refletindo na UI
    //usando o padrão de atribuições a propriedade de array e objetos
    things = things.slice(1);
  }
</script>

<!--para demostração do sistema de reatividade do svelte tivemos que conectar um manipulador de eventos-->
<button type="button" on:click={handleClick}>Remove first thing</button>

<!--
  usando um each bloco, para lidar com lista de dados, que itera sobre objetos iteraveis, como arrays, listas, etc...
 - a chave(key) que o valor do thing.id, informa ao svelte como descobrir qual no DOM alterar quando o componente for atualizado.
 - podemos usar qualquer objeto como key, podiamos usar (thing) em vez de (thing.id), no entando usar uma string ou numero e mais seguro
-->
{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}
