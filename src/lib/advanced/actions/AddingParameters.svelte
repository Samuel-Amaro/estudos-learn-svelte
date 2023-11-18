<script lang="ts">
  import tippy, { type Props } from "tippy.js";
  import "tippy.js/dist/tippy.css";
  import "tippy.js/themes/material.css";

  /**
   * * ADDING PARAMETERS(ADICIONANDO PARAMENTROS)
   *
   * Assim como transições e animações, uma ação pode receber um argumento, com o qual a função de ação será chamada junto com o elemento ao qual pertence.
   *
   * Neste exercício, queremos adicionar uma dica de ferramenta ao <button> uso da Tippy.js biblioteca.
   */

  //declara uma variavel de state interno do componente
  //esta variavel ao receber uma atribuição ira atualiza o dom e acionar uma nova renderização
  let content = "Hello!";

  //aqui declaramos uma action
  //As ações(actions) são essencialmente funções do ciclo de vida em nível de elemento.
  //são funções que são executadas depois que o elemento e montado no dom, e depois do removido do dom, ciclo de vida de um elemento, e não de um componente
  //Ações são funções chamadas quando um elemento é criado. Eles podem retornar um objeto com um destroy método que é chamado após a desmontagem do elemento.
  //uma function de action e chamada com um node, em nosso caso quando o node e montado no DOM e pode retornar um objeto de action com um método destroy
  //uma function de action pode receber um argumento com o qual a function de ação sera chamada junto com o elemento ao qual pertence
  //a action ira aceitar algumas options a serem passadas para tippy
  function tooltip(node: HTMLElement, optionalOptions?: Partial<Props>) {
    //criamos um tooltip usando a biblioteca tippy
    const tooltip = tippy(node, optionalOptions);

    //retorna um objeto de action com um método destroy
    //Uma ação pode ter um parâmetro. Se o valor retornado tiver um update método, ele será chamado sempre que esse parâmetro for alterado, imediatamente após Svelte aplicar atualizações na marcação.
    return {
      update(options: Partial<Props>) { //sempre que o paramentro optionalProps for alterado ira executar este método update, apos o svelte aplicar atualizações na marcação html
        tooltip.setProps(options);
      },
      destroy() {//este metodo e executado na demostagem do elemento
        tooltip.destroy();
      },
    };
  }
</script>

<!--Os dados normalmente fluem de pai para filho. A bind:diretiva permite que os dados fluam no sentido inverso, do filho para o pai. A maioria das ligações são específicas para elementos específicos. aqui faremos uma vinculação para refletir o valor de uma propriedade chamada value, do input elemento, ira vincular ao state content interno do componetne, usando a diretiva bind:property={content}-->
<input type="text" bind:value={content} />

<!--usando a diretiva use, para usar uma action chamada tooltip, essa action nos ajudara no tooltip do elemento, a action são essencialmente functions do ciclo de vida em nivel de elemento, são executados apos o elemento ter sido montado no dom, e depois de ter sido destruido, são usadas junto com a use diretiva, aqui passamos options para a action como uma function de transition, ou de animation -->
<button use:tooltip={{ content, theme: "material" }}> Hover me </button>
