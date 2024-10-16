<script>
  import { onMount, beforeUpdate, onDestroy } from "svelte";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
  import { gsap } from "gsap";

  let triggers = [];

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(".switch", {
      scrollTrigger: {
        trigger: ".color-switch",
        start: "top",
        end: "top+=500",
        scrub: true,
      },
      y: "-50%",
    });

    gsap.to(".logo__link, .navigation__links", {
      duration: 1,
      scrollTrigger: {
        trigger: ".color-switch",
        start: "top-=1000",
        scrub: true,
      },
      color: "#beb2a7",
    });

    gsap.to(".menu-wrapper", {
      duration: 1,
      scrollTrigger: {
        trigger: ".color-switch",
        start: "top-=1000",
        scrub: true,
      },
      backgroundColor: "#f5f5f550",
      color: "#000",
    });
  });

  beforeUpdate(() => {
    triggers.forEach((trigger) => {
      ScrollTrigger.getById(trigger.scrollTrigger.id).kill();
    });
    triggers = [];
  });
</script>

<div class="color-switch">
  <div class="switch"></div>
</div>

<style lang="scss">
  .color-switch {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background-color: var(--light);
  }

  .switch {
    position: absolute;
    top: 100%;
    width: 300%;
    height: 200vh;
    background-color: var(--dark);
    filter: blur(200px);
    transform: translateX(-50%) rotate(-10deg);
  }

  @media (max-width: 768px) {
    .color-switch {
      height: 60vh;
    }

    .switch {
      height: 160vh;
    }
  }
</style>
