<script lang="ts">
  import File from "./File.svelte";

  export let expanded = false;
  export let name: string;
  export let files: (
    | {
        name: string;
        files: (
          | {
              name: string;
              files: {
                name: string;
              }[];
            }
          | {
              name: string;
              files?: undefined;
            }
        )[];
      }
    | {
        name: string;
        files?: undefined;
      }
  )[];

  function toggle() {
    expanded = !expanded;
  }
</script>

<button class:expanded on:click={toggle}>{name}</button>

{#if expanded}
  <ul>
    {#each files as file}
      <li>
        {#if file.files}
          <!--o uso do componente abaixo não e permitido porque um componente, que e um module não pode importa-se para ser usado, em vez disso usamos o elemento especial <svelte:self >-->
          <!--<Folder {...file} />-->
          <!--
            - o elemento integrado(pre definido pelo svelte) permite que um componente se contenha recusivamente. 
            - O <svelte:self> elemento permite que um componente se inclua recursivamente. ele chama ele mesmo para se renderizar
            - Ele não pode aparecer no nível superior da sua marcação; ele deve estar dentro de um bloco if ou each ou passado para o slot de um componente para evitar um loop infinito.
            - <svelte:self {...file} />
            - usamos este elemento especial para renderizar uma visualização em árvore de pastas
          -->
          <svelte:self expanded={false} name={file.name} files={file.files} />
        {:else}
          <File {...file} />
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  button {
    padding: 0 0 0 1.5em;
    background: url(./folder.svg) 0 0.1em no-repeat;
    background-size: 1em 1em;
    color: var(--fg-1);
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin: 0;
  }

  .expanded {
    background-image: url(./folder-open.svg);
  }

  ul {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid rgba(128, 128, 128, 0.4);
  }

  li {
    padding: 0.2em 0;
  }
</style>
