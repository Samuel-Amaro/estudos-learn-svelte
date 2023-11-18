<script lang="ts">//tag de script
  /**
   * * SEU PRIMEIRO COMPONENTE
   * 
   * Um componente é um bloco de código reutilizável e independente que encapsula HTML, CSS e JavaScript que pertencem um ao outro, gravados em um .svelte arquivo. 
   * 
   * * ADICIONANDO DADOS
   * 
   * adicionando alguns dados para o componente não renderizar somente marcação estática
  */

  //declaramos uma variavel que armazena um dado
  let name = 'Svelte';
</script>

<!--podemos nos referir a variavel name dentro da marcação HTML.
Dentro das chaves, podemos colocar qualquer JavaScript que quisermos.-->
<h1>Hello {name.toUpperCase()}</h1>