<script lang="ts">
  import Box from "./Box.svelte";

  /**
   * * COMPONENT STYLES(ESTILOS DE COMPONENTE)
   *
   * Freqüentemente, você precisa influenciar os estilos dentro de um componente filho. Talvez queiramos tornar estas caixas vermelhas, verdes e azuis.
   *
   * Uma maneira de fazer isso é com o :global modificador CSS, que permite direcionar indiscriminadamente elementos dentro de outros componentes:
   *
   * Uma maneira de fazer isso é com o :globalmodificador CSS, que permite direcionar indiscriminadamente elementos dentro de outros componentes:
   *
   * Mas há muitas razões para não fazer isso. Por um lado, é extremamente detalhado. Por outro lado, é frágil – qualquer alteração nos detalhes de implementação Box.sveltepode quebrar o seletor.
   *
   * Acima de tudo, porém, é rude. Os componentes devem ser capazes de decidir por si mesmos quais estilos podem ser controlados “de fora”, da mesma forma que decidem quais variáveis ​​são expostas como adereços. :globaldeve ser usado como uma saída de emergência – um último recurso.
   * 
   * Os valores podem ser dinâmicos, como qualquer outro atributo.
   * 
   * Este recurso funciona agrupando cada componente em um <div style="display: contents">, quando necessário, e aplicando as propriedades personalizadas a ele.
   */
</script>

<div class="boxes">
  <!-- --color e uma propriedade de css personalizada para definir o estilo de cor que podem ser contralados de fora do componente, qualuqer elemento pai como boxes pode definir o valor de --color, mas também podemos defini-lo em componentes individuais. os valores podem ser dinamicos como qualquer outro atributo-->
  <Box --color="red" />
  <Box --color="green" />
  <Box --color="blue" />
</div>
