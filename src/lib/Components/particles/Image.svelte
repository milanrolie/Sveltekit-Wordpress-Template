<script>
  export let imageUrl = "";
  export let imageAlt = "";
  export let imageHeight;
  export let imageWidth;
  export let overlay = false;
</script>

{#if overlay === true}
  <div class="image__overlay"></div>
{/if}
<img
  class="image"
  src={imageUrl}
  alt={imageAlt}
  height={imageHeight}
  width={imageWidth}
/>

<style>
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .image__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
