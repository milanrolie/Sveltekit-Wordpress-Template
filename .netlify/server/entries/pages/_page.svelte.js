import { c as create_ssr_component, e as escape, b as add_attribute } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const home = data.home;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-bo8d4k_START -->${$$result.title = `<title>${escape(home.title)}</title>`, ""}<meta name="description"${add_attribute("content", home.description, 0)}><meta property="og:title"${add_attribute("content", home.title, 0)}><meta property="og:description"${add_attribute("content", home.description, 0)}><meta property="og:type" content="website"><meta property="og:url"${add_attribute("content", home.url, 0)}><meta property="og:image"${add_attribute("content", home.image, 0)}><!-- HEAD_svelte-bo8d4k_END -->`, ""} <h1>${escape(home.acfPageTitle.title)}</h1>`;
});
export {
  Page as default
};
