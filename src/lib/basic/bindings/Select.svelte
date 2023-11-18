<script lang="ts">
  /**
   * * SELECT VINCULAÇÕES
   *
   * Também podemos usar bind:value com <select> elementos:
   */

  //criamos um array que e inicializado com objetos
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let questions = [
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];
  let selected: { id: number; text: string } | null = null;
  let answer = "";

  //function manipuladora de evento
  function handleSubmit() {
    if (selected)
      alert(
        `answered question ${selected.id} (${selected.text}) with "${answer}"`
      );
  }
</script>

<h2>Insecurity questions</h2>

<!--ouvindo o evento submit no form elemento usando a diretiva on:submit com o modificador de evento preventDefault, que altera o comportamento do evento, o prevendDefault e util na manipulação de formularios no lado do cliente-->
<form on:submit|preventDefault={handleSubmit}>
  <!--on:change={() => (answer = "")} / value={selected} e a forma clichê(repetitiva e comun) de obter o valor do select e atualiza um state é vice versa, mas o svelte percebeu isso e criou uma diretiva a bind:value que vincula o value do select a um state do codigo internamente, também estamos escutando o evento change para cada alteração de um novo question selected iremos atribuir uma "" ao answer state para resetar a resposta e ficar limpo para receber uma nova resposta, como não definimos o valor inicial de selected a vinculação ira configuralo para o valor padrão o primeiro da lista automaticamente-->
  <select bind:value={selected} on:change={() => (answer = "")}>
    <!--svelte não se importa se o value do option e objeto ou string-->
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <!--usando a diretiva bind:value vinculados o value do input a um state chamado answer do codigo-->
  <input bind:value={answer} />

  <button disabled={!answer} type="submit"> Submit </button>
</form>

<p>
  selected question {selected ? selected.id : "[waiting...]"}
</p>
