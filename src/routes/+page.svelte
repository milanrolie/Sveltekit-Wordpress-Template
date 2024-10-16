<script>
  export let data;
  const home = data.home;
</script>

<svelte:head>
  <title>{home.title}</title>
  <meta name="description" content={home.description} />
  <meta property="og:title" content={home.title} />
  <meta property="og:description" content={home.description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={home.url} />
  <meta property="og:image" content={home.image} />
</svelte:head>

<h1>{home.acfPageTitle.title}</h1>
