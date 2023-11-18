<script lang="ts">
  //tag de script
  /**
   * * ATUALIZANDO ARRARYS É OBJETOS
   *
   * Como a reatividade do Svelte é acionada por atribuições, o uso de métodos de array como push e splice não causará atualizações automaticamente. Por exemplo, clicar no botão 'Adicionar um número' atualmente não faz nada, mesmo que estejamos ligando para numbers.push(...) dentro de addNumber.
   *
   * Uma maneira de corrigir isso é adicionar uma atribuição que de outra forma seria redundante:
   */

  //declara uma array inicializado com 4 itens
  let numbers = [1, 2, 3, 4];

  //função manipuladora de evento
  function addNumber() {
    //o uso de métodos de array como splice ou push não aciona a reatividade do svelte, não causara atualizações automaticamente
    //a reatividade do svelte é acionada por meio de atribuições
    //numbers.push(numbers.length + 1);
    //há solução para isso e usar uma sulução idiomatica
    //atribuir um novo array a numbers state
    //iso ira acionar a reatividade do svelte e causara uma atualização no dom refletindo na UI
    //usando o padrão de atribuições a propriedade de array e objetos
    numbers = [...numbers, numbers.length + 1];
  }

  //aqui temos uma declaração reativa
  //Se uma instrução reativa consistir inteiramente em uma atribuição a uma variável não declarada, o Svelte injetará uma let declaração em seu nome.
  //aqui 
  //a logica aqui e o seguinte, executar novamente este codigo sempre que qualquer um dos valores referenciados mudar, no caso o proprio numbers array, se mudar atualizara o sum state
  //aqui temos um valor reativo
  //declarações e instruções reativas serão executadas após outro código de script e antes da renderização da marcação html do componente.
  //sempre que numbers array mudar sera calculado um novo sum state
  $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<!--aqui usamos as {} para ler os valores e adicionar javascript-->
<p>{numbers.join(" + ")} = {sum}</p>

<!--para demostração do sistema de reatividade do svelte tivemos que conectar um manipulador de eventos-->
<button type="button" on:click={addNumber}>Add a number</button>
