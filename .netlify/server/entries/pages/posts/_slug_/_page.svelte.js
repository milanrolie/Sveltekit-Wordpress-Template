import { c as create_ssr_component, e as escape, f as each, b as add_attribute } from "../../../../chunks/ssr.js";
const css = {
  code: "article.svelte-m0xio3{position:relative;width:20rem;overflow:hidden}img.svelte-m0xio3{width:20rem}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  export let data;\\n  const { post } = data;\\n<\/script>\\n\\n<article>\\n  <h1>{post.title}</h1>\\n  <p><em>{post.date}</em></p>\\n  <div>{@html post.content}</div>\\n  <p>Author: {post.author.node.name}</p>\\n  <div>\\n    Categories:\\n    <ul>\\n      {#each post.categories.nodes as category}\\n        <li>{category.name}</li>\\n      {/each}\\n    </ul>\\n  </div>\\n  {#if post.featuredImage}\\n    <img\\n      src={post.featuredImage.node.sourceUrl}\\n      alt={post.featuredImage.node.altText}\\n      width={post.featuredImage.node.mediaDetails.width}\\n      height={post.featuredImage.node.mediaDetails.height}\\n    />\\n  {/if}\\n</article>\\n\\n<style>\\n  article {\\n    position: relative;\\n    width: 20rem;\\n    overflow: hidden;\\n  }\\n\\n  img {\\n    width: 20rem;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6BE,qBAAQ,CACN,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,MACZ,CAEA,iBAAI,CACF,KAAK,CAAE,KACT"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { post } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `<article class="svelte-m0xio3"><h1>${escape(post.title)}</h1> <p><em>${escape(post.date)}</em></p> <div><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div> <p>Author: ${escape(post.author.node.name)}</p> <div>Categories:
    <ul>${each(post.categories.nodes, (category) => {
    return `<li>${escape(category.name)}</li>`;
  })}</ul></div> ${post.featuredImage ? `<img${add_attribute("src", post.featuredImage.node.sourceUrl, 0)}${add_attribute("alt", post.featuredImage.node.altText, 0)}${add_attribute("width", post.featuredImage.node.mediaDetails.width, 0)}${add_attribute("height", post.featuredImage.node.mediaDetails.height, 0)} class="svelte-m0xio3">` : ``} </article>`;
});
export {
  Page as default
};
