<script lang="ts">
  import { time, elapsed } from "./stores";

  /**
   * * DEDRIVED STORES
   *
   * Você pode criar uma loja cujo valor seja baseado no valor de uma ou mais lojas com derived.
   *
   * É possível derivar um armazenamento de vários armazenamentos de entrada e definir(set) explicitamente um valor em vez de retorná-lo (o que é útil para derivar valores de forma assíncrona).
   */

  //usando api web de formatação
  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<!--
  - para evitar o clichê de ficar executando unsubscribe em onDestroy function de ciclo de vida de componente, o svelte tem um truque na manga que simplica isso, podemos fazer a referencia a um valor de store, aqui neste caso referenciamos o store time é elapsed, com o nome da store com $
  - A assinatura automática funciona apenas com variáveis ​​de armazenamento(store) declaradas (ou importadas) no escopo de nível superior de um componente.
  - Você também não está limitado a usar $elapsed e time dentro da marcação - você também pode usá-lo em qualquer lugar do <script>, como em manipuladores de eventos ou declarações reativas.
  - Presume-se que qualquer nome que comece com $ se refira a um valor armazenado(store). É efetivamente um caractere reservado — Svelte impedirá que você declare suas próprias variáveis ​​com um $ prefixo.
  - ao usar $time, elapsed store dentro da marcação referenciamos o valor store e o assinamos dizendo que este componente utiliza o store, assim podemos utilizar os valores, aqui neste store não podemos atualizar pois e legivel, somente de dentro do store que pode atualizar ou definir os valores, que e de fora so pode obter o valor, assim ao referenciar o store a assinatura e feita sinalizando que este componente usa o store, o valor e definido pelo proprio store, ao assinar, e podemos obter referencia desse valor. o subscribe(assinar) notifica os componentes interessados aqueles que referenciam dentro da marcação sempre que o valor da store mudar.
  - aqui referenciamos o store time
-->
<h1>The time is {formatter.format($time)}</h1>

<!--aqui usamos outra store chamada $elapsed-->
<p>
  This page has been open for
  {$elapsed}
  {$elapsed === 1 ? "second" : "seconds"}
</p>
