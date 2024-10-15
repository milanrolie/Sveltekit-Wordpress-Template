<script>
  export let data;
</script>

<section class="case-info">
  <div class="info__container">
    <div class="title__container">
      <h1 class="info__title" id="sentence">{data.title}</h1>
      <h2 class="info__subtitle" id="sentence">{data.client}</h2>
    </div>

    <div class="summary__container">
      <div class="tags__container">
        <h3 class="summary__title" id="sentence">tags</h3>
        {#each data.tags as tag}
          <p class="summary__tag" id="sentence">{tag}</p>
        {/each}
      </div>

      <div class="text__container">
        <h3 class="summary__title" id="sentence">Overview</h3>
        <p class="summary__text" id="sentence">{data.introText}</p>
      </div>

      <div class="practical__container">
        <div>
          <h3 class="summary__title" id="sentence">Date</h3>
          <p class="summary__date" id="sentence">{data.date}</p>
        </div>
        <div>
          <h3 class="summary__title website__title" id="sentence">website</h3>
          <a href={data.link} class="summary__text" id="sentence"
            >{data.link.replace("https://", "")}</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .case-info {
    position: relative;
    top: 0;
    width: 100%;
    padding: var(--padding-medium);
  }

  .info__container {
    position: relative;

    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20vh;
  }

  .info__title {
    @include title-huge;

    font-weight: 400;
    max-width: 30rem;
    margin: 0;
  }

  .info__subtitle {
    @include title-huge;

    color: var(--grey-dark);
    margin-top: var(--margin-small);
  }

  .case-info__slanted {
    font-style: italic;
    color: var(--primary);
  }

  .summary__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--gap-small);

    color: var(--grey-dark);
    font-weight: 300;
    line-height: 1.1;
  }

  .summary__title {
    @include title-small;
    margin-bottom: var(--margin-small);
    padding-bottom: var(--padding-small);

    border-bottom: 1px solid var(--grey-dark);
    margin-top: 0;
  }

  .summary__tag {
    margin: 1px;
  }

  .summary__date {
    margin: 0;
  }

  .summary__text {
    margin: 0;
    padding-right: var(--padding-small);
    // font-weight: 200;
    line-height: 1.3;
  }

  .website__title {
    margin-top: var(--margin-medium);
  }

  @media (max-width: 768px) {
    .info__container {
      grid-template-columns: 1fr;
    }

    .info__title {
      @include title-large;

      font-weight: 400;
      max-width: 30rem;
      margin: 0;
    }

    .info__subtitle {
      @include title-large;

      color: var(--grey-dark);
      margin-top: var(--margin-small);
    }

    .summary__container {
      grid-template-columns: 1fr 2fr;
    }

    .practical__container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      margin-top: var(--margin-medium);
      grid-column: 1/-1;
      grid-gap: var(--gap-small);
    }

    .website__title {
      margin-top: 0;
    }
  }
</style>
