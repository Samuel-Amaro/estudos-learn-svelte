<script lang="ts">
  import Decrementer from "./Decrementer.svelte";
  import Incrementer from "./Incrementer.svelte";
  import Resetter from "./Resetter.svelte";
  import { count } from "./stores";

  /**
   * * WRITABLE STORES(ESCREVENDO LOJAS)
   *
   * Nem todo estado do aplicativo pertence à hierarquia de componentes do seu aplicativo. Às vezes, você terá valores que precisam ser acessados ​​por vários componentes não relacionados ou por um módulo JavaScript normal.
   *
   * Na Svelte, fazemos isso com lojas(stores). Uma loja é simplesmente um objeto com um subscribe método que permite que as partes interessadas sejam notificadas sempre que o valor da loja mudar.
   */

  //configurando o count_value state interno do componente para sempre que o store count ir notificar os componentes que o estão usando sobre uma alteração de valor, isso e sempre que o count store mudar seu valor ira notificar, nos podemos armazenar esse valor em um state interno aqui do componente, para acionar uma atualização no dom e refletir na UI
  let count_value: number = 0;

  //a store count e um objeto com um subscribe método que permite que as partes interessadas sejam notificadas sempre que o valor da loja mudar.
  //aqui estamos configurando o callback para o subscribe, o callback sera executado sempre que um valor em store count mudar
  count.subscribe((value) => {
    //atribui um novo valor atualizado do store count ao state interno do componente
    count_value = value;
  });
</script>

<h1>The count is {count_value}</h1>

<Incrementer />
<Decrementer />
<Resetter />
