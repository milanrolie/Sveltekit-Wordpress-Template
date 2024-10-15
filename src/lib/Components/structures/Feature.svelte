<script>
</script>

<section class="feature">
  <figure class="image__figure">
    <!-- <img data-fadeIn="true" class="feature__image" src="" alt="" /> -->
    <video
      class="feature__image"
      loop
      autoplay
      muted
      playsinline
      src="/CaseImages/Hoogvliet/Motion mockup.webm"
    ></video>
  </figure>
  <div class="feature__paragraph">
    <div class="paragraph__wrapper">
      <h2 class="paragraph__title">Motion language is important</h2>
      <p class="paragraph__text">
        Motion is an important part of my websites, I love to incorporate small
        but impactful details to website i built.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  .feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    background-color: var(--dark);
    padding: var(--padding-small);
    grid-gap: var(--gap-small);
    height: 100vh;
  }

  .feature__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1;
  }

  .feature__paragraph {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: var(--accent);
  }

  .paragraph__title {
    @include title-small;

    text-transform: uppercase;
    font-weight: 100;
    line-height: 1;
    margin: 0;
    margin-bottom: var(--gap-small);
    width: 80%;
    color: var(--accent);
  }

  .paragraph__text {
    font-size: var(--font-size-small);
    font-weight: 200;
    line-height: 1.1;
    font-size: 2rem;
    margin: 0;
    width: 30rem;
    margin-top: var(--margin-medium);
  }

  @media (max-width: 768px) {
    .feature {
      grid-template-columns: 1fr;
      height: auto;
      padding-bottom: 20vh;
    }

    .image__figure {
      width: 100%;
      aspect-ratio: 3 / 4;
    }

    .feature__image {
      height: 100%;
      width: 100%;
      margin-bottom: var(--margin-large);
    }

    .paragraph__text {
      font-size: 1.5rem;
      width: 85%;
    }
  }
</style>
