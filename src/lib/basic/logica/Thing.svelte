<script lang="ts">
  //tag de script
  //declara um objeto com propriedades e valores
  const emojis: { [index: string]: string } = {
    apple: "🍎",
    banana: "🍌",
    carrot: "🥕",
    doughnut: "🍩",
    egg: "🥚",
  };

  //declarando uma propriedade, essa propriedades pode ser usada para receber valores do mundo externo
  //são valores vindos do mundo externo para dentro do componente
  //o nome é atualizado sempre que o valor da prop muda...
  export let name: string;

  // ...mas a variável "emoji" é fixada na inicialização
  // do componente porque ele usa `const` em vez de `$:`
  //obtem o valor de uma propriedade do objeto emojis
  const emoji = emojis[name];
</script>

<!--usando as {} para ler valores de state e variaveis, ou props-->
<p>{emoji} = {name}</p>
