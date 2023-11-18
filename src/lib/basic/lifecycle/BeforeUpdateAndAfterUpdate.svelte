<script lang="ts">
  import { Eliza } from "elizabot"; //js não achei module ts
  import { beforeUpdate, afterUpdate } from "svelte";

  /**
   * * beforeUpdate é afterUpdate
   *
   * A beforeUpdate função agenda o trabalho para acontecer imediatamente antes da atualização do DOM. afterUpdate é sua contraparte, usada para executar código quando o DOM estiver sincronizado com seus dados.
   *
   * Juntos, eles são úteis para fazer coisas de forma imperativa que são difíceis de alcançar de uma forma puramente orientada pelo estado, como atualizar a posição de rolagem de um elemento.
   *
   * Este chatbot Eliza é chato de usar, porque você tem que rolar a janela de chat. Vamos consertar isso.
   *
   */

  //variaves que armazenam valor
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let div: HTMLDivElement | null = null;
  let autoscroll = false;

  //function que faz parte de um ciclo de vida(começa quando criado e termina quando destruido) Existem várias funções que permitem executar código em momentos importantes durante esse ciclo de vida.
  //ha beforeUpdate function agenda o trabalho para acontecer imediatamente antes da atualização do DOM.
  //sempre que houver uma atualização do dom esta function e executada antes de atualizar
  //sera executado primeiro antes da montagem do componente
  beforeUpdate(() => {
    //determina se devemos rolar automaticamente
    // assim que o DOM for atualizado...
    if (div) {
      const scrollableDistance = div.scrollHeight - div.offsetHeight;
      autoscroll = div.scrollTop > scrollableDistance - 20;
    }
  });

  //usada para executar codigo quando o DOM estiver sincronizando com seus dados
  afterUpdate(() => {
    // ...o DOM agora está sincronizado com os dados
    if (autoscroll && div) {
      div.scrollTo(0, div.scrollHeight);
    }
  });

  //variaveis normais que so aramzenam valor
  const eliza = new Eliza();
  const pause = (ms: number) =>
    new Promise((fulfil: (value: number) => void) => setTimeout(fulfil, ms));
  const typing = { author: "eliza", text: "..." };
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let comments: { author: string; text: any }[] = [];

  //function manipuladora de evento
  async function handleKeydown(
    event: KeyboardEvent & {
      currentTarget: EventTarget & HTMLInputElement;
    }
  ) {
    if (event.key === "Enter" && event.currentTarget.value) {
      const comment = {
        author: "user",
        text: event.currentTarget.value,
      };

      const reply = {
        author: "eliza",
        text: eliza.transform(comment.text),
      };

      event.currentTarget.value = "";
      comments = [...comments, comment];

      await pause(200 * (1 + Math.random()));
      comments = [...comments, typing];
      await pause(500 * (1 + Math.random()));
      comments = [...comments, reply].filter((comment) => comment !== typing);
    }
  }
</script>

<div class="container">
  <div class="phone">
    <!--bind:this={state} e para obter a referencia do elmento div dentro do div state, o svelte simplifica para a gente usando esta diretiva, para podermos armazenar uma referencia deste elemento html em um state-->
    <div class="chat" bind:this={div}>
      <header>
        <h1>Eliza</h1>
        <article class="eliza">
          <span>{eliza.getInitial()}</span>
        </article>
      </header>
      <!--itera sobre um array, bloco each, permite iterar um iterator dentro da marcação html-->
      {#each comments as comment}
        <article class={comment.author}>
          <span>{comment.text}</span>
        </article>
      {/each}
    </div>

    <!--diretiva on: para adicioncar um evento e manipulador no elemento-->
    <input on:keydown={handleKeydown} />
  </div>
</div>

<style>
  .container {
    display: grid;
    place-items: center;
    height: 100%;
  }

  .phone {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  header {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 4em 0 0 0;
    box-sizing: border-box;
  }

  h1 {
    flex: 1;
    font-size: 1.4em;
    text-align: center;
  }

  .chat {
    height: 0;
    flex: 1 1 auto;
    padding: 0 1em;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  article {
    margin: 0 0 0.5em 0;
  }

  .user {
    text-align: right;
  }

  span {
    padding: 0.5em 1em;
    display: inline-block;
  }

  .eliza span {
    background-color: var(--bg-1);
    border-radius: 1em 1em 1em 0;
    color: var(--fg-1);
  }

  .user span {
    background-color: #0074d9;
    color: white;
    border-radius: 1em 1em 0 1em;
    word-break: break-all;
  }

  input {
    margin: 0.5em 1em 1em 1em;
  }

  @media (min-width: 400px) {
    .phone {
      background: var(--bg-2);
      position: relative;
      font-size: min(2.5vh, 1rem);
      width: auto;
      height: 36em;
      aspect-ratio: 9 / 16;
      border: 0.2em solid #222;
      border-radius: 1em;
      box-sizing: border-box;
      filter: drop-shadow(1px 1px 0px #222) drop-shadow(2px 2px 0px #222)
        drop-shadow(3px 3px 0px #222);
    }

    .phone::after {
      position: absolute;
      content: "";
      background: #222;
      width: 60%;
      height: 1em;
      left: 20%;
      top: 0;
      border-radius: 0 0 0.5em 0.5em;
    }
  }

  @media (prefers-reduced-motion) {
    .chat {
      scroll-behavior: auto;
    }
  }
</style>
