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
}`;

const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";

async function fetchprojects() {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const projects = json.data.projects;
  return projects;
}

export async function load() {
  const projects = await fetchprojects();

  console.log(projects.nodes);
  return {
    projects,
  };
}
