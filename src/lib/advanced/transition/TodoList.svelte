<script lang="ts">
  import type { Invalidator, Subscriber, Unsubscriber } from "svelte/store";
  import type { Todo } from "./todos";
  import { send, receive } from "./transition";

  //props do componente TodoList
  export let store: {
    subscribe: (
      this: void,
      run: Subscriber<
        {
          id: number;
          done: boolean;
          description: string;
        }[]
      >,
      invalidate?:
        | Invalidator<
            {
              id: number;
              done: boolean;
              description: string;
            }[]
          >
        | undefined
    ) => Unsubscriber;
    add: (description: string) => void;
    remove: (todo: Todo) => void;
    mark: (todo: Todo, done: boolean) => void;
  };
  export let done: boolean;
</script>

<ul class="todos">
  <!--itera um array filtrado. aqui a expressão chave foi fornecida, a (todo.id) identifica exclusivamente cada item da lista, o svelte usara para diferenciar a lista quando os dados forem alterados, em vez de adicionar ou remover itens no final-->
  {#each $store.filter((todo) => todo.done === done) as todo (todo.id)}
    <!--
    usando a transition diretiva, junto a function receive, e send functions de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom
  - Observe que a transição é reversível — se você alternar a caixa de seleção enquanto a transição estiver em andamento, ela fará a transição do ponto atual, em vez do início ou do fim.
  - usando as in(entrada) é out(saida) diretiva juntas para criar uma transição na entrada usando function receive de transição e send no out(saida) diretiva, a transição fara o elemento se mover para novas posições de forma mais suave
  -->
    <li class:done in:receive={{ key: todo.id }} out:send={{ key: todo.id }}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          on:change={(e) => store.mark(todo, e.currentTarget.checked)}
        />

        <span>{todo.description}</span>

        <button on:click={() => store.remove(todo)} aria-label="Remove" />
      </label>
    </li>
  {/each}
</ul>

<style>
  label {
    width: 100%;
    height: 100%;
    display: flex;
  }

  span {
    flex: 1;
  }

  button {
    background-image: url(./remove.svg);
  }
</style>
