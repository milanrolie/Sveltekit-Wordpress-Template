<script>
  export let data;
</script>

<div class="case-images">
  <figure class="figure__full-width">
    <img class="image" data-fadeIn="true" src={data.images[0]} alt="" />
  </figure>

  <div class="image-double__container">
    <figure class="figure__full-width squared">
      {#if data.images[1].endsWith(".webm")}
        <video
          autoplay
          muted
          playsinline
          loop
          class="image"
          data-fadeIn="true"
          src={data.images[1]}
          alt=""
        />
      {:else}
        <img class="image" data-fadeIn="true" src={data.images[1]} alt="" />
      {/if}
    </figure>
    <figure class="figure__full-width squared">
      {#if data.images[2].endsWith(".webm")}
        <video
          autoplay
          muted
          playsinline
          loop
          class="image"
          data-fadeIn="true"
          src={data.images[2]}
          alt=""
        />
      {:else}
        <img class="image" data-fadeIn="true" src={data.images[2]} alt="" />
      {/if}
    </figure>
  </div>

  <figure class="figure__full-width">
    <img class="image" data-fadeIn="true" src={data.images[3]} alt="" />
  </figure>
</div>

<style>
  .case-images {
    padding: var(--padding-small);
    background-color: var(--light);
    z-index: 20;
  }

  .figure__full-width {
    position: relative;
    width: 100%;

    overflow: hidden;
    aspect-ratio: 16 / 9;
  }

  .image-double__container {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: var(--margin-small) 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--gap-small);
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
  }

  .squared {
    aspect-ratio: 1 / 1;
  }

  @media (max-width: 768px) {
    .image-double__container {
      grid-template-columns: 1fr;
    }

    .figure__full-width {
      aspect-ratio: 3 / 4;
    }
  }
</style>
