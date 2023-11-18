//aqui declaramos uma action
//As ações(actions) são essencialmente funções do ciclo de vida em nível de elemento.
//são funções que são executadas depois que o elemento e montador no dom, e depois do removido do dom, ciclo de vida de um elemento, e não de um componente
//em resumo esta action aqui ira adicionar o foco ao elemento depois que ele for montado no dom, e voltar o foco ao elemento anterior assim que o elemento for destruido
//uma function de action e chamada com um node, em nosso caso quando o node e montado no DOM e pode retornar um objeto de action com um método destroy
export function trapFocus(node: HTMLElement) {
  //obtem o elemento atual com foco no documento
	const previous = document.activeElement;

  //cria um array com todos os elementos filhos do node que podem receber foco 
	function focusable() {
		return Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) as HTMLElement[];
	}

  //manipulador de evento de teclado
	function handleKeydown(event: KeyboardEvent) {
		//qualquer tecla diferente de Tab não sera usada
    if (event.key !== 'Tab') return;

    //obtem elemento atual com foco no documento
		const current = document.activeElement;

    //obtem todos elemetos filhos de node que podem receber foco
    const elements = focusable();
    //obtem o primeiro elemento
    const first = elements.at(0);
    //obtem o ultimo elemento
		const last = elements.at(-1)

    //vai para o ultimo elemento
		if (event.shiftKey && current === first) {
      if(last)
        last.focus();
			event.preventDefault();
		}

    //vai para o primeiro
		if (!event.shiftKey && current === last) {
			if(first)
        first.focus();
			event.preventDefault();
		}
	}
  
  //add foco no primeiro elemento
	focusable()[0]?.focus();

  node.addEventListener("keydown", handleKeydown);
  
  //retorna um objeto de action com um método destroy
  return {
    //precisamos fazer alguma limpeza quando o nó for desmontado — removendo o ouvinte de evento e restaurando o foco para onde estava antes da montagem do elemento:
    destroy() {
      node.removeEventListener('keydown', handleKeydown);
      //apos o node ter sido removido do dom, retornamos o foco ao elemento anterior que o possuia
      previous?.focus();
    }
  }
}
