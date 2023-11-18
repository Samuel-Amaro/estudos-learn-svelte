<script>
  import Folder from "./Folder.svelte";
  import { files } from "./data";

  /**
   * * <svelte:self>
   * 
   * Svelte fornece uma variedade de elementos integrados. O primeiro, <svelte:self> permite que um componente se contenha recursivamente.
   * 
   * É útil para coisas como esta visualização em árvore de pastas, onde as pastas podem conter outras pastas
  */
</script>

<Folder name="Home" {files} expanded />
