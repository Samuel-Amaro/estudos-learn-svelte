<script>
  import kitten from "./kitten.png";

  /**
   * * <svelte:body />
   *
   * Semelhante a <svelte:window>, o <svelte:body> elemento permite que você ouça eventos que são acionados document.body. Isso é útil com os eventos mouseenter e mouseleave, que não são acionados no window.
   *
   * Adicione estes mouseenter e mouseleave manipuladores à <svelte:body> tag...
   */

  let hereKitty = false;
</script>

<!--
  - Da mesma forma <svelte:window>, esse elemento permite adicionar ouvintes a eventos em document.body, como mouseenter e mouseleave, que não são acionados em window. Também permite usar ações no <body> elemento.
  - Assim como acontece com <svelte:window> e <svelte:document>, este elemento só pode aparecer no nível superior do seu componente e nunca deve estar dentro de um bloco ou elemento.
  - adicionando eventos ao body tag elemento
-->
<svelte:body
  on:mouseenter={() => (hereKitty = true)}
  on:mouseleave={() => (hereKitty = false)}
/>

<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<img
  class:curious={hereKitty}
  alt="Kitten wants to know what's going on"
  src={kitten}
/>

<style>
  img {
    position: absolute;
    left: 0;
    bottom: -60px;
    transform: translate(-80%, 0) rotate(-15deg);
    transform-origin: 100% 100%;
    transition: transform 0.4s;
  }

  .curious {
    transform: translate(-15%, 0) rotate(0deg);
  }

  :global(body) {
    overflow: hidden;
  }
</style>
