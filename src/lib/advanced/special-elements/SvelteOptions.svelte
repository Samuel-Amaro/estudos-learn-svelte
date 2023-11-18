<script lang="ts">
  import Todo from "./Todo.svelte";

  /**
   * * O <svelte:options /> elemento permite especificar opções do compilador.
   * 
   * O elemento <svelte:options> permite especificar opções do compilador.
   * 
   * Usaremos a opção imutável(immutable) como exemplo. Neste aplicativo, o componente <Todo> pisca sempre que recebe novos dados. Clicar em um dos itens alterna seu estado concluído, criando uma matriz de todos atualizada. Isso faz com que os outros itens <Todo> pisquem, mesmo que eles não façam nenhuma alteração no DOM.
   * 
   * Podemos otimizar isso dizendo ao componente <Todo> para esperar dados imutáveis. Isso significa que prometemos nunca alterar a todo propriedade todo, mas em vez disso criaremos novos objetos todo sempre que as coisas mudarem.
   * 
   * As opções que podem ser definidas aqui são:
   * 
   * immutable={true}— você nunca usa dados mutáveis, então o compilador pode fazer verificações simples de igualdade referencial para determinar se os valores foram alterados
   * immutable={false}- o padrão. Svelte será mais conservador sobre se os objetos mutáveis ​​mudaram ou não
   * accessors={true}— adiciona getters e setters para os adereços do componente
   * accessors={false}- o padrão
   * namespace="..."— o namespace onde este componente será usado, mais comumente"svg"
   * customElement="..."— o nome a ser usado ao compilar este componente como um elemento personalizado
   * 
   * Consulte a referência da API para obter mais informações sobre essas opções.
   */

  let todos = [
    { id: 1, done: true, text: "wash the car" },
    { id: 2, done: false, text: "take the dog for a walk" },
    { id: 3, done: false, text: "mow the lawn" },
  ];

  function toggle(toggled: { id: number; done: boolean; text: string }) {
    todos = todos.map((todo) => {
      if (todo === toggled) {
        // return a new object
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done,
        };
      }

      // return the same object
      return todo;
    });
  }
</script>

<div class="centered">
  <h1>todos</h1>

  <ul class="todos">
    {#each todos as todo (todo.id)}
      <Todo {todo} on:change={() => toggle(todo)} />
    {/each}
  </ul>
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }
</style>
