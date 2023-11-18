<script lang="ts">
  import { createTodoStore } from "./todos";
  import TodoList from "./TodoList.svelte";

  /**
   * * DEFERRED TRANSITIONS(TRANSIÇÕES DIFERIDAS)
   * 
   * Um recurso particularmente poderoso do mecanismo de transição do Svelte é a capacidade de adiar transições, para que possam ser coordenadas entre vários elementos.
   * 
   * Veja este par de listas de tarefas, nas quais alternar uma tarefa a envia para a lista oposta. No mundo real, os objetos não se comportam assim — em vez de desaparecerem e reaparecerem em outro lugar, eles se movem por uma série de posições intermediárias. Usar o movimento pode ajudar muito os usuários a entender o que está acontecendo em seu aplicativo.
   * 
   * vamos usar uma function de transição para conseguir esse efeito
   * 
   * Agora, quando você alterna os itens, eles se movem suavemente para o novo local. Os itens que não são de transição ainda saltam de maneira estranha
   * 
  */

  const todos = createTodoStore([
    { id: 0, done: false, description: "write some docs" },
    { id: 0, done: false, description: "start writing blog post" },
    { id: 0, done: true, description: "buy some milk" },
    { id: 0, done: false, description: "mow the lawn" },
    { id: 0, done: false, description: "feed the turtle" },
    { id: 0, done: false, description: "fix some bugs" },
  ]);
</script>

<div class="board">
  <input
    placeholder="what needs to be done?"
    on:keydown={(e) => {
      if (e.key === "Enter") {
        todos.add(e.currentTarget.value);
        e.currentTarget.value = "";
      }
    }}
  />

  <div class="todo">
    <h2>todo</h2>
    <TodoList store={todos} done={false} />
  </div>

  <div class="done">
    <h2>done</h2>
    <TodoList store={todos} done={true} />
  </div>
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

  .board > input {
    font-size: 1.4em;
    grid-column: 1/3;
    padding: 0.5em;
    margin: 0 0 1rem 0;
  }

  h2 {
    font-size: 2em;
    font-weight: 200;
  }
</style>
