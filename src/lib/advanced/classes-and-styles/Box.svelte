<!-- Os componentes devem ser capazes de decidir por si mesmos quais estilos podem ser controlados “de fora”, da mesma forma que decidem quais variáveis ​​são expostas como adereços.-->
<div class="box" />

<style>
	.box {
		width: 5em;
		height: 5em;
		border-radius: 0.5em;
		margin: 0 0 1em 0;
    /*
     - alterar a background-color para que seja determinado por uma propriedade css personalizada
    - qualquer elemento pai, pode definir o valor --color, mas também podemos defini-lo em componentes individuais*/
		background-color: var(--color, #ddd);
	}
</style>