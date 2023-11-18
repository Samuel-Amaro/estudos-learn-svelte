<script lang="ts">
  //o script bloco são executados somente quando o componente e criado
  /**
   * * THE TRANSITION DIRECTIVE(A DIRETIVA DE TRANSIÇÃO)
   *
   * Podemos criar interfaces de usuário mais atraentes fazendo a transição elegante de elementos para dentro e fora do DOM. Svelte torna isso muito fácil com a transition diretiva.
   *
   */

  import { fade } from "svelte/transition";
  //declara uma variavel que e um state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let visible = true;
</script>

<label>
  <!--usando a diretiva bind:checked={state} podemos vincular o state do checkbox input value ao state interno do componente visible-->
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <!--usando a transition diretiva, junto a function fade function de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom
  - a fade function Anima a opacidade de um elemento de 0 até a opacidade atual para transições de entrada e da opacidade atual para 0 para transições de saída.
  -->
  <p transition:fade>Fades in and out</p>
{/if}
