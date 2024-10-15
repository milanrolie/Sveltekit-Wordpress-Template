<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import Image from "$lib/particles/Image.svelte";
  import Carousel from "../fragments/Carousel.svelte";

  let title;
</script>

<section class="site-header">
  <h1 class="site-header__title" bind:this={title}>
    <span id="sentence">
      creative developer and <span class="title__slanted">web</span>
    </span>
    <span id="sentence"> designer with love for motion.</span>
  </h1>
  <Carousel />
</section>

<style lang="scss">
  .site-header {
    position: relative;
    width: 100%;
    padding: var(--padding-small);
    padding-top: 35vh;
  }

  .site-header__title {
    @include title-large;

    margin-bottom: var(--margin-small);
  }

  .title__slanted {
    font-style: italic;
    color: var(--primary);
  }

  @media (max-width: 768px) {
    .site-header__title {
      width: 80%;
    }
  }
</style>
