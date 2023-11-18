<script lang="ts">
  import { fly } from "svelte/transition";

  /**
   * * TRANSITION EVENTS(EVENTOS DE TRANSIÇÃO)
   *
   * Pode ser útil saber quando as transições estão começando e terminando. Svelte despacha eventos que você pode ouvir como qualquer outro evento DOM:
   */

  //declara uma variavel que e um state interno do componente
  //ao atribuir um novo valor a este state aciona uma nova renderização
  let visible = true;
  let status = "waiting...";
</script>

<p>status: {status}</p>

<label>
  <!--usando a diretiva bind:checked={state} podemos vincular o state do checkbox input value ao state interno do componente visible-->
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <!--usando a transition diretiva, junto a function fly function de transição podemos criar interfaces de usuario mais atraentes fazendo a transição elegante de elementos para dentro e fora do dom
  - usando a fly function de transição com paramentros, Anima as posições x e y e a opacidade de um elemento.
  - option y o deslocamentto y para animar de e para, o padrão e 0
  - duration milissegundos que dura transição
  - Observe que a transição é reversível — se você alternar a caixa de seleção enquanto a transição estiver em andamento, ela fará a transição do ponto atual, em vez do início ou do fim.
  -->
  <p
    transition:fly={{ y: 200, duration: 2000 }}
    on:introstart={(/*evento que e disparado quando a transição esta iniciando*/) =>
      (status = "intro started")}
    on:outrostart={(/*evento que e disparado quando a transição esta iniciando sua finalização*/) =>
      (status = "outro started")}
    on:introend={(/*evento que e disparado quando a transição esta finalizando sua inicialização*/) =>
      (status = "intro ended")}
    on:outroend={(/*evento que e disparado quando a transição esta finalizando sua finalização*/) =>
      (status = "outro ended")}
  >
    Flies in and out
  </p>
{/if}
