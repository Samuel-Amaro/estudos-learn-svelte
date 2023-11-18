import { writable } from 'svelte/store';

export type Todo = {
  id: number;
  done: boolean;
  description: string;
};

export function createTodoStore(initial: Todo[]) {
	let uid = 1;

	const todos = initial.map(({ done, description }) => {
		return {
			id: uid++,
			done,
			description
		};
	});

  //a store permite que varios componentes não relacionados acessem o store para buscar valores, fora do componente, uma store não pertence a hierarquia de componentes do aplicativo
  //aqui está a definição de todo store
  //e um armazenamento gravável(writable), o que significa que possui métodos set, update além de subscribe
  //que e inicializada com o array de todos
  //Função que cria um armazenamento que possui valores que podem ser definidos a partir de componentes 'externos'. Ele é criado como um objeto com métodos adicionais set e update.
  //set é um método que recebe um argumento que é o valor a ser definido. O valor armazenado é definido como o valor do argumento se o valor armazenado ainda não for igual a ele.
  //update é um método que recebe um argumento que é um retorno de chamada(callback). O retorno de chamada(callback) toma o valor da loja existente como argumento e retorna o novo valor a ser definido para a loja.
	const { subscribe, update } = writable(todos);

	return {
		subscribe,
		add: (description: string) => {
			const todo = {
				id: uid++,
				done: false,
				description
			};
      //update é um método que recebe um argumento que é um retorno de chamada(callback). O retorno de chamada(callback) toma o valor da loja existente como argumento e retorna o novo valor a ser definido para a loja.
      //$todos referencia o valor armazenado no store, referencia o proprio store
			update($todos => [...$todos, todo])
		},
    remove: (todo: Todo) => {
			update($todos => $todos.filter((t) => t !== todo));
		},
		mark: (todo: Todo, done: boolean) => {
			update($todos => [
				...$todos.filter((t) => t !== todo),
				{ ...todo, done }
			]);
		}
	};
}
