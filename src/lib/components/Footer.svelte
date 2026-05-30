<script>
  /** @type {string} */
  export let title;
</script>

<footer>
  <h3>{title}</h3>
  <p>
    This site is made with SvelteKit and the Svelte static adapter.
    <a href="https://github.com/redemptive/redemptive.github.io">See the code here</a>
  </p>
</footer>

<style>
  footer {
    color: var(--text);
    text-align: center;
    padding: 28px 0 32px;
    margin-top: 64px;
    border-top: 3px solid var(--border);
  }

  h3 {
    color: var(--highlight-color);
    font-family: "Press Start 2P", "Montserrat", sans-serif;
    font-size: .72rem;
    line-height: 1.6;
  }

  p {
    color: var(--muted);
    font-size: 12px;
    padding: 8px 10px 0;
  }

  a {
    color: var(--highlight-color);
    font-weight: 700;
  }
</style>
