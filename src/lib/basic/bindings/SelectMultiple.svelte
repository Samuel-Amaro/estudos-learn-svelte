<script lang="ts">
  /**
   * * SELECT MULTIPLE(MULTIPLO SELECT)
   *
   * Um <select> elemento pode ter um multiple atributo e, nesse caso, preencherá um array em vez de selecionar um único valor.
   *
   * checkboxes por <select multiple>:
   */

  //criamos variaveis e a inicilizamos
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let scoops = 1; //state para os group input radio, que e somente um valor exclusivo selecionado
  let flavours: string[] = []; //state para o group input checkbox, que formam um array de valores selecionados

  //formatador padrão da web
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
</script>

<h2>Size</h2>

<!--bloco lógico each, para iterar sobre uma lista de valores de um array-->
{#each [1, 2, 3] as number}
  <label>
    <!--usando a diretiva bind:group para vincular o state scoops ao input type radio, as input type radio no mesmo grupo são mutuamente exclusivas, essa vinculação atualiza o state scoops com o value do input type radio selecionado, essa e uma forma do svelte evitar o cliche on:input={e => scoops = e.target.value} / value={number}-->
    <input type="radio" name="scoops" value={number} bind:group={scoops} />
    {number}
    {number === 1 ? "scoop" : "scoops"}
  </label>
{/each}

<h2>Flavours</h2>

<!--usando diretiva bind:group={state} para vincular o state flavours ao estado do value do select, lembrando que o multiple atributo nesse caso preencherá um array em vez de selecionar um único valor, forman uma array de valores selecionados, o svelte ira fazer tudo auttomaticamente para a gente deixando o state atualizado por meio da diretiva, sem necessidade de usar o clichê manipulador de evento e atualizar o state manualmente-->
<select multiple bind:value={flavours}>
  <!--usando block each para iterar uma lista de valores do array dentro da marcação html-->
  {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
    <!--podemos omittir o value atributo no <option> pois o valor é identico ao conteudo do elemento-->
    <option>{flavour}</option>
  {/each}
</select>

<!--utilizando logica condicional na marcação html, para renderizar condicionalmente uma marcação, isso e graças ao svelte que permite logica no html. para renderizar condicionalmente alguma marcação html, nós a envolvemos em um if bloco, renderização condicional-->
{#if flavours.length === 0}
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops}
    {scoops === 1 ? "scoop" : "scoops"}
    of {formatter.format(flavours)}
  </p>
{/if}
