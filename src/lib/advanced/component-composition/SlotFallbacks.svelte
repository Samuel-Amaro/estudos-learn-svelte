<script lang="ts">
  import Card3 from "./Card3.svelte";

  /**
   * * SLOT FALLBACKS(ALTERNATIVAS DE SLOTS)
   *
   * Um componente pode especificar substitutos(fallbacks) para quaisquer slots deixados vazios, colocando conteúdo dentro do <slot> elemento:
   */
</script>

<main>
  <Card3>
    <!--os elementos dentro do componente card são filhos do componente-->
    <span>Patrick BATEMAN</span>
    <span>Vice President</span>
    <!--
      - o conteudo abaixo representa filhos do componente Card
      - e um slot nomeado, que representa um filho do componente Card com mais controle
      - além de criar o conteudo aqui que vai ser filho do card, precisa ir dentro do componente card e criar os slots nomeados correspondetes dentro de card
    -->
    <span slot="telephone">212 555 6342</span>

    <span slot="company">
      Pierce &amp; Pierce
      <small>Mergers and Aquisitions</small>
    </span>

    <span slot="address"
      >358 Exchange Place, New York, N.Y. 100099 fax 212 555 6390 telex 10 4534</span
    >
  </Card3>

  <!--ira renderizar o componente Card sem nenhum filho-->
  <Card3 />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2em;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    height: 100%;
    background: url(./wood.svg);
  }

  small {
    display: block;
    font-size: 0.6em;
    text-align: right;
  }

  @media (min-aspect-ratio: 3.5 / 2) {
    main {
      flex-direction: row;
    }
  }
</style>
