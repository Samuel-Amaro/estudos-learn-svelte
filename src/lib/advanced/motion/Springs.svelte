<script lang="ts">
  import { spring } from 'svelte/motion';
	import { writable } from 'svelte/store';

  /**
   * * SPRINGS(MOLAS)
   * 
   * A spring função é uma alternativa tweened que geralmente funciona melhor para valores que mudam com frequência.
   * 
   * Svelte inclui ferramentas para ajudá-lo a construir interfaces de usuário elegantes que usam animação para comunicar alterações.
   * 
   * vamos usar uma function de motion para animar a alterações na UI
  */

  //cria stores gravaveis que fornecem metodos subscribe, set, update que podem definir valores fora do store
	//let coords = writable({ x: 50, y: 50 }); //store para cordenadas de circuclo
	//let size = writable(10); //store para tamanho de circulo

	//vamos converter os stores em springs store 
  //aqui vamos usar animações para comunicar alterações na UI
  //Uma function spring loja(store) muda gradualmente para seu valor alvo com base em seus parâmetros stiffness e damping. Enquanto tweened os armazenamentos alteram seus valores durante um período fixo, spring os armazenamentos mudam durante um período determinado pela velocidade existente, permitindo um movimento mais natural em muitas situações. As seguintes opções estão disponíveis:
  //stiffness( number, padrão 0.15) — um valor entre 0 e 1 onde maior significa uma mola 'mais apertada'
  //damping( number, padrão 0.8) — um valor entre 0 e 1 onde menor significa uma mola mais 'elástica'
  //precision( number, padrão 0.01) — determina o limite no qual a mola é considerada como tendo 'assentado', onde menor significa mais preciso
  //Ambas as springs têm valores padrão de stiffness e damping, que controlam a, bem... elasticidade da mola. Podemos especificar nossos próprios valores iniciais:
  let coords = spring({ x: 50, y: 50 }, {
    stiffness: 0.1, //especificando um valor inicial para a configuração da rigidez da spring(mola)
    damping: 0.25 //especificando um valor inicial para o amortecimento da mola
  }); //store para cordenadas de circuclo
	let size = spring(10); //store para tamanho de circulo
</script>

<svg
	on:mousemove={(e) => {
    //atualiza o valor do store spring com novas coordendas
		coords.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle
		cx={$coords.x}
		cy={$coords.y}
		r={$size}
	/>
</svg>

<div class="controls">
	<label>
		<h3>stiffness ({coords.stiffness})</h3>
		<!--vincula o value do input ao spring store especificamente na propriedade stiffness-->
    <input
			bind:value={coords.stiffness}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>

	<label>
		<h3>damping ({coords.damping})</h3>
		<!--vincula o value do input ao spring store especificamente na propriedade damping-->
    <input
			bind:value={coords.damping}
			type="range"
			min="0.01"
			max="1"
			step="0.01"
		/>
	</label>
</div>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	circle {
		fill: #ff3e00;
	}

	.controls {
		position: absolute;
		top: 1em;
		right: 1em;
		width: 200px;
		user-select: none;
	}

	.controls input {
		width: 100%;
	}
</style>
