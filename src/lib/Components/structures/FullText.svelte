<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select the component's root element
    const fullTextElement = document.querySelector(".full-text");
    // Scope the selection of .sentence elements to this component
    const sentences = fullTextElement.querySelectorAll("#sentenceScroll");
    gsap.to(sentences, {
      scrollTrigger: {
        trigger: ".full-text",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
      duration: 1.5,
      delay: 0.3,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      stagger: 0.2,
      ease: "power4.out",
    });
  });
</script>

<section class="full-text">
  <h2 class="full-text__title">
    <span id="sentenceScroll">five years of medium</span>
    <span id="sentenceScroll">intense experience</span>
  </h2>
</section>

<style lang="scss">
  .full-text {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .full-text__title {
    @include title-large;

    width: 25rem;
    margin-left: 40vw;
  }
</style>
