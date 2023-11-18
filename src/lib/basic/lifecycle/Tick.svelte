<script lang="ts">
  /**
   * * TICK(MARCAÇÃO)
   *
   * A tick função é diferente de outras funções de ciclo de vida porque você pode chamá-la a qualquer momento, não apenas quando o componente é inicializado pela primeira vez. Ele retorna uma promessa que é resolvida assim que quaisquer alterações de estado pendentes forem aplicadas ao DOM (ou imediatamente, se não houver alterações de estado pendentes).
   *
   * Quando você atualiza o estado do componente no Svelte, ele não atualiza o DOM imediatamente. Em vez disso, ele espera até a próxima microtarefa para ver se há alguma outra alteração que precise ser aplicada, inclusive em outros componentes. Isso evita trabalho desnecessário e permite que o navegador agrupe as coisas de maneira mais eficaz.
   *
   */

  import { tick } from "svelte";

  //variavel que armazena um valor
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let text = `Select some text and hit the tab key to toggle uppercase`;

  //function manipuladora de evento
  async function handleKeydown(
    this: HTMLTextAreaElement,
    event: KeyboardEvent & {
      currentTarget: EventTarget & HTMLTextAreaElement;
    }
  ) {
    if (event.key !== "Tab") return;
    event.preventDefault();
    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    //atualiza o state com uma nova atribuição de valor
    //aciona a reatividade que ira atualizar o DOM,
    //mas não atualiza o dom imediatamente, em vez disso ele espera até a proxima microtarefa para ver se há alguma outra alteração que precise ser aplicada, inclusive em outros componentes
    text =
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

    //tick e uma function de ciclo de vida(começa quando criado e termina quando destruido),
    //posso chamala a qualquer momento não apenas quando o componente e inicializado pela primeira vez
    //ela retorna uma promisse que e resolvida assim que quaisquer alterações de estado pendentes forem aplicadas ao DOM(ou imediatamente, se não houver alterações de estado pendentes)
    await tick();
    // isso não tem efeito, porque o DOM ainda não foi atualizado
    //para atualiza a o intervalo de seleção e não deixar o cursor no final
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<textarea value={text} on:keydown={handleKeydown} />

<style>
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
  }
</style>
