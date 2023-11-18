<script lang="ts">
  //tag de script
  /**
   * * MODIFICADORES DE EVENTO
   *
   * Os manipuladores de eventos DOM podem ter modificadores que alteram seu comportamento. Por exemplo, um manipulador com um once modificador só será executado uma única vez:
   *
   * A LISTA COMPLETA DE MODIFICADORES
   *
   * preventDefault — chamadas event.preventDefault() antes de executar o manipulador. Útil para manipulação de formulários do lado do cliente, por exemplo.
   * 
   * stopPropagation — chamadas event.stopPropagation(), evitando que o evento chegue ao próximo elemento
   * 
   * passive — melhora o desempenho de rolagem em eventos de toque/roda (Svelte irá adicioná-lo automaticamente onde for seguro fazê-lo)
   * 
   * nonpassive- definido explicitamente passive: false
   * 
   * capture — dispara o manipulador durante a fase de captura em vez da fase de borbulhamento
   * 
   * once — remova o manipulador após a primeira execução
   * 
   * self- apenas aciona o manipulador se event.target for o próprio elemento
   * 
   * trusted- apenas aciona o manipulador if event.isTrusted is true, o que significa que o evento foi acionado por uma ação do usuário e não porque algum JavaScript chamou element.dispatchEvent(...)
   * 
   * Você pode encadear modificadores, por exemplo on:click|once|capture={...}.
  */
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva:. podemos também declarar manipuladores de evento inline, no propria marcação. os manipuladores de eventos inline ou não podem ter modificadores que alteram seu comportamento. aqui o manipulador com um once modificador so e executado uma unica vez-->
<button
  type="button"
  title="Click me"
  aria-label="Click me"
  on:click|once={() => alert("clicked")}
>
  Click me
</button>
