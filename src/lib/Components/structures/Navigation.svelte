<script>
  import { onMount } from "svelte";
  import { gql, request } from "graphql-request";

  let menuItems = [];

  const query = gql`
    query Navigation {
      menus {
        nodes {
          menuItems {
            edges {
              node {
                id
                label
                title
                url
                target
              }
            }
          }
        }
      }
    }
  `;

  onMount(async () => {
    const endpoint = "http://sveltekit-wordpress-template.local/graphql";
    const data = await request(endpoint, query);
    menuItems = data.menus.nodes[0].menuItems.edges.map((edge) => edge.node);
    console.log(menuItems);
  });
</script>

<nav class="navigation">
  <a class="logo__link" href="/">
    <div class="navigation__logo">
      <!-- <Logo color="currentColor" width="10rem" /> -->
    </div>
  </a>
  <ul class="navigation__links mobile-hide">
    {#each menuItems as item}
      <li class="navigation__link">
        <a href={item.url} title={item.title}>{item.label}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-small);
    height: 3rem;
    z-index: 100;
    animation: 0.3s ease-in-out;
  }

  .logo__link {
    color: var(--dark);
  }

  .navigation__links {
    display: flex;
    list-style: none;
    gap: var(--gap-small);
  }

  .navigation__link {
    font-size: 1rem;
    letter-spacing: 0.5px;
    text-transform: lowercase;
    transition: 0.3s;
  }

  .navigation__link:hover {
    filter: blur(1px);
  }
</style>
