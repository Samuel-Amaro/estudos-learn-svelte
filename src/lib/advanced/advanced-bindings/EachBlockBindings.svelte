<script lang="ts">
  /**
   * * EACH BLOCK BINDINGS(VINCULAÇÕES DENTRO DE BLOCO EACH)
   *
   * Você pode até vincular propriedades dentro de um each bloco.
   *
   * Observe que interagir com esses <input>elementos causará mutação no array. Se preferir trabalhar com dados imutáveis, você deve evitar essas ligações e usar manipuladores de eventos.
   */

  //declaramos um array de objetos
  //este array e um state interno do componente, ao receber um atribuição essa variavel ira atualizar o dom, e acionar uma renderização
  let todos = [
    { done: false, text: "finish Svelte tutorial" },
    { done: false, text: "build an app" },
    { done: false, text: "world domination" },
  ];

  function add() {
    todos = todos.concat({
      done: false,
      text: "",
    });
  }

  function clear() {
    todos = todos.filter((t) => !t.done);
  }

  //Qualquer instrução de nível superior (ou seja, que não esteja dentro de um bloco ou função) pode se tornar reativa prefixando-a com a $: sintaxe do rótulo JS . As instruções reativas são executadas após outro código de script e antes da marcação do componente ser renderizada, sempre que os valores dos quais elas dependem forem alterados.
  //Somente os valores que aparecem diretamente no $:bloco se tornarão dependências da instrução reativa.
  //remaining e uma variavel que e atualiza a cada mudança de todos state interno do componente, e uma instrução reativa, apos cada alteração em todos state que e uma dependencia da instrução reativa, aciona uma atualização para remaning ser instrução reativa se executada
  $: remaining = todos.filter((t) => !t.done).length;
</script>

<div class="centered">
  <h1>todos</h1>

  <ul class="todos">
    <!--usando o bloco lógico each para iterar um array na marcação html-->
    {#each todos as todo}
      <li class:done={todo.done}>
        <!--
          - Os dados normalmente fluem de pai para filho. A bind:diretiva permite que os dados fluam no sentido inverso, do filho para o pai. A maioria das ligações são específicas para elementos específicos. 
          - podemos vincular propriedades de elementos dentro de um each bloco, aqui vamos vincular propriedades especificas de input a propriedades de objeto que esta sendo iterado no each bloco
          - aqui vinculamos o checked propriedade do input a propriedade do objeto todo.done
        -->
        <input type="checkbox" bind:checked={todo.done} />
        <!--
          - aqui vinculamos o value propriedade do input a propriedade do objeto todo.text
        -->
        <input
          type="text"
          placeholder="What needs to be done?"
          bind:value={todo.text}
        />
      </li>
    {/each}
  </ul>

  <p>{remaining} remaining</p>

  <button on:click={add}> Add new </button>

  <button on:click={clear}> Clear completed </button>
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  .done {
    opacity: 0.4;
  }

  li {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  li:not(:last-child) {
    margin: 15px;
  }

  input[type="text"] {
    flex: 1;
    padding: 0.5em;
    margin: -0.2em 0;
    border: 2px solid grey;
    border-radius: 10px;
  }
</style>
