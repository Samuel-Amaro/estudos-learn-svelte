<script lang="ts">
  /**
   * * CHECKBOX INPUTS(ENTRADAS DE CAIXA DE SELEÇÃO)
   *
   * As caixas de seleção são usadas para alternar entre estados. Em vez de vincular a input.value, vinculamos a input.checked:
  */

  //declara uma variavel que armazena um valor
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let yes = false;
</script>

<label>
  <input type="checkbox" bind:checked={yes} /><!--on:input={(e) => (yes = e.target.checked)} checked={yes}  esta e a forma de atualizar o state, do componente com o state do input checked mas essa forma é um pouco clichê, muito repetitiva e comun, e fica pior com outros elementos de formulario, por isso o svelte criou uma propria diretiva bind:checked, isso significa que as alterações de yes atualizarão o value de input mas também as alterações no value de input serão atualizados, uma forma de vincular o value de um input a um state no código, como tudo no dom e string, a diretiva bind:checked={state} cuida para min que quando estou lidando com inputs numerica ela ja converta a string para boolean por meio da diretiva e atualize o state com um boolean value-->
  Yes! Send me regular email spam
</label>

<!--utilizando logica condicional na marcação html, para renderizar condicionalmente uma marcação, isso e graças ao svelte que permite logica no html. para renderizar condicionalmente alguma marcação html, nós a envolvemos em um if bloco, renderização condicional, so renderizamo o <p> se yes for true, e o outro <p> se for false-->
{#if yes}
  <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
  <p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!yes}>Subscribe</button>
