<script>
  export let post;
</script>

<div>
  <a href={`/posts/${post.slug}`}>
    <h2>{post.title}</h2>
    <p>{post.date}</p>
    {#if post.featuredImage}
      <img
        src={post.featuredImage.node.sourceUrl}
        alt={post.featuredImage.node.altText}
        width={post.featuredImage.node.mediaDetails.width}
        height={post.featuredImage.node.mediaDetails.height}
      />
    {/if}
  </a>
</div>

<style>
  div {
    width: 20rem;
    height: 20rem;
    overflow: hidden;
  }
</style>
