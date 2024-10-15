<script>
  export let data;
  const { post } = data;
</script>

<article>
  <h1>{post.title}</h1>
  <p><em>{post.date}</em></p>
  <div>{@html post.content}</div>
  <p>Author: {post.author.node.name}</p>
  <div>
    Categories:
    <ul>
      {#each post.categories.nodes as category}
        <li>{category.name}</li>
      {/each}
    </ul>
  </div>
  {#if post.featuredImage}
    <img
      src={post.featuredImage.node.sourceUrl}
      alt={post.featuredImage.node.altText}
      width={post.featuredImage.node.mediaDetails.width}
      height={post.featuredImage.node.mediaDetails.height}
    />
  {/if}
</article>

<style>
  article {
    position: relative;
    width: 20rem;
    overflow: hidden;
  }

  img {
    width: 20rem;
  }
</style>
