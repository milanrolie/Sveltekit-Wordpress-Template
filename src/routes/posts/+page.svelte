<script>
  import PostPreview from "$lib/Components/particles/PostPreview.svelte";

  export let data;
  const posts = data.posts.nodes;
  const page = data.page;
</script>

<h1>{page.acfPageTitle.title}</h1>

{#each posts as post}
  <PostPreview {post} />
{/each}
