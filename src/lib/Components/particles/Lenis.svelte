<script>
  import { gsap } from "gsap";
  import Lenis from "lenis";
  import { onDestroy, onMount } from "svelte";

  onMount(async () => {
    await Promise.all([
      // Add any promises for elements to be loaded here
    ]);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(1.8, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {});
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  onDestroy(() => {
    gsap.ticker.remove();
  });
</script>
