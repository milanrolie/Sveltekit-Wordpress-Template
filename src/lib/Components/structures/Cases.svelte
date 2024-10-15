<script>
  import { allCases } from "$lib/stores/cases.json";
  import Case from "../particles/Case.svelte";

  const data = {
    allProjects: allCases.map((project) => {
      return {
        projectTitle: project.title,
        projectLabel: project.client,
        projectDate: project.date,
        projectBranche: project.branch,
        featuredImage: project.featuredImage,
        hoverImage: project.hoverImage,
        slug: project.slug,
        video: project.video,
      };
    }),
  };
</script>

<section class="cases">
  <ul class="cases__list">
    {#each data.allProjects as project, index}
      <Case {project} />
    {/each}
  </ul>
</section>

<style>
  .cases {
    width: 100%;
    padding: var(--padding-small);
  }

  .cases__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-small);
  }

  @media (max-width: 768px) {
    .cases__list {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto, 1fr);
    }
  }
</style>
