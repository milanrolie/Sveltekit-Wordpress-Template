import { c as create_ssr_component, b as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/ssr.js";
const css = {
  code: "div.svelte-jgz98q{width:20rem;height:20rem;overflow:hidden}",
  map: '{"version":3,"file":"PostPreview.svelte","sources":["PostPreview.svelte"],"sourcesContent":["<script>\\n  export let post;\\n<\/script>\\n\\n<div>\\n  <a href={`/posts/${post.slug}`}>\\n    <h2>{post.title}</h2>\\n    <p>{post.date}</p>\\n    {#if post.featuredImage}\\n      <img\\n        src={post.featuredImage.node.sourceUrl}\\n        alt={post.featuredImage.node.altText}\\n        width={post.featuredImage.node.mediaDetails.width}\\n        height={post.featuredImage.node.mediaDetails.height}\\n      />\\n    {/if}\\n  </a>\\n</div>\\n\\n<style>\\n  div {\\n    width: 20rem;\\n    height: 20rem;\\n    overflow: hidden;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAoBE,iBAAI,CACF,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MACZ"}'
};
const PostPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
  $$result.css.add(css);
  return `<div class="svelte-jgz98q"><a${add_attribute("href", `/posts/${post.slug}`, 0)}><h2>${escape(post.title)}</h2> <p>${escape(post.date)}</p> ${post.featuredImage ? `<img${add_attribute("src", post.featuredImage.node.sourceUrl, 0)}${add_attribute("alt", post.featuredImage.node.altText, 0)}${add_attribute("width", post.featuredImage.node.mediaDetails.width, 0)}${add_attribute("height", post.featuredImage.node.mediaDetails.height, 0)}>` : ``}</a> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.posts.nodes;
  const page = data.page;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<h1>${escape(page.acfPageTitle.title)}</h1> ${each(posts, (post) => {
    return `${validate_component(PostPreview, "PostPreview").$$render($$result, { post }, {}, {})}`;
  })}`;
});
export {
  Page as default
};
