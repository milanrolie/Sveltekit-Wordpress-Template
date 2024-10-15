<script>
</script>

<section class="experience">
  <h2 class="experience__title">Experience and education</h2>
  <ul class="experience__list">
    <li class="experience__item">
      <p class="item__title">Creative developer</p>
      <p class="item__tag">Work</p>

      <p class="item__year">2022 / 2025</p>
    </li>
    <li class="experience__item">
      <p class="item__title">GRRR Agency</p>
      <p class="item__tag">Internship</p>
      <p class="item__year">2024 / 2024</p>
    </li>

    <li class="experience__item">
      <p class="item__title">Frontend design and development</p>
      <p class="item__tag">Study</p>
      <p class="item__year">2022 / 2024</p>
    </li>
  </ul>
</section>

<style>
  .experience {
    background-color: var(--light);
    height: 100vh;
    padding: var(--padding-small);
    padding-left: 30%;
    padding-right: 10%;
    padding-top: 10rem;
  }

  .experience__title {
    font-size: var(--font-size-large);
    font-weight: 200;
    margin: 0;
    margin-bottom: 1rem;
  }

  .experience__item {
    border-top: 1px solid var(--dark);
    display: grid;
    grid-template-columns: 3fr 1fr auto;
    justify-content: space-between;
  }

  .item__title {
    font-weight: 300;
  }

  .item__year {
    color: var(--grey-dark);
    font-weight: 200;
  }
</style>
