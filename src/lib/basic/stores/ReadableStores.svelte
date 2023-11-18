<script lang="ts">
  import { time } from "./stores";

  /**
   * * READABLE STORES(ARMAZENAMENTO LÉGIVEL)
   *
   * Nem todas as lojas devem poder ser escritas por quem quer que tenha uma referência a elas. Por exemplo, você pode ter um armazenamento que representa a posição do mouse ou a geolocalização do usuário, e não faz sentido poder definir esses valores “de fora”. Para esses casos, temos lojas legíveis.
   */

  //api formatação da web
  const formatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<!--
  - para evitar o clichê de ficar executando unsubscribe em onDestroy function de ciclo de vida de componente, o svelte tem um truque na manga que simplica isso, podemos fazer a referencia a um valor de store, aqui neste caso referenciamos o store time, com o nome da store com $
  - A assinatura automática funciona apenas com variáveis ​​de armazenamento(store) declaradas (ou importadas) no escopo de nível superior de um componente.
  - Você também não está limitado a usar $time dentro da marcação - você também pode usá-lo em qualquer lugar do <script>, como em manipuladores de eventos ou declarações reativas.
  - Presume-se que qualquer nome que comece com $ se refira a um valor armazenado(store). É efetivamente um caractere reservado — Svelte impedirá que você declare suas próprias variáveis ​​com um $ prefixo.
  - ao usar $time store dentro da marcação referenciamos o valor store e o assinamos dizendo que este componente utiliza o store, assim podemos utilizar os valores, aqui neste store não podemos atualizar pois e legivel, somente de dentro do store que pode atualizar ou definir os valores, que e de fora so pode obter o valor, assim ao referenciar o store a assinatura e feita sinalizando que este componente usa o store, o valor e definido pelo proprio store, ao assinar, e podemos obter referencia desse valor. o subscribe(assinar) notifica os componentes interessados aqueles que referenciam dentro da marcação sempre que o valor da store mudar.
-->
<h1>The time is {formatter.format($time)}</h1>
