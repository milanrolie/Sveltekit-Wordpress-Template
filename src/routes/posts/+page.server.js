const query = `
  {
    posts {
      nodes {
        title
        slug
        date
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;

const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";

async function fetchPosts() {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const posts = json.data.posts;
  return posts;
}

export async function load() {
  const posts = await fetchPosts();

  console.log(posts.nodes);
  return {
    posts,
  };
}
