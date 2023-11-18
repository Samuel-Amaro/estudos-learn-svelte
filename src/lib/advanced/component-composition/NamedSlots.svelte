<script lang="ts">
  import Card2 from './Card2.svelte';

  /**
   * * NAMED SLOTS(SLOTS NOMEADOS)
   * 
   * O exemplo anterior continha um slot padrão , que renderiza os filhos diretos de um componente. Às vezes você precisará de mais controle sobre o posicionamento. Nesses casos, podemos usar slots nomeados .
  */
</script>

<main>
	<Card2>
		<span>Patrick BATEMAN</span>
		<span>Vice President</span>
    <!--
      - o conteudo abaixo representa filhos do componente Card
      - e um slot nomeado, que representa um filho do componente Card com mais controle
      - além de criar o conteudo aqui que vai ser filho do card, precisa ir dentro do componente card e criar os slots nomeados correspondetes dentro de card
    -->
		<span slot="telephone">212 555 6342</span>

		<span slot="company">
			Pierce &amp; Pierce
			<small>Mergers and Aquisitions</small>
		</span>
		
		<span slot="address">358 Exchange Place, New York, N.Y. 100099 fax 212 555 6390 telex 10 4534</span>
	</Card2>
</main>

<style>
	main {
		display: grid;
		place-items: center;
		height: 100%;
		background: url(./wood.svg);
	}

	small {
		display: block;
		font-size: 0.6em;
		text-align: right;
	}
</style>