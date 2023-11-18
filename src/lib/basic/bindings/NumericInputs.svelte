<script lang="ts">
  /**
   * * NUMERIC INPUTS(ENTRADAS NUMERICAS)
   *
   * No DOM, tudo é uma string. Isso é inútil quando você está lidando com entradas numéricas - type="number" e type="range"- porque significa que você precisa se lembrar de coagir input.value antes de usá-las.
   *
   * Com bind:value, Svelte cuida disso para você:
   */

  //declara duas variaveis que armazenam um valor
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  let a = 1,
    b = 2;
</script>

<label>
  <input
    type="number"
    min="0"
    max="10"
    name="number1"
    title="number1"
    placeholder="Enter a number"
    aria-label="Enter a number"
    bind:value={a}
  /><!--on:input={(e) => (a = e.currentTarget.value)} value={a} esta e a forma de atualizar a state com o value do input e atualizar input com valor de a state, mas essa forma é um pouco clichê, muito repetitiva e comun, e fica pior com outros elementos de formulario, por isso o svelte criou uma propria diretiva bind:value, isso significa que as alterações de a atualizarão o value de input mas também as alterações no value de input serão atualizados, uma forma de vincular o value de um input a um state no código, como tudo no dom e string, a diretiva bind:value={state} cuida para min que quando estou lidando com inputs numerica ela ja converta a string para number por meio da diretiva e atualize o state com o number value-->
  <input
    type="range"
    min="0"
    max="10"
    name="range1"
    title="Enter a ranger"
    placeholder="Enter a ranger"
    aria-label="Enter a ranger"
    bind:value={a}
  />
</label>

<label>
  <input
    type="number"
    min="0"
    max="10"
    name="number2"
    title="number2"
    placeholder="Enter a number"
    aria-label="Enter a number"
    bind:value={b}
  />
  <input
    type="range"
    min="0"
    max="10"
    name="range2"
    title="Enter a ranger"
    placeholder="Enter a ranger"
    aria-label="Enter a ranger"
    bind:value={b}
  />
</label>

<p>{a} + {b} = {a + b}</p>
