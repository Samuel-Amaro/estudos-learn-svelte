<script lang="ts">
  import horn from "../../assets/buzina_de_carreta.mp3";
  import BigRedButton from "./BigRedButton.svelte";
  /**
   * * DOM EVENT FORWARDING(ENCAMINHAMENTO DE EVENTOS DOM)
   *
   * O encaminhamento de eventos também funciona para eventos DOM.
   *
   * Queremos ser notificados sobre cliques em nosso <BigRedButton>— para isso, só precisamos encaminhar click eventos no <button> elemento em BigRed Button.svelte
   */

  const audio = new Audio();
  audio.src = horn;

  //function manipuladora de evento
  function handleClick() {
    //toca o audio
    audio.play();
  }
</script>

<!--podemos ouvir qualquer evento DOM em um elemento HTML com a on: diretiva. aqui iremos ouvir um evento de componente, on:click que tera um manipulador, aqui estamos encaminhando um evento dom, que ira encaminhar este evento para o button elemento, sera despachado no button elementto, o evento de componente o encaminha para o elemento button aninhado.-->
<BigRedButton on:click={handleClick} />
