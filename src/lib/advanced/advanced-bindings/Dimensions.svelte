<script lang="ts">
  /**
   * * DIMENSIONS(DIMENSÕES)
   * 
   * Cada elemento de nível de bloco possui ligações(vinculações) clientWidth, clientHeight, offsetWidth e offsetHeight:
   * 
   * Essas ligações são somente leitura – alterando os valores de w e h não terão nenhum efeito no elemento.
   * 
   * Os elementos são medidos usando uma técnica semelhante a esta . Há alguma sobrecarga envolvida, portanto não é recomendado usar isso para um grande número de elementos.
   * 
   * display: elementos inline não podem ser medidos com esta abordagem; nem elementos que não podem conter outros elementos (como <canvas>). Nestes casos, você precisará medir um elemento wrapper.
   */

  //declaramos variaveIS de state interno do componente
  //ao receber uma nova atribuição de valor, ira atualiza o dom e acionar uma nova renderização
  let w: number;
  let h: number;
  let size = 42;
  let text = "edit this text";
</script>

<label>
  <!--usando a diretiva bind:propeerty={state} vinculamos a propriedade value a um state do componente chamado size-->
  <input type="range" bind:value={size} min="10" max="100" />
  font size ({size}px)
</label>

<!--cada elemento de nivel de bloco possui vinculações especificas, como clientWidth, clientHeight, offsetWidth e offsetHeight, obs: essas vinculações são somente leitura, alterar os valores de w, é h não terão nenhum efeito no elemento-->
<div bind:clientWidth={w} bind:clientHeight={h}>
  <span style="font-size: {size}px" contenteditable>{text}</span>
  <span class="size">{w} x {h}px</span>
</div>

<style>
  div {
    position: relative;
    display: inline-block;
    padding: 0.5rem;
    background: hsla(15, 100%, 50%, 0.1);
    border: 1px solid hsl(15, 100%, 50%);
  }

  .size {
    position: absolute;
    right: -1px;
    bottom: -1.4em;
    line-height: 1;
    background: hsl(15, 100%, 50%);
    color: white;
    padding: 0.2em 0.5em;
    white-space: pre;
  }
</style>
