<script lang="ts">
	import Card from './Card.svelte';

  /**
   * * SLOTS
   * 
   * Assim como os elementos podem ter filhos...
   * 
   * ...assim como os componentes. Porém, antes que um componente possa aceitar filhos, ele precisa saber onde colocá-los. Fazemos isso com o <slot> elemento.
  */
</script>

<main>
	<Card>
		<!-- 
      - conteudo vai aqui 
      - o conteudo abaixo representa filhos do componente Card
    -->
    <span>Patrick BATEMAN</span>
    <span>Vice President</span>
	</Card>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100%;
		background: url(./wood.svg);
	}
</style>