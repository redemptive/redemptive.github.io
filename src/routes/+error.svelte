<script>
  import { resolve } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>{$page.status} - Ewan Forbes</title>
  <meta
    name="description"
    content={$page.status === 404
      ? 'The requested page could not be found'
      : 'An error occurred while loading this page.'}
  />
</svelte:head>

<div class="error-page">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Error:</h3>
      <h4>Status</h4>
      <ul>
        <li>{$page.status}</li>
      </ul>
      <h4>Options</h4>
      <ul>
        <li><a href={resolve('/')}>Home</a></li>
        <li><a href={resolve('/serious/')}>Serious</a></li>
        <li><a href={resolve('/fun/')}>Fun</a></li>
        <li><a href={resolve('/books/')}>Books</a></li>
      </ul>
    </aside>
    <section class="main">
      <h2>{$page.status}</h2>
      <h3>{ $page.status === 404 ? 'Page not found' : 'Something went wrong' }</h3>
      <p>
        {#if $page.status === 404}
          I have no idea where you're going...
        {:else}
          The site hit an unexpected problem while loading this page.
        {/if}
      </p>
      <p>
        <a href={resolve('/')}>Return home</a>
      </p>
    </section>
  </div>
</div>
