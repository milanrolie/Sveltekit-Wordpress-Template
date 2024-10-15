<script>
</script>

<section class="about-header">
  <h1 class="about-header__title" id="sentence">
    About <span class="title__slanted">studiorolie</span>
  </h1>

  <figure id="fadeUp">
    <img
      data-fadeIn="true"
      class="about-header__image"
      src="https://akoyamockups.com/cdn/shop/files/Image_02_1297081b-2b24-48fa-a0f9-5247107aaeda.jpg?v=1697191744&width=1100"
      alt=""
    />
  </figure>
</section>

<style>
  .about-header {
    position: relative;
    width: 100%;
    padding: var(--padding-small);
    padding-top: 35vh;
  }

  .about-header__title {
    font-size: var(--font-size-large);
    font-weight: 300;
    color: var(--dark);
    margin-bottom: var(--margin-small);
    max-width: 30rem;
  }

  .title__slanted {
    font-style: italic;
    color: var(--primary);
  }

  .about-header__image {
    width: 60%;
    height: 70vh;
  }

  @media (max-width: 768px) {
    .about-header__image {
      aspect-ratio: 3/4;
      width: 100%;
    }
  }
</style>
