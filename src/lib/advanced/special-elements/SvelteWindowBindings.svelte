<script lang="ts">
  /**
   * * <svelte:window> bindings
   * 
   * Também podemos vincular a certas propriedades de window, como scrollY:
   * 
   * A lista de propriedades às quais você pode vincular é a seguinte:
   * 
   * innerWidth
   * innerHeight
   * outerWidth
   * outerHeight
   * scrollX
   * scrollY
   * online- um apelido para window.navigator.onLine
   * 
   * Todos, exceto scrollX e, scrollY são somente leitura.
   */
	let y = 0;
</script>

<!--
  - O <svelte:window> elemento permite adicionar ouvintes de eventos ao window objeto sem se preocupar em removê-los quando o componente for destruído ou em verificar a existência de windowquando a renderização do lado do servidor.
  - Ao contrário <svelte:self>, este elemento só pode aparecer no nível superior do seu componente e nunca deve estar dentro de um bloco ou elemento.
  - aqui vamos vincular a propriedades especificas do window objeto a um state interno do nosso componente como y que ira representar o scroll na vertical
-->
<svelte:window bind:scrollY={y}/>

<span>depth: {y}px</span>

<style>
	:global(body) {
		height: 400vw;
		background: url(./transferir.webp);
		background-size: cover;
	}

	span {
		position: fixed;
		font-size: 2em;
		color: white;
		font-variant: tabular-nums;
	}
</style>