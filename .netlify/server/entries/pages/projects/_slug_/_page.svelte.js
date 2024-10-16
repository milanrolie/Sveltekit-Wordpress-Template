import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { project } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<article><h1>${escape(project.title)}</h1> <p><em>${escape(project.date)}</em></p> <div><!-- HTML_TAG_START -->${project.content}<!-- HTML_TAG_END --></div> ${project.featuredImage ? `<img${add_attribute("src", project.featuredImage.node.sourceUrl, 0)}${add_attribute("alt", project.featuredImage.node.altText, 0)}${add_attribute("width", project.featuredImage.node.mediaDetails.width, 0)}${add_attribute("height", project.featuredImage.node.mediaDetails.height, 0)}>` : ``} </article>`;
});
export {
  Page as default
};
