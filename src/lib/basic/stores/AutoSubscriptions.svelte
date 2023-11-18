<script lang="ts">
  //import { onDestroy } from "svelte";
  import Decrementer from "./Decrementer.svelte";
  import Incrementer from "./Incrementer.svelte";
  import Resetter from "./Resetter.svelte";
  import { count } from "./stores";

  /**
   * * AUTO SUBSCRIPTIONS(ASSINATURAS AUTOMATICAS)
   *
   * O aplicativo do exemplo anterior funciona, mas há um bug sutil: a assinatura da loja é feita, mas a assinatura nunca é cancelada. Se o componente fosse instanciado e destruído muitas vezes, isso resultaria em vazamento de memória .
   */

  //configurando o count_value state interno do componente para sempre que o store count ir notificar os componentes que o estão usando sobre uma alteração de valor, isso e sempre que o count store mudar seu valor ira notificar, nos podemos armazenar esse valor em um state interno aqui do componente, para acionar uma atualização no dom e refletir na UI
  //let count_value: number = 0;

  //a store count e um objeto com um subscribe método que permite que as partes interessadas sejam notificadas sempre que o valor da loja mudar.
  //aqui estamos configurando o callback para o subscribe, o callback sera executado sempre que um valor em store count mudar
  //chama um subscribe método de um store retorna uma unsubscribe function
  /*const unsubscribe = count.subscribe((value) => {
    //atribui um novo valor atualizado do store count ao state interno do componente
    count_value = value;
  });*/

  //onDestroy é uma function do ciclo de vida de um componente(quando e criado e destruido), a function onDestroy e executado depois que o componete é destruido.
  //ira executar a function unsubscribe depois que o componente for destruido
  //Agenda um retorno de chamada(callback) para ser executado imediatamente antes de o componente ser desmontado.
  //onDestroy(unsubscribe);

  /**
   * Porém, começa a ficar um pouco clichê, especialmente se o seu componente for assinante de várias stores. Em vez disso, Svelte tem um truque na manga - você pode fazer referência a um valor de store prefixando o nome da store com $:
   */
</script>

<!--
  - para evitar o clichê de ficar executando unsubscribe em onDestroy function de ciclo de vida de componente, o svelte tem um truque na manga que simplica isso, podemos fazer a referencia a um valor de store, aqui neste caso referenciamos o store count, com o nome da store com $
  - A assinatura automática funciona apenas com variáveis ​​de armazenamento(store) declaradas (ou importadas) no escopo de nível superior de um componente.
  - Você também não está limitado a usar $count dentro da marcação - você também pode usá-lo em qualquer lugar do <script>, como em manipuladores de eventos ou declarações reativas.
  - Presume-se que qualquer nome que comece com $ se refira a um valor armazenado(store). É efetivamente um caractere reservado — Svelte impedirá que você declare suas próprias variáveis ​​com um $ prefixo.
-->
<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
