<script lang="ts">
  import { getContext } from "svelte";

  export let x: number;
  export let y: number;
  export let size: number;
  export let rotate: number | undefined = undefined;

  //Recupera o contexto que pertence ao componente pai mais próximo com o arquivo key. Deve ser chamado durante a inicialização do componente.
  //dentro dos componentes filhos, agora podemos obter o contexto com
  //obtemos o context do componente pai
  getContext<{
    addItem: (fn: (ctx: CanvasRenderingContext2D) => void) => void;
  }>("canvas").addItem(draw);

  //esa function desenha
  function draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(rotate ? rotate : 0);

    ctx.strokeStyle = "black";
    ctx.strokeRect(-size / 2, -size / 2, size, size);

    ctx.restore();
  }
</script>
