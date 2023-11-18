<script lang="ts">
  /**
   * * ATRIBUTOS DINÂMICOS
   *
   * Assim como você pode usar chaves para controlar o texto, você pode usá-las para controlar os atributos dos elementos. 
   * 
  */

  //declara uma variavel que armazena um valor, o src de uma imagem, que sera o valor de um src atributo de uma imagem
  let src = "/image.gif";

  //declara outra variavel que ira armazenar o name valor
  //usando variavel para controlar texto
  //que sera uma parte do alt atributo de uma tag img
  let name = "Rick Astley";

  /**
   * * ATRIBUTOS ABREVIADOS
   * 
   * Não é incomum ter um atributo onde o nome e o valor são iguais, como src={src}. Svelte nos fornece uma abreviação conveniente para estes casos:
  */
</script>

<!--
  podemos usar {chaves} dentro dos atributos de uma tag
-->
<img src={src} alt="{name} dances."/>
<!--usando atributo abreviado, usando a abreviação fornecida por svelt-->
<img {src} alt="{name} dances."/>
