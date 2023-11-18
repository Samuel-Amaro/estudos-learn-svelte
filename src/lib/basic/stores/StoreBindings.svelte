<script lang="ts">
  import { name, greeting } from "./stores";

  /**
   * * STORE BINDINGS(VINCULAÇÕES A LOJA)
   *
   * Se um armazenamento for gravável — ou seja, tiver um set método — você poderá vincular ao seu valor, assim como pode vincular ao estado do componente local.
   */
</script>

<!--
  - para evitar o clichê de ficar executando unsubscribe em onDestroy function de ciclo de vida de componente, o svelte tem um truque na manga que simplifica isso, podemos fazer a referencia a um valor de store, aqui neste caso referenciamos o store greeting, com o nome da store com $
  - A assinatura automática funciona apenas com variáveis ​​de armazenamento(store) declaradas (ou importadas) no escopo de nível superior de um componente.
  - Você também não está limitado a usar $greeting dentro da marcação - você também pode usá-lo em qualquer lugar do <script>, como em manipuladores de eventos ou declarações reativas.
  - Presume-se que qualquer nome que comece com $ se refira a um valor armazenado(store). É efetivamente um caractere reservado — Svelte impedirá que você declare suas próprias variáveis ​​com um $ prefixo.
  - ao usar $greeting, store dentro da marcação referenciamos o valor store e o assinamos dizendo que este componente utiliza o store, assim podemos utilizar os valores, ou atualizalos, aqui neste store, o subscribe(assinar) notifica os componentes interessados aqueles que referenciam dentro da marcação sempre que o valor da store mudar.
  - aqui referenciamos o store countPerson
-->
<h1>{$greeting}</h1>

<!--aqui usamos a diretiva bind:value={state} para fazer uma vinculação, do value do input a um state, no caso não estamos usando um state e sim um store, aqui usamos um store writable que possui um set método para que possa fazer a vinculação usando a sintaxe $, alterar o value do input agora atualizara o name e todos os seus dependentes-->
<input bind:value={$name} />

<!--usando a diretiva on:event={handler}, para atribuir diretamente valores de armazenamento dentro de um componente. o manipualdor de eventos inline ira atualizar o name store, atribuindo um novo valor-->
<button on:click={() => ($name += "!")}> Add exclamation mark! </button>
