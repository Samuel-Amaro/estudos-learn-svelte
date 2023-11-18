<script lang="ts"> //tag de script
  import Nested from "./Nested.svelte";
  /**
   * * DECLARANDO PROPS(PROPRIEDADES)
   * 
   * Até agora, tratamos exclusivamente do estado interno — ou seja, os valores só são acessíveis dentro de um determinado componente.
   * 
   * Em qualquer aplicação real, você precisará passar dados de um componente para seus filhos. Para fazer isso, precisamos declarar propriedades , geralmente abreviadas para 'props'. No Svelte, fazemos isso com a export palavra-chave.
  */
</script>

<!--passando um valor para a propriedade answer do componente Nested-->
<Nested answer={42}/>
<!--renderizando o componente Neste sem fornecer um valor para a propriedade answer,usando o valor padrão definido la na propriedade dentro do componente-->
<Nested />