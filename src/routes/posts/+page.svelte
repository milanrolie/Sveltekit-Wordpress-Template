<script>
  import Post from "../post.svelte";

  export let data;
  const posts = data.posts.nodes;
</script>

{#each posts as post}
  <Post {post} />
{/each}
