<script lang="ts">
  /**
   * * <svelte:window />
   *
   * Assim como você pode adicionar ouvintes de eventos a qualquer elemento DOM, você pode adicionar ouvintes de eventos ao window objeto com <svelte:window>.
   *
   * Tal como acontece com os elementos DOM, você pode adicionar modificadores de eventos como preventDefault.
   */
  let key: string;
  let keyCode: number;

  function handleKeydown(
    event: KeyboardEvent & {
      currentTarget: EventTarget & Window;
    }
  ) {
    key = event.key;
    keyCode = event.keyCode;
  }
</script>

<!--
  - O <svelte:window> elemento permite adicionar ouvintes de eventos ao window objeto sem se preocupar em removê-los quando o componente for destruído ou em verificar a existência de window quando a renderização do lado do servidor.
  - Ao contrário <svelte:self>, este elemento só pode aparecer no nível superior do seu componente e nunca deve estar dentro de um bloco ou elemento.
  - adicionando evento ao window objetto usando o elemento especial integrado do reactt <svelte:window /> 
-->
<svelte:window on:keydown={handleKeydown} />

<div style="text-align: center">
  {#if key}
    <kbd>{key === " " ? "Space" : key}</kbd>
    <p>{keyCode}</p>
  {:else}
    <p>Focus this window and press any key</p>
  {/if}
</div>

<style>
  div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  kbd {
    border-radius: 4px;
    font-size: 6em;
    padding: 0.2em 0.5em;
    background-color: #eeeeee;
    border-top: 5px solid #f9f9f9;
    border-left: 5px solid #f9f9f9;
    border-right: 5px solid #aaaaaa;
    border-bottom: 5px solid #aaaaaa;
    color: #555;
  }
</style>
