export const prerender = true;

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
    page(id: "posts", idType: URI) {
      slug
      content
      acfPageTitle {
        title
      }
    }
  }
`;

const graphqlEndpoint = "http://sveltekit-wordpress-template.local/graphql";

async function fetchPostsAndPage() {
  const response = await fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const posts = json.data.posts;
  const page = json.data.page;

  return {
    posts,
    page,
  };
}

export async function load() {
  const { posts, page } = await fetchPostsAndPage();

  return {
    posts,
    page,
  };
}
