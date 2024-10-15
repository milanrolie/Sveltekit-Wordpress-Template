<script>
  import { allCases } from "$lib/stores/cases.json";

  const data = {
    allProjects: allCases.map((project) => {
      return {
        projectTitle: project.title,
        projectLabel: project.client,
        projectDate: project.date,
        projectBranche: project.branch,
        slug: project.slug,
      };
    }),
  };
</script>

<section class="project-list">
  <ul class="project-list__list">
    <div class="list__data">
      <h4 class="data__item">case</h4>
      <h4 class="data__item">client</h4>
      <h4 class="data__item hide-mobile">year</h4>
      <h4 class="data__item align-right hide-mobile">branch</h4>
    </div>
    {#each data.allProjects as project, index}
      <a href={`/cases/${project.slug}`} class="project__link" key={index}>
        <li class="list__project">
          <h3 class="project__title project__info">{project.projectTitle}</h3>
          <p class="project__info">{project.projectLabel}</p>
          <p class="project__info hide-mobile">{project.projectDate}</p>
          <p class="align-right project__info hide-mobile">
            {project.projectBranche}
          </p>
        </li>
      </a>
    {/each}
  </ul>
</section>

<style>
  .project-list {
    width: 100%;
    padding-bottom: var(--padding-small);
    z-index: 2;
  }

  .list__data {
    display: grid;
    grid-template-columns: 27.5% 28% 10% 14%;
    padding: var(--padding-small);
  }

  .data__item {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 400;
  }

  .align-right {
    text-align: right;
  }

  .project-list__list {
    position: relative;
    gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    border-bottom: 1px solid var(--dark);
  }

  .project__link {
    width: 100%;
  }

  .list__project {
    display: grid;
    grid-template-columns: 27.5% 28% 10% 14%;
    padding: var(--padding-small);
    padding-bottom: 0.3rem;
    border-top: 1px solid var(--dark);
    overflow: visible;
  }

  .list__project:hover {
    background-color: #f0f0f0;
  }

  .list__project:hover .project__info {
    filter: blur(1px);
  }

  .project__title {
    font-size: 1rem;
    font-weight: 300;
  }

  .project__info {
    transition: 0.6s;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .list__data {
      display: grid;
      grid-template-columns: 40% 60%;
      padding: var(--padding-small);
      padding-bottom: 0.2rem;
    }

    .list__project {
      grid-template-columns: 40% 60%;
      padding: var(--padding-small);
    }

    .project__title {
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 400;
      color: var(--main-bright);
    }

    .project__info {
      transition: 0.6s;
      font-size: 0.8rem;
    }

    .hide-mobile {
      display: none;
    }
  }
</style>
