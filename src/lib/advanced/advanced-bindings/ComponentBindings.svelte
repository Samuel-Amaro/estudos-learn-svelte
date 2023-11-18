<script lang="ts">
  import Keypad from "./Keypad.svelte";

  /**
   * * COMPONENT BINDINGS(VINCULAÇÕES DE COMPONENTES)
   * 
   * Assim como você pode vincular às propriedades dos elementos DOM, você pode vincular aos adereços do componente. Por exemplo, podemos vincular ao value prop deste <Keypad> componente como se fosse um elemento de formulário:
   * 
   * Agora, quando o usuário interage com o teclado, o valor de pinno componente pai é atualizado imediatamente.
   * 
   * Use ligações de componentes com moderação. Pode ser difícil rastrear o fluxo de dados em torno de seu aplicativo se você tiver muitos deles, especialmente se não houver uma “fonte única de verdade”.
   */

  //declara uma variavel de state de componente
  //ao receber uma atribuição de valor ira atualizar o dom e acionar uma nova renderização
  let pin: string;

  //Qualquer instrução de nível superior (ou seja, que não esteja dentro de um bloco ou função) pode se tornar reativa prefixando-a com a $: sintaxe do rótulo JS . As instruções reativas são executadas após outro código de script e antes da marcação do componente ser renderizada, sempre que os valores dos quais elas dependem forem alterados.
  //Somente os valores que aparecem diretamente no $:bloco se tornarão dependências da instrução reativa.
  //view e uma variavel que e atualiza a cada mudança de pin state interno do componente, e uma instrução reativa, apos cada alteração em pin state que e uma dependencia da instrução reativa, aciona uma atualização para view ser instrução reativa se executada
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : "enter your pin";

  //function manipuladora de evento
  function handleSubmit() {
    alert(`submitted ${pin}`);
  }
</script>

<h1 style="opacity: {pin ? 1 : 0.4}">
  {view}
</h1>

<!--fazendo vinculação ao prop do componente, vamos vincular ao value prop deste componente, vamos vincular o value prop ao state pin, e vamos ouvir um evento de componente no componente, vamos ouvir o evento de componente submit-->
<Keypad bind:value={pin} on:submit={handleSubmit} />
