<script>
  export let data;
  const projects = data.projects.nodes;
  const page = data.page;
</script>

<h1>{page.acfPageTitle.title}</h1>

{#each projects as project}
  <a href={`/projects/${project.slug}`}>
    <h1>{project.title}</h1>
    <p><em>{project.date}</em></p>
    {#if project.featuredImage}
      <img
        src={project.featuredImage.node.sourceUrl}
        alt={project.featuredImage.node.altText}
        width={project.featuredImage.node.mediaDetails.width}
        height={project.featuredImage.node.mediaDetails.height}
      />
    {/if}
  </a>
{/each}
