<script lang="ts">
  //tag script
  /**
   * * EACH BLOCO
   *
   * Ao construir interfaces de usuário, você frequentemente trabalhará com listas de dados.
   */

  //declara uma array e o inicializa
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  //declara um variavel que e inicializada com um item do array, armazena um valor
  //esse e um state interno do componente, e reativo, sempre que atualizado, gera uma mudança no dom refletindo na IU
  let selected = colors[0];
</script>

<h1 style="color: {selected};">Pick a colour</h1>
<div>
  <!--usando um each bloco, para lidar com lista de dados, que itera sobre objetos iteraveis, como arrays, listas, etc... a expressão colors pode ser qualquer array ou objeto semelhamente a um array que possua uma .lenght propriedade, assim podemos fazer um loop sobre iteraveis, na expressão temos o colors o array que estamos iterando e o color, a variavel que correspoden ao item do array no momento da iteração, i e o indice atual-->
  {#each colors as color, i}
    <button
      type="button"
      aria-current={selected === color}
      aria-label={color}
      style="background-color: {color};"
      on:click={() => (selected = color)}>{i + 1}</button
    >
  {/each}
</div>

<style>
  /*tag de style para o componenente, lembrando que o css e local, somente ao componente, as regras css abaixo são escopo do componente */
  h1 {
    transition: color 0.2s;
  }

  div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    max-width: 400px;
  }

  button {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: translate(-2px, -2px);
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
    transition: all 0.1s;
    border: none;
    cursor: pointer;
  }

  button[aria-current="true"] {
    transform: none;
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
  }
</style>
