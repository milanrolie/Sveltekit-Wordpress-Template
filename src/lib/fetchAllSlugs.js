// src/lib/fetchAllSlugs.js
const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";

const query = `
 query getAllSlugs {
    projects {
      nodes {
        slug
      }
    }
    posts {
      nodes {
        slug
      }
    }
  }
`;

export async function fetchAllSlugs() {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const json = await response.json();
  const projectSlugs = json.data.projects.nodes.map(
    (node) => `/projects/${node.slug}`
  );
  const postSlugs = json.data.posts.nodes.map((node) => `/posts/${node.slug}`);
  return [...projectSlugs, ...postSlugs];
}
