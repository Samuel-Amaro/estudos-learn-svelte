<script lang="ts">
  import Canvas from "./Canvas.svelte";
  import Square from "./Square.svelte";

  /**
   * * setContext and getContext
   *
   * A API de contexto fornece um mecanismo para os componentes 'conversarem' entre si sem passar dados e funções como acessórios ou despachar muitos eventos. É um recurso avançado, mas útil. Neste exercício, vamos recriar Schotter de George Nees — um dos pioneiros da arte generativa — usando a API de contexto.
   * 
   * Assim como as funções de ciclo de vida, setContext e getContext devem ser chamados durante a inicialização do componente. (A chave de contexto ('canvas' neste caso) pode ser qualquer coisa que você quiser, incluindo não strings, o que é útil para controlar quem pode acessar o contexto.)
   * 
   * Seu objeto de contexto pode incluir qualquer coisa, inclusive lojas(stores). Isso permite passar valores que mudam ao longo do tempo para componentes filhos:
   
   // in a parent component
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  setContext('my-context', {
    count: writable(0) //criar um store para ser usado pelo componente pai e os filhos, tornando o reativo
  });

  // in a child component
  import { getContext } from 'svelte';

  const { count } = getContext('my-context');

  $: console.log({ count: $count });
  */

  // usamos um gerador de números aleatórios propagado para obter jitter consistente
  let seed = 1;

  function random() {
    seed *= 16807;
    seed %= 2147483647;
    return (seed - 1) / 2147483646;
  }

  function jitter(amount: number) {
    return amount * (random() - 0.5);
  }
</script>

<div class="container">
  <Canvas width={800} height={1200}>
    {#each Array(12) as _, c}
      {#each Array(22) as _, r}
        <Square
          x={180 + c * 40 + jitter(r * 2)}
          y={180 + r * 40 + jitter(r * 2)}
          size={40}
          rotate={jitter(r * 0.05)}
        />
      {/each}
    {/each}
  </Canvas>
</div>

<style>
  .container {
    height: 100%;
    aspect-ratio: 2 / 3;
    margin: 0 auto;
    background: rgb(224, 219, 213);
    filter: drop-shadow(0.5em 0.5em 1em rgba(0, 0, 0, 0.1));
  }
</style>
