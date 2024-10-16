<script>
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { gsap } from "gsap";

  let links = [];
  let animationInProgress = false;

  function animatePageTransition() {
    if (animationInProgress) return;
    animationInProgress = true;

    const timeline = gsap.timeline({
      onComplete: () => {
        animationInProgress = false;
      },
    });

    timeline.to("#pageTransition", {
      duration: 1.2,
      opacity: 1,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set("#pageTransition", { opacity: 0 });
      },
    });

    timeline.to(
      "section, nav, footer",
      {
        duration: 1.2,
        scale: 0.95,
        y: -200,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set("section, nav", { scale: 1, y: 0 });
        },
      },
      "<"
    );

    timeline.to(
      "#whiteLayer",
      {
        duration: 1.2,
        y: 0,
        ease: "power4.inOut",
      },
      "<"
    );
  }

  afterUpdate(() => {
    links = document.querySelectorAll("a");
    links.forEach((link) => {
      if (
        !link.classList.contains("noTransition") &&
        link.getAttribute("href") !== window.location.pathname
      ) {
        link.addEventListener("click", animatePageTransition);
      }
    });

    gsap.from("#fadeUp", {
      y: 150,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    });

    gsap.to("#fadeUp", {
      duration: 2,
      ease: "power4.out",
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    });
  });

  onDestroy(() => {
    links.forEach((link) => {
      link.removeEventListener("click", animatePageTransition);
    });
  });
</script>

<div id="whiteLayer"></div>

<style>
  #whiteLayer {
    position: fixed;
    top: 0;
    left: 0;
    width: 110%;
    height: 120vh;
    background: var(--light);
    z-index: 200;
    opacity: 1;
    pointer-events: none;
    transform: translateY(100vh);
  }

  #pageTransition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(18, 18, 18, 0.2);
    /* backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); */
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
  }
</style>
