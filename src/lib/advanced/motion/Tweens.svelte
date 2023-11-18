<script lang="ts">
  import { cubicOut } from "svelte/easing"; //O svelte/easing módulo contém as equações de atenuação de Penner , ou você pode fornecer sua própria p => t função onde p e t são ambos valores entre 0 e 1.
  import { tweened } from "svelte/motion";
  import { writable } from "svelte/store";

  /**
   * * MOVIE TWEENS(MOVIMENTO TWEENS)
   *
   * Agora que cobrimos o básico, é hora de aprender algumas técnicas avançadas do Svelte, começando pelo movimento.
   *
   * Definir valores e observar a atualização automática do DOM é legal. Sabe o que é ainda mais legal? Interpolando esses valores. Svelte inclui ferramentas para ajudá-lo a construir interfaces de usuário elegantes que usam animação para comunicar alterações.
   */

  //aqui estamos declarando uma store
  //a store permite que varios componentes não relacionados acessem o store para buscar valores, fora do componente, uma store não pertence a hierarquia de componentes do aplicativo
  //aqui está a definição de progress store
  //e um armazenamento gravável(writable), o que significa que possui métodos set, update além de subscribe
  //que e inicializada com o valor 0
  //const progress = writable(0);

  //alterando o progress store para um tweened value
  //aqui vamos usar animações para comunicar alterações na UI
  //vamos interpolar os valores a cada atualização no tweened, assim a cada novo valor que tweened receber ira executar um movimento de interpolação com um valor de duração fixo, a cada nova atualização demorara um duração fixa para atualizar configurado no easing function
  //O módulo svelte/motion exporta duas funções, tweened e spring, para criar armazenamentos graváveis cujos valores mudam ao longo do tempo após serem set(definidos) e update(atualizados), em vez de imediatamente.
  //As lojas interpoladas(easing) atualizam seus valores durante um período fixo.
  const progress = tweened(0, {
    //aqui e as configurações de uma function de atenuação(easing)
    //conjunto completo de options disponiveis para o tweened configurar uma easing function
    duration: 400, //a duração da interporlação em milissegundos ou uma, e a duração da atualização de um valor para outro
    easing: cubicOut, //uma p => t function
    //delay: 0 milissegundos antes do inicio da interpolação
    //interpolate: uma (from, to) => t => value function personalizada para interpretar valores aleatorios, Por padrão, o Svelte irá interpolar entre números, datas e matrizes e objetos de formato idêntico (desde que contenham apenas números e datas ou outras matrizes e objetos válidos). Se você deseja interpolar (por exemplo) sequências de cores ou matrizes de transformação, forneça um interpolador personalizado
    //Você também pode passar essas opções para progress.set e progress.update como segundo argumento, caso em que elas substituirão os padrões. Os métodos set e update retornam uma promessa que é resolvida quando a interpolação é concluída.
  });
</script>

<!--aqui referenciamos a store usando a sintaxe $store-->
<progress value={$progress} />

<!--aqui usando a diretia on:event={manipulador} o manipulador do evento ira definir um novo valor no store usando o método set. set é um método que recebe um argumento que é o valor a ser definido. O valor armazenado é definido como o valor do argumento se o valor armazenado ainda não for igual a ele.-->
<button on:click={() => progress.set(0)}> 0% </button>

<button on:click={() => progress.set(0.25)}> 25% </button>

<button on:click={() => progress.set(0.5)}> 50% </button>

<button on:click={() => progress.set(0.75)}> 75% </button>

<button on:click={() => progress.set(1)}> 100% </button>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
