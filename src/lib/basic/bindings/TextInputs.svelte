<script lang="ts">
  /**
   * * TEXT INPUTS(INPUTS DE TEXTO)
   *
   * Como regra geral, o fluxo de dados no Svelte é de cima para baixo - um componente pai pode definir adereços em um componente filho e um componente pode definir atributos em um elemento, mas não o contrário.
   *
   * Às vezes é útil quebrar essa regra.
   *
   * Veja o caso do <input> elemento neste componente — poderíamos adicionar um on:input manipulador de eventos que defina o valor de name to event.target.value, mas é um pouco... clichê. Fica ainda pior com outros elementos do formulário, como veremos.
   *
   * Em vez disso, podemos usar a bind:value diretiva:
   */

  //declara uma variavel que armazena um valor
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let name = "world";
</script>

<input
  type="text"
  name="name"
  aria-label="Name"
  title="Name"
  placeholder="Enter a name"
  bind:value={name}
/><!--on:input={(e) => (name = e.currentTarget.value)} value={name} esta e a forma de atualizar name state com o value do input e atualizar input com valor de name state, mas essa forma é um pouco clichê, muito repetitiva e comun, e fica pior com outros elementos de formulario, por isso o svelte criou uma propria diretiva bind:value, isso significa que as alterações de name atualizarão o value de input mas também as alterações no value de input serão atualizados, uma forma de vincular o value de um input a um state no código-->

<h1>Hello {name}!</h1>
