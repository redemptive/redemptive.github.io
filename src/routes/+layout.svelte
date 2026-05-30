<script>
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';

  const navLinks = [
    { page: '/', text: 'Home' },
    { page: '/devops/', text: 'DevOps' },
    { page: '/games/', text: 'Games' },
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
