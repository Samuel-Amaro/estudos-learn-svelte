<script lang="ts">
  //tag de script

  import PackageInfo from "./PackageInfo.svelte";

  /**
   * * SPREAD PROPS
   *
   * Neste exercício, esquecemos de especificar a version propriedade esperada por PackageInfo.svelte, o que significa que mostra 'versão indefinida'.
   * 
   * Poderíamos consertar isso adicionando o versionprop ...
   * 
   * ...mas como as propriedades de pkgcorrespondem aos adereços esperados do componente, podemos 'espalhá-las' no componente:
   */

  const pkg = {
    name: "svelte",
    speed: "blazing",
    version: 4,
    website: "https://svelte.dev",
  };
</script>

<!--como as propriedades do obj pkg correspondem as propriedades do componente, podemos usar o operador spread para espalhar as propriedades individualemte de forma automatica para agente, ou poderiamos fazer de forma manual name={pkg.name}
  speed={pkg.speed}
  version={pkg.version}
website={pkg.website}-->
<PackageInfo {...pkg}  />
