<script>
  import { onMount } from "svelte";

  let currentImage = 0;
  let images = [
    "/CaseImages/Markk/iphone-mockup.webp",
    "/CaseImages/Offshore/Offshore.jpg",
    "/CaseImages/Offshore/concrete-iphone.webp",
  ];

  let intervalId;

  const showNextImage = () => {
    currentImage = (currentImage + 1) % images.length;
  };

  onMount(() => {
    intervalId = setInterval(showNextImage, 3000);
  });
</script>

<div class="carousel" id="fadeUp">
  {#each images as image, i}
    <img
      class="carousel__image"
      src={image}
      alt=""
      height="1080"
      width="1920"
      style="opacity: {i === currentImage ? 1 : 0}"
    />
  {/each}
</div>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .carousel__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel__image {
      transition: none;
    }
  }

  @media (max-width: 768px) {
    .carousel {
      aspect-ratio: 3 / 4;
    }
  }
</style>
