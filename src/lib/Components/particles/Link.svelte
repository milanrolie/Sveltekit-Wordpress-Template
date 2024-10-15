<script>
  export let url = "";
  export let name = "";
</script>

<a class="link" href={url}>{name}</a>

<style lang="scss">
  .link {
    text-decoration: none;
    color: currentColor;
  }
</style>
