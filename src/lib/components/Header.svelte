<script>
  import { onMount } from 'svelte';

  /** @type {{ page: string, text: string }[]} */
  export let navLinks = [];

  let darkMode = false;
  const storageKey = 'theme';

  /** @param {'light' | 'dark'} theme */
  function applyTheme(theme) {
    darkMode = theme === 'dark';
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
  }

  /** @param {Event} event */
  function handleThemeChange(event) {
    const target = /** @type {HTMLInputElement} */ (event.currentTarget);
    applyTheme(target.checked ? 'dark' : 'light');
  }

  onMount(() => {
    const currentTheme = document.documentElement.dataset.theme;
    if (currentTheme === 'dark' || currentTheme === 'light') {
      darkMode = currentTheme === 'dark';
      return;
    }

    applyTheme('dark');
  });
</script>

<header>
  <a class="brand" href="/">
    <span>Ewan Forbes</span>
    <small>DevOps Engineer</small>
  </a>
  <div class="header-actions">
    <nav aria-label="Primary navigation">
      <ul>
        {#each navLinks as link}
          <li><a href={link.page}>{link.text}</a></li>
        {/each}
      </ul>
    </nav>
    <label class="theme-toggle">
      <input
        type="checkbox"
        aria-label="Use dark mode"
        checked={darkMode}
        onchange={handleThemeChange}
      />
      <span aria-hidden="true">
        <span class="toggle-thumb"></span>
      </span>
    </label>
    <a class="github-link" href="https://github.com/redemptive">GitHub</a>
  </div>
</header>

<style>
  header {
    color: var(--muted);
    padding: 30px 0 38px;
    margin-bottom: clamp(20px, 3vw, 32px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
    border-bottom: 3px solid var(--border);
  }

  .brand {
    color: var(--text);
    display: grid;
    gap: 2px;
    min-width: max-content;
  }

  .brand span {
    font-family: "Press Start 2P", "Montserrat", sans-serif;
    font-weight: 700;
    font-size: clamp(.78rem, 1.6vw, 1rem);
    line-height: 1.45;
    color: var(--highlight-color);
    text-shadow: 2px 2px 0 var(--warm-accent);
  }

  .brand small {
    color: var(--muted);
    font-size: .7rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .header-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
    min-width: 0;
  }

  nav ul {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;
    list-style-type: none;
  }

  nav a {
    display: inline-flex;
    align-items: center;
    min-height: 38px;
    border: 2px solid transparent;
    border-radius: 0;
    padding: 0 12px;
    color: var(--muted);
    font-size: .78rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  nav a:hover {
    color: var(--text);
    border-color: var(--border);
    background: var(--surface-soft);
    box-shadow: 3px 3px 0 color-mix(in srgb, var(--border) 75%, transparent);
  }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }

  .theme-toggle input {
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
  }

  .theme-toggle > span {
    position: relative;
    display: block;
    width: 54px;
    height: 30px;
    border: 2px solid var(--border);
    border-radius: 0;
    padding: 3px;
    background: var(--surface-soft);
    transition: background-color .2s ease, border-color .2s ease;
  }

  .theme-toggle > span::before,
  .theme-toggle > span::after {
    position: absolute;
    top: 2px;
    font-size: 12px;
    line-height: 22px;
    pointer-events: none;
  }

  .theme-toggle > span::before {
    left: 7px;
    color: var(--warm-accent);
    content: "L";
  }

  .theme-toggle > span::after {
    right: 7px;
    color: var(--highlight-color);
    content: "D";
  }

  .toggle-thumb {
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 0;
    background: var(--highlight-color);
    box-shadow: 0 0 12px color-mix(in srgb, var(--highlight-color) 55%, transparent);
    transition: transform .2s ease, background-color .2s ease;
  }

  .theme-toggle input:checked + span .toggle-thumb {
    transform: translateX(24px);
    background: var(--accent);
  }

  .theme-toggle input:focus-visible + span {
    outline: 3px solid color-mix(in srgb, var(--highlight-color) 60%, transparent);
    outline-offset: 3px;
  }

  .github-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 38px;
    padding: 0 18px;
    color: var(--surface);
    font-size: .8rem;
    font-weight: 700;
    border: 2px solid var(--border);
    border-radius: 0;
    background: var(--warm-accent);
    box-shadow: 4px 4px 0 var(--border);
    white-space: nowrap;
  }

  @media (max-width: 820px) {
    header {
      align-items: flex-start;
      flex-direction: column;
      padding-bottom: 30px;
    }

    .header-actions {
      width: 100%;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    nav ul {
      justify-content: flex-start;
    }
  }
</style>
