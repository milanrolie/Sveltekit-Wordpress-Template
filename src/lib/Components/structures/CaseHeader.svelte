<script>
  export let data;
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.from(".case-header__image", {
      scrollTrigger: {
        trigger: ".case-header",
        start: "top",
        end: "top+=100%",
        scrub: 1,
      },
      scale: 1.1,
    });

    gsap.to(".case-header__image", {
      scrollTrigger: {
        trigger: ".case-header",
        start: "top+=100%",
        end: "top+=100%",
        scrub: 1,
      },
      opacity: 0,
    });
  });
</script>

<section class="case-header">
  <figure class="image__figure" id="fadeUp">
    <img
      data-fadeIn="true"
      class="case-header__image"
      src={data.featuredImage}
      alt=""
    />
  </figure>
</section>

<style>
  .case-header {
    top: 0;
    width: 100%;
    padding: var(--padding-small);
    padding-top: 1px;
    background-color: var(--light);
    z-index: 0;
  }

  .image__figure {
    position: relative;
    top: 0;
    left: 0;
    height: 70vh;
    width: 100%;
    z-index: 10;
    margin-top: 3rem;
  }

  .case-header__image {
    height: 100%;
    width: 100%;
  }
</style>
