<script>
  import { onMount } from "svelte";

  let images = [
    "/CaseImages/Fillers/dashboard.jpg",
    "/CaseImages/Fillers/ubicaMac.jpg",
    "/CaseImages/Fillers/grrr-iphone.jpg",
    "/CaseImages/Lentebock/chair-iphone.jpeg",
  ];
  let currentIndex = 0;

  onMount(() => {
    const marquee = document.querySelector(".marquee");
    marquee.addEventListener("animationiteration", () => {
      currentIndex = (currentIndex + 1) % images.length;
    });
  });
</script>

<div class="marquee__container">
  <div class="marquee">
    {#each [...images, ...images] as image, i}
      <img
        class="marquee__image"
        src={image}
        alt={`Image ${(i % images.length) + 1}`}
      />
    {/each}
  </div>
</div>

<style>
  .marquee__container {
    width: 100%;
    background-color: var(--dark);
    overflow: hidden;
  }

  .marquee {
    display: flex;
    animation: marquee 30s linear infinite; /* Adjusted duration for smoothness */
    gap: var(--gap-small);
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%); /* Adjusted for duplicated images */
    }
  }

  .marquee__image {
    aspect-ratio: 4/3;
    width: 50%; /* Adjusted since images are duplicated */
    background-color: var(--dark);
    object-fit: cover;
  }
</style>
