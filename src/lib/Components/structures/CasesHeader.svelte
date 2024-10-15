<script>
  import { gsap } from "gsap";
  import Image from "$lib/particles/Image.svelte";
</script>

<section class="site-header">
  <h1 class="site-header__title" id="sentence">
    My <span class="title__slanted">work</span>.
  </h1>

  <Image src="https://source.unsplash.com/random/800x600" alt="" />
</section>

<style>
  .site-header {
    position: relative;
    width: 100%;
    padding: var(--padding-small);
    padding-top: 35vh;
  }

  .site-header__title {
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
</style>
