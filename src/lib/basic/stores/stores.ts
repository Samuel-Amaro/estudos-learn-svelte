import {derived, readable, writable} from "svelte/store";

//aqui estamos declarando uma store
//a store permite que varios componentes não relacionados acessem o store para buscar valores, fora do componente, uma store não pertence a hierarquia de componentes do aplicativo
//aqui está a definição de count store
//e um armazenamento gravável(writable), o que significa que possui métodos set, update além de subscribe
//que e inicializada com o valor 0
//Função que cria um armazenamento que possui valores que podem ser definidos a partir de componentes 'externos'. Ele é criado como um objeto com métodos adicionais set e update.
//set é um método que recebe um argumento que é o valor a ser definido. O valor armazenado é definido como o valor do argumento se o valor armazenado ainda não for igual a ele.
//update é um método que recebe um argumento que é um retorno de chamada(callback). O retorno de chamada(callback) toma o valor da loja existente como argumento e retorna o novo valor a ser definido para a loja.
export const count = writable(0);

//nem todas as stores(lojas ou armazenamento) pode ser escritas por quem que que tenha uma refencia a elas
//para isso temos store legíveis(readable)
//o primeiro argumento readable e um valor inicial que pode ser null ou undefined, se ainda não tiver um valor para inicialização
//o segundo argumento e uma start functtion que recebe um set callback e retorna um stop function
//a start function e chamada quando a store consegue seu primeiro assinante(subscribe)
//a stop e chamado quando o ultimo subscribe(assinante) cancela a assinatura
//Cria uma loja(store) cujo valor não pode ser definido de 'fora', o primeiro argumento é o valor inicial da loja(store) e o segundo argumento readable é igual ao segundo argumento de writable.
export const time = readable<undefined | Date>(undefined, function start(set) {
  // o código de configuração vai aqui
  const interval = setInterval(() => {
		set(new Date());
	}, 1000);
  return function stop() {
    // o código de desmontagem vai aqui
    clearInterval(interval);
  }
});

const start = new Date();

//aqui criamos uma nova store que armazena o tempo decorrido de uma página aberta
//essa store e derivada o seu valor e baseado no valor de uma ou mais store com derived
//podemos criar uma store(armazenamento) cujo valor seja baseado no valor de uma ou mais (stores) com derived
//Deriva uma loja de uma ou mais outras lojas. O retorno de chamada(callback) é executado inicialmente quando o primeiro assinante se inscreve e, em seguida, sempre que as dependências da loja mudam.
//na versão mais simples derived utiliza um unico store que e o time e o callback retorna um valor derivado
//asssim que o primeiro subscribe for acionado por algum componente que esteja referenciado o store, ele sera notificado da mundança
//a depedencia desse store elapsed e time, primeria vez executa o callback, assim que subscribe e assinado(um componente o referencia), e executado também sempre que as depedencias da store mudam, a depedencia aqui e o store time
export const elapsed = derived(time, ($time) => {
  if ($time) {
    return Math.round(($time.getTime() - start.getTime()) / 1000)
  }
});

//store(loja ou armazenamento) personalizada
//Contanto que um objeto implemente corretamente o subscribe método, ele é uma loja. Além disso, vale tudo. É muito fácil, portanto, criar lojas personalizadas com lógica específica de domínio.
//aqui estamos criando uma store personalizada, cantanto que um objeto implemente corretamente o subscribe método, ele e uma store
function createCount() {
  //cria uma store gravavel, pode ser atualizada e definir valores por fora da loja
  //para os componentes que o assinam pode atualiza/definir valores na store
	const { subscribe, set, update } = writable(0);

  //métodos da store, ao inves de expor os metodos set, update, o envelopamos em outros métodos, e expomos outros
	return {
		subscribe, //método que assina a store, sempre que o valor da store mudar as partes assinadas que referenciam a store são notificadas por meio de subscribe que executa um codigo
		increment: () => update((n) => n + 1), //incrementa contador
		decrement: () => update((n) => n - 1), //decrementa contador
		reset: () => set(0) //reseta contador
	};
}

//exportamos o countPerson store personalizado
export const countPerson = createCount();


//Se um armazenamento for gravável(writable) - ou seja, tiver um método definido(set)- você poderá vincular ao seu valor, assim como pode vincular ao estado do componente local.
//aqui criamos um store gravável que dispobnibiliza metodos como set, update, subscribe, este store pode ser atualizado e definir valores fora do store, por componentes de fora.
export const name = writable('world');
//aqui criamos um store derivado do store name,
//na versão mais simples derived utiliza um unico store que e o name e o callback retorna um valor derivado
//asssim que o primeiro subscribe for acionado por algum componente que esteja referenciado o store, ele sera notificado da mundança
//a depedencia desse store e name, primeria vez executa o callback, assim que subscribe e assinado(um componente o referencia), e executado também sempre que as depedencias da store mudam, a depedencia aqui e o store name
//a $name += '!' atribuição é equivalente a name.set($name + '!');
export const greeting = derived(name, ($name) => `Hello ${$name}!`);