import { c as create_ssr_component, e as escape, f as each, b as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const projects = data.projects.nodes;
  const page = data.page;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<h1>${escape(page.acfPageTitle.title)}</h1> ${each(projects, (project) => {
    return `<a${add_attribute("href", `/projects/${project.slug}`, 0)}><h1>${escape(project.title)}</h1> <p><em>${escape(project.date)}</em></p> ${project.featuredImage ? `<img${add_attribute("src", project.featuredImage.node.sourceUrl, 0)}${add_attribute("alt", project.featuredImage.node.altText, 0)}${add_attribute("width", project.featuredImage.node.mediaDetails.width, 0)}${add_attribute("height", project.featuredImage.node.mediaDetails.height, 0)}>` : ``} </a>`;
  })}`;
});
export {
  Page as default
};
