<script>
  export let project;
  export let index;
</script>

<a href={`/cases/${project.slug}`} class="project__link" key={index}>
  <li class="list__project">
    <figure class="image__figure" id="fadeUp">
      <img
        data-fadeIn="true"
        class="case__image"
        src={project.featuredImage}
        alt=""
      />
      {#if project.video}
        <video
          autoplay
          muted
          playsinline
          loop
          class="case__video-hover"
          src={project.video}
        ></video>
      {:else}
        <img class="case__image-hover" src={project.hoverImage} alt="" />
      {/if}
    </figure>
    <div class="case__info-container">
      <h2 class="info__title case__info">{project.projectTitle}</h2>
      <p class="info__label case__info">{project.projectLabel}</p>
      <p class="info__date case__info hide-mobile">{project.projectDate}</p>
    </div>
  </li>
</a>

<style>
  .image__figure {
    position: relative;
    margin: 0;
    aspect-ratio: 4 / 3;
    border: 0px;
  }

  .case__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
  }

  .case__image-hover,
  .case__video-hover {
    position: absolute;
    inset: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 20;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .case__image-hover:hover,
  .case__video-hover:hover {
    opacity: 1;
  }

  .case__info-container {
    display: flex;
    gap: var(--gap-large);
    padding-top: var(--padding-small);
    margin-bottom: var(--margin-medium);
  }

  .case__info {
    font-size: var(--font-size-small);
    font-weight: 300;
    margin: 0;
  }

  .info__title {
    font-weight: 400;
  }

  .info__date {
    font-size: 0.9rem;
    transform: translateY(1.5px);
  }

  @media (max-width: 768px) {
    .image__figure {
      aspect-ratio: 3/4;
    }
  }
</style>
