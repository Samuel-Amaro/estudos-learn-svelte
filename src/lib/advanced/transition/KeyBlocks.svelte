<script lang="ts">
  import { onMount } from "svelte";
  import typewriter from "./transition";
  import { messages } from "./loading-message";

  /**
   * * KEY-BLOCKS
   *
   * Os blocos-chave destroem e recriam seu conteúdo quando o valor de uma expressão muda. Isso é útil se você deseja que um elemento reproduza sua transição sempre que um valor for alterado, em vez de apenas quando o elemento entrar ou sair do DOM.
   *
   * Aqui, por exemplo, gostaríamos de reproduzir a type writer transição  sempre que a mensagem de carregamento, ou seja, i muda. Envolva o <p>elemento em um bloco-chave:
   */

  //variavel de state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let i = -1;

  //onMount e uma function do ciclo de vida de um componente(quando e criado e destruido), a function onMount e executado depois que o componete é renderizado pela primeira vez no DOM. a onMount function executa um codigo depois que o componente e renderizado no DOM pela primera vez. esta function sera executada quando o componente for montado.
  onMount(() => {
    //a cada 2,5s o i e atualizando com um novo valor
    const interval = setInterval(() => {
      i += 1;
      i %= messages.length;
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<h1>loading...</h1>

<!--
  - Os blocos-chave destroem e recriam seu conteúdo quando o valor de uma expressão muda. Isso é útil se você deseja que um elemento reproduza sua transição sempre que um valor for alterado, em vez de apenas quando o elemento entrar ou sair do DOM.
  - gostariamos aqui de sempre reproduzir a transição typewriter sempre que a mensagem de carregamento mudar no caso o i indice, a cada mudança aciona uma nova renderização, reproduzindo a transition typewriter
-->
{#key i}
  <!--
  usando a transition diretiva, junto a function typewriter de transition customizada function de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom.
  a transition aqui e para efeitor de entrar e sair do dom como maquina de escrever
  - podemos passar paramentros para a function de transição
  - Observe que a transição é reversível — se você alternar a caixa de seleção enquanto a transição estiver em andamento, ela fará a transição do ponto atual, em vez do início ou do fim.
-->
  <p in:typewriter={{ speed: 10 }}>
    {messages[i] || ""}
  </p>
{/key}
