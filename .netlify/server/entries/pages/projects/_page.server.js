const prerender = true;
const query = `
query Projects {
  projects {
    nodes {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      date
      id
      slug
      title
    }
}

    page(id: "projects", idType: URI) {
      slug
      content
      acfPageTitle {
        title
        }
        
        }

}`;
const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";
async function fetchProjectsAndPage() {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });
  const json = await response.json();
  const projects = json.data.projects;
  const page = json.data.page;
  return {
    projects,
    page
  };
}
async function load() {
  const { projects, page } = await fetchProjectsAndPage();
  return {
    projects,
    page
  };
}
export {
  load,
  prerender
};
