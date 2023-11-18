<script lang="ts">
  //tag de script
  //declarando varias propriedades, essa propriedades pode ser usada para receber valores do mundo externo
  //são valores vindos do mundo externo para dentro do componente

  export let name: string;
  export let speed: string;
  export let version: number;
  export let website: string;

  //aqui temos uma declaração reativa, o href estado e calculado a partir da propriedade derivado name
  //Se uma instrução reativa consistir inteiramente em uma atribuição a uma variável não declarada, o Svelte injetará uma let declaração em seu nome.
  //a logica aqui e o seguinte, executar novamente este codigo sempre que qualquer um dos valores referenciados mudar, no caso o proprio name propriedade, se mudar atualizara o href state
  //aqui temos um valor reativo
  //declarações e instruções reativas serão executadas após outro código de script e antes da renderização da marcação html do componente.
  $: href = `https://www.npmjs.com/package/${name}`;
  //referncia todos os props que foram passados para um componente, incluindo aqueles que não foram declarados com export
  //isso não e recomendado pois e dificil para o svelte otimizar, mas e util, em casos raros.
  //console.log($$props);
</script>

<!--usamos as {} para ler os states do componente e propriedades dentro da marcação html-->
<p>
  The <code>{name}</code> package is {speed} fast. Download version {version} from
  <a {href}>npm</a> and <a href={website}>learn more here</a>
</p>
