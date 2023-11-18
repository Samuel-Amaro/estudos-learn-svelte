<script lang="ts">
  /**
   * * TEXT AREA INPUTS
   *
   * O <textarea> elemento se comporta de forma semelhante a uma entrada de texto no Svelte — use bind:value:
   */

  //library converção de markdown para HTML
  import { marked } from "marked";
  //criamos uma variavel e a inicilizamos
  //esta variavel e um state que armazena um valor para o componente internamente
  //ao atribuir um novo valor a esta variavel aciona a reatividade causando uma atualização no DOM.
  //e um state para o text area input
  let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`;
</script>

<div class="grid">
  input
  <!--usando a diretiva bind:value={state} para vincular o state value ao input text area, essa vinculação atualiza o state value com o value do text area, essa e uma forma do svelte evitar o cliche on:input={e => value = e.target.value} / value={number}, em casos onde os nomes condidem, podemos usar uma forma abreviada bind:value, isso se aplica a todas as vinculações não somente a areas de texto-->
  <textarea bind:value />

  output
  <!--às vezes você precisa renderizar HTML diretamente em um componente. usamos a @html tag especial para isso-->
  <div>{@html marked(value)}</div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    height: 100%;
  }

  textarea {
    flex: 1;
    resize: none;
  }
</style>
