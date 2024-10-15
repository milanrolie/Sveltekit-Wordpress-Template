<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { afterUpdate } from "svelte";
  import { page } from "$app/stores";

  afterUpdate(() => {
    currentUrl = window.location.pathname;
  });

  export let currentUrl;

  onMount(() => {
    let menuButton = document.querySelector(".menu-button");
    const links = document.querySelectorAll(".menu-text-gsap");

    let mm = gsap.matchMedia();

    let tl = gsap.timeline({ paused: true, reversed: true });
    tl.to(".menu-wrapper", {
      width: "60%",
      borderRadius: "1em",
      duration: 1.2,
      ease: "Expo.easeInOut",
    });

    mm.add("(max-width: 700px)", () => {
      tl.to(
        ".menu-wrapper",
        {
          width: "96%",
          borderRadius: "1em",
          duration: 1.2,
          ease: "Expo.easeInOut",
          delay: 0,
        },
        "<"
      );
    });

    tl.to(
      ".explore",
      { y: 0, duration: 2, ease: "Expo.easeInOut", delay: 1 },
      "<"
    );
    tl.to(
      ".menu-wrapper",
      { height: "75svh", duration: 1.2, ease: "Expo.easeOut", delay: 0.1 },
      "<"
    );
    tl.to(
      "button img",
      { rotate: 360, x: -6, duration: 1.5, ease: "Expo.easeInOut", delay: 0 },
      "<"
    );
    tl.to(
      ".menu-text-gsap",
      { y: 0, duration: 2, ease: "Expo.easeOut", delay: 0.6 },
      "<"
    );
    tl.to(".number", { y: 0, duration: 1.7, ease: "Expo.easeOut" }, "<");
    tl.to(
      ".socials-gsap",
      { y: 0, duration: 1.5, stagger: 0.2, delay: 0.4, ease: "Expo.easeInOut" },
      "<"
    );

    menuButton.addEventListener("click", function () {
      if (tl.reversed()) {
        tl.timeScale(1.5).play();
      } else {
        tl.timeScale(1.5).reverse();
      }
    });

    links.forEach((link) => {
      link.addEventListener("click", function () {
        if (!tl.reversed()) {
          tl.timeScale(2).reverse();
        }
      });
    });
  });
</script>

<div class="hide">{$page.url.pathname}</div>

<div class="menu-wrapper desktop-hide">
  <div class="button-wrapper">
    <button class="menu-button"></button>
  </div>
  <nav>
    <ul>
      <!-- <li>
        <p class="number">01</p>
        <a class="menu-text-gsap" href="/about">about</a>
      </li> -->
      <li>
        <p class="number">01</p>
        <a class="menu-text-gsap projects" href="/cases">work</a>
      </li>
      <li>
        <p class="number">02</p>
        <a class="menu-text-gsap" href="/#contact">contact</a>
      </li>
    </ul>
  </nav>

  <div class="submenu">
    <div class="left-submenu socials-gsap">
      <p class="subhead">Contact</p>
      <ul class="socials">
        <li>
          <a href="mailto:contact@studiorolie.com">contact@studiorolie.com</a>
          <a href="tel:+31 653 63 51 06">+31 653 63 51 06</a>
        </li>
      </ul>
    </div>
    <div class="right-submenu socials-gsap">
      <p class="subhead">socials</p>
      <ul class="socials">
        <li>
          <a href="https://www.instagram.com/studiorolie/">Instagram</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/milan-rolie-778150151//"
            >LinkedIn</a
          >
        </li>
        <li><a href="https://github.com/milanrolie">GitHub</a></li>
      </ul>
    </div>
  </div>
</div>

<style>
  .menu-wrapper {
    position: fixed;
    right: 1%;
    top: 1em;
    height: 7px;
    width: 7px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5em;
    z-index: 8;
    overflow: hidden;
    background-color: rgba(20, 20, 20, 0.85);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }

  h3 {
    color: var(--gunMetal);
    font-family: var(--font2);
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 5%;
  }

  .explore {
    transform: translateY(-400%);
  }

  .button-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    width: max-content;
    height: auto;
  }

  button {
    position: relative;
    background-color: rgba(255, 255, 255, 0);
    padding: 1.5em;
    border: 0;
    z-index: 12;
    transition: transform 0.2s;
  }

  button:hover {
    cursor: pointer;
  }

  button:hover button img {
    transform: rotate(135deg);
  }

  button img {
    position: absolute;
    top: 0.5em;
    left: 0.9em;
  }

  nav li {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: baseline;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

  .number {
    transform: translateY(300%);
    font-weight: 100;
  }

  p {
    color: var(--light);
    font-size: 1em;
  }
  a {
    text-decoration: none;
    color: var(--light);
  }
  nav a {
    font-size: 5em;
    transform: translateY(-130%);
    transition: margin 0.2s;
    font-weight: 300;
  }

  .submenu {
    position: absolute;
    left: 0.5rem;
    bottom: 0;
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .subhead {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 200;
  }

  .socials {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    list-style-type: none;
    max-width: 50%;
  }

  .socials-gsap {
    transform: translateY(200%);
  }

  .socials a {
    margin-right: 2em;
  }

  @media screen and (max-width: 1122px) {
  }

  @media screen and (max-width: 700px) {
    .menu-wrapper {
      top: var(--padding-small);
      right: var(--padding-small);
    }

    button img {
      position: absolute;
      top: 8px;
      left: 8px;
    }

    nav {
      margin-top: 10%;
    }

    nav a {
      margin-top: 3%;
      font-size: 13vw;
    }

    .submenu {
      position: absolute;
      left: 1rem;
      bottom: -1rem;
    }

    .socials a {
      font-size: 0.8em;
      font-weight: 300;
    }
  }
</style>
