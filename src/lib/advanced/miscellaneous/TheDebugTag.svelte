<script lang="ts">
  /**
   * * THE @debug tag
   *
   * Ocasionalmente, é útil inspecionar um dado à medida que ele flui pelo seu aplicativo.
   *
   * Uma abordagem é usar console.log(...) dentro de sua marcação. Porém, se quiser pausar a execução, você pode usar a {@debug ...} tag com uma lista separada por vírgulas de valores que deseja inspecionar:
   * 
  */
  let user = {
    firstname: "Ada",
    lastname: "Lovelace",
  };
</script>

<label>
  <input bind:value={user.firstname} />
  first name
</label>

<label>
  <input bind:value={user.lastname} />
  last name
</label>

<!--podemos usar console.log para inspecionar um dado a medida que flui pelo seu aplicativo-->
<!--{(console.log(user), "")}-->
<!-- usando a debug tag para inspecionar um dado a medida que ele flui pelo aplicativo, podemos usar a tag debug com uma lista separada por virgulas de valores que deseja inspecionar. a debug tag pausa a execução  -->
{@debug user}

<h1>Hello {user.firstname}!</h1>
