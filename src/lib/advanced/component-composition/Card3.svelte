<div class="card">
  <header>
    <!-- 
    - aqui vai um slot elemento
    - um filho de um componente e representado pelo slot elemento 
    - o slot ajuda a representar um filho do componente e onde podemos colocalo dentro do componente.
    - quando precisamos de mais controle sobre o posionamento de um slot, podemos usar slots nomeados
    - podemos posionalos onde queremos dentro do componente, esses slots representam filhos diretos do compoonente Card, quando renderizado
    - podemos especificar substitutos(fallbacks) para quaisquer slots deixados vazios, colocando conteúdo dentro do <slot> elementto
  -->
    <slot name="telephone">
      <!--caso o slot seja vazio, não tenho um conteudo filho do componente o representando na renderização, ira renderizar o elemento abaixo, cada slot pode representar um conteudo substituto(fallback) caso não haja conteudo filho do componente para renderizar-->
      <i>(telephone)</i>
    </slot>
    <slot name="company">
      <i>(company)</i>
    </slot>
  </header>

  <slot />

  <footer>
    <slot name="address">
      <i>(address)</i>
    </slot>
  </footer>
</div>

<style>
  @font-face {
    src: url("/Garamond Classico SC Regular.woff2") format("woff2");
    font-family: "Silian Rail";
    font-style: normal;
    font-weight: 400;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: min(2vw, 3.5vh, 1.5rem);
    font-family: "Silian Rail";
    width: 24em;
    aspect-ratio: 3.5 / 2;
    background: url(./paper.svg) no-repeat 50% 50%;
    background-size: cover;
    border-radius: 2px;
    filter: drop-shadow(0.1em 0.1em 0.1em rgba(0, 0, 0, 0.2));
    padding: 1.5em 1em 1em 1em;
    font-variant: small-caps;
    text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.2), 1px 1px 2px white;
    color: hsl(50, 20%, 35%);
    line-height: 1.2;
  }

  header,
  footer {
    width: 100%;
    display: flex;
    flex: 1;
  }

  header {
    justify-content: space-between;
  }

  footer {
    font-size: 0.7em;
    justify-content: center;
    align-items: end;
  }
</style>
