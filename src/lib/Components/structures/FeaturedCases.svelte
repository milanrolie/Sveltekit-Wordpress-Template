<script>
  import { featuredCases } from "$lib/stores/featuredcases.json";

  const data = {
    allProjects: featuredCases.map((project) => {
      return {
        projectTitle: project.title,
        projectLabel: project.client,
        projectDate: project.date,
        projectBranche: project.branch,
        featuredImage: project.featuredImage,
        hoverImage: project.hoverImage,
        slug: project.slug,
      };
    }),
  };
</script>

<section class="featured-cases">
  <h2 class="featured-cases__title">featured cases</h2>
  <div class="featured-cases__line"></div>
  <div class="featured-cases__container">
    <div class="featured-cases__container-left">
      <div class="cases__case">
        <a href="/cases/offshore">
          <figure class="case__figure">
            <img
              data-fadeIn="true"
              class="case__image"
              src="CaseImages/Offshore/container.jpeg"
              alt=""
            />
            <img
              class="case__image-hover"
              src="/CaseImages/Offshore/Offshore.jpg"
              alt=""
            />
          </figure>
          <h3 class="case__title">Offshore</h3>
        </a>
      </div>

      <div class="cases__case">
        <a href="/cases/markk">
          <figure class="case__figure">
            <img
              data-fadeIn="true"
              class="case__image"
              src="/CaseImages/Markk/Home mockup.jpeg"
              alt=""
            />
            <video
              class="case__image-hover"
              src="/CaseImages/Markk/markk beeldmerk.webm"
              alt=""
              autoplay
              loop
              muted
              playsinline
            ></video>
          </figure>
          <h3 class="case__title right-link" href="/case">Markk</h3>
        </a>
      </div>
    </div>

    <div class="featured-cases__container-right">
      <a class="case__link" href="/cases/sternfilms">
        <figure class="case-figure case__right">
          <img
            data-fadeIn="true"
            class="case__image"
            src="/CaseImages/Sternfilms/phoneOnChair.jpeg"
            alt=""
          />
          <video
            class="case__image-hover"
            src="/CaseImages/Sternfilms/Sternfilms mockup video.webm"
            alt=""
            autoplay
            loop
            muted
            playsinline
          ></video>
        </figure>
        <h3 class="case__title" href="/case">Sternfilms</h3>
      </a>
    </div>
  </div>
</section>

<!-- {/each} -->

<style lang="scss">
  .featured-cases {
    padding: var(--padding-small);
    padding-bottom: 5rem;
  }

  .featured-cases__container {
    display: grid;
    grid-template-columns: 5fr 4fr;
    grid-gap: var(--gap-small);
    align-items: start;
    width: 100%;
  }

  .featured-cases__title {
    font-size: var(--font-size-large);

    font-weight: 300;
    line-height: 1;
    margin: 0;
  }

  .featured-cases__line {
    width: 100%;
    height: 1px;
    background-color: var(--dark);
    margin: var(--margin-small) 0;
  }

  .featured-cases__container-left {
    display: grid;
    grid-template-rows: repeat(2 1fr);
    grid-gap: var(--gap-small);
  }

  .featured-cases__container-right {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .cases__case {
    position: relative;
  }

  .case__figure {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .case__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    transition: opacity 0.3s;
  }

  .case__image:hover {
    opacity: 0;
  }

  .case__image-hover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    z-index: 0;
  }

  .cases__case:nth-of-type(1) {
    aspect-ratio: 4/3;
    height: 100%;
  }

  .cases__case:nth-of-type(2) {
    width: 50%;
    aspect-ratio: 1;
    justify-self: end;
  }

  .case__right {
    position: relative;
    height: 100%;
    align-self: stretch;
  }

  .case__title {
    position: absolute;
    left: 0;
    bottom: -3rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .featured-cases__container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: var(--gap-small);
      align-items: start;
      width: 100%;
    }

    .featured-cases__container-left {
      display: grid;
      grid-template-rows: 1fr;
      grid-gap: var(--gap-small);
    }

    .cases__case:nth-of-type(1) {
      aspect-ratio: 3/4;
      height: 100%;
    }

    .cases__case:nth-of-type(2) {
      width: 65%;
      aspect-ratio: 1;
    }

    .case__right {
      position: relative;
      width: 80%;
      aspect-ratio: 3 /4;
    }

    .case__link {
      font-size: 0.9rem;
      bottom: -2.2rem;
    }

    .right-link {
      bottom: -3rem;
      right: 0;
      text-align: right;
    }
  }
</style>
