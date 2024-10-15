<script>
  export let data;
  const { project } = data;
</script>

<article>
  <h1>{project.title}</h1>
  <p><em>{project.date}</em></p>
  <div>{@html project.content}</div>

  {#if project.featuredImage}
    <img
      src={project.featuredImage.node.sourceUrl}
      alt={project.featuredImage.node.altText}
      width={project.featuredImage.node.mediaDetails.width}
      height={project.featuredImage.node.mediaDetails.height}
    />
  {/if}
</article>

<style>
</style>
