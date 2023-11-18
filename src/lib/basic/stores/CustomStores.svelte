<script lang="ts">
  import { countPerson } from "./stores";

  /**
   * * CUSTOM STORES(LOJAS PERSONALIZADAS)
   * 
   * Contanto que um objeto implemente corretamente o subscribe método, ele é uma loja. Além disso, vale tudo. É muito fácil, portanto, criar lojas personalizadas com lógica específica de domínio.
  */
</script>

<!--
  - para evitar o clichê de ficar executando unsubscribe em onDestroy function de ciclo de vida de componente, o svelte tem um truque na manga que simplica isso, podemos fazer a referencia a um valor de store, aqui neste caso referenciamos o store countPerson, com o nome da store com $
  - A assinatura automática funciona apenas com variáveis ​​de armazenamento(store) declaradas (ou importadas) no escopo de nível superior de um componente.
  - Você também não está limitado a usar $countPerson dentro da marcação - você também pode usá-lo em qualquer lugar do <script>, como em manipuladores de eventos ou declarações reativas.
  - Presume-se que qualquer nome que comece com $ se refira a um valor armazenado(store). É efetivamente um caractere reservado — Svelte impedirá que você declare suas próprias variáveis ​​com um $ prefixo.
  - ao usar $countPerson, store dentro da marcação referenciamos o valor store e o assinamos dizendo que este componente utiliza o store, assim podemos utilizar os valores, ou atualizalos, aqui neste store, o subscribe(assinar) notifica os componentes interessados aqueles que referenciam dentro da marcação sempre que o valor da store mudar.
  - aqui referenciamos o store countPerson
-->
<h1>The count is {$countPerson}</h1>

<!--usando a diretiva on:event={manipulador} para atribuir evento ao elementto e adicionar manipulador, como manipuladores usamos os metodos do store-->
<button on:click={countPerson.increment}>+</button>
<button on:click={countPerson.decrement}>-</button>
<button on:click={countPerson.reset}>reset</button>
