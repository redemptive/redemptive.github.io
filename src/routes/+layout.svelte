<script>
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';

  /** @type {{ page: '/' | '/serious/' | '/fun/' | '/books/' | '/about/', text: string }[]} */
  const navLinks = [
    { page: '/', text: 'Home' },
    { page: '/serious/', text: 'Serious' },
    { page: '/fun/', text: 'Fun' },
    { page: '/books/', text: 'Books' },
    { page: '/about/', text: 'About' }
  ];
</script>

<svelte:head>
  <title>Ewan Forbes - DevOps Engineer</title>
</svelte:head>

<div class="app">
  <div class="content">
    <Header {navLinks} />
    <main>
      <slot />
    </main>
    <Footer title="Ewan Forbes - DevOps Engineer" />
  </div>
</div>
