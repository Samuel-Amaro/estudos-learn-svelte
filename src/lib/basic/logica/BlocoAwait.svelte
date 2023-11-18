<script lang="ts">
  //tag script
  import { getRandomNumber } from "./utils";
  /**
   * * AWAIT(AGUARDAR) BLOCO
   *
   * A maioria dos aplicativos da web precisa lidar com dados assíncronos em algum momento. O Svelte facilita a espera do valor das promessas diretamente na sua marcação html:
   */

  //declaramos uma variavel que recebe uma promise
  //esta variavel e um state interno do componente, que sempre que muda
  //causa uma reatividade e atualizado o dom
  let promise = getRandomNumber();

  //function manipuladora de evento
  function handleClick() {
    //atualiza o state com uma nova promise
    //isso aciona a reatividade do svelte e atualizara o dom e sera refletido na UI
    promise = getRandomNumber();
  }
</script>

<!--para demostração do sistema de reatividade do svelte tivemos que conectar um manipulador de eventos-->
<button type="button" on:click={handleClick}>generate random users</button>

<!--usando o bloco await, o svelte facilita a espera(await) do valor resolvido das promisses diretamente na marcação html, apenas o mais recente promise e considerado, oque significa que você não preciso se preocupar com as condições de corrida-->
{#await promise}<!--# indica uma tag de abertura de bloco-->
  <p>...wainting</p>
{:then users}
  <!--: caractere, indica uma tag de continuação de bloco-->
  <table>
    <thead>
      <th>id</th>
      <th>name</th>
      <th>username</th>
      <th>email</th>
    </thead>
    <tbody>
      {#each users as user (user.id)}
        <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:catch error}
  <!--: caractere, indica uma tag de continuação de bloco-->
  <p style="color: red">{error.message}</p>
{/await}
<!--/ caractere sempre indica uma tag de fechamento de bloco-->
