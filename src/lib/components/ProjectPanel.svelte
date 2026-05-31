<script>
  /** @type {string} */
  export let title;
  /** @type {string[]} */
  export let paragraphs = [];
  /** @type {string | undefined} */
  export let codeLink = undefined;
  /** @type {string | undefined} */
  export let playLink = undefined;
</script>

<div class="project-panel">
  <h3>{title}</h3>
  {#each paragraphs as paragraph (paragraph)}
    <p>{paragraph}</p>
  {/each}
  {#if codeLink}
    <p><a data-testid="code-link" href={codeLink}>View code</a></p>
  {/if}
  {#if playLink}
    <p><a data-testid="play-link" href={playLink}>Play it!</a></p>
  {/if}
</div>

<style>
  .project-panel {
    border: 3px solid var(--border);
    border-radius: 0;
    padding: 22px;
    background:
      linear-gradient(135deg, color-mix(in srgb, var(--highlight-color) 12%, transparent), transparent 48%),
      var(--surface-soft);
    box-shadow: 5px 5px 0 color-mix(in srgb, var(--border) 80%, transparent);
  }

  h3 {
    color: var(--accent);
    font-family: "Press Start 2P", "Montserrat", sans-serif;
    font-size: .78rem;
    line-height: 1.55;
  }

  p:last-child {
    margin-bottom: 0;
  }
</style>
