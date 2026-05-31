<svelte:head>
  <title>About - Ewan Forbes</title>
  <meta
    name="description"
    content="About this SvelteKit site, its static GitHub Pages deployment and the GitHub Actions pipeline behind it."
  />
</svelte:head>

<div class="about">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Technologies:</h3>
      <h4>Front-end</h4>
      <ul>
        <li>JavaScript</li>
        <li>Svelte</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <h4>CI Build</h4>
      <ul>
        <li>GitHub Actions</li>
        <li>Pull default branch</li>
        <li>Check the Svelte project</li>
        <li>Lints the code</li>
        <li>Build static pages</li>
        <li>Publish to GitHub Pages</li>
      </ul>
    </aside>
    <section class="main">
      <h2>About</h2>
      <p>I wanted to make something more interesting than a plain old static HTML site.</p>
      <p>
        Using SvelteKit and GitHub Actions, I've created something a little more interesting.
      </p>
      <h3>The Code</h3>
      <p>
        Svelte is a great little front-end framework which is much neater than React and its screeds of JSX boilerplate.
        It's also lightning fast.
      </p>
      <p>
        Having already been very familiar with Node.js and Svelte, it was a fun project.
      </p>
      <h3>The Pipeline</h3>
      <p>
        I created the pipeline using GitHub Actions.
        I'd like to take a moment to appreciate GitHub Actions. You can do so much for free!
      </p>
      <p>
        A good pipeline setup automates boring, time-consuming manual tasks and eliminates the
        possibility of human error. Here is what mine does:
      </p>
      <ul>
        <li>Triggered on push to default branch</li>
        <li>Installs npm packages</li>
        <li>Checks the Svelte project</li>
        <li>Lints the code</li>
        <li>Builds the static SvelteKit site</li>
        <li>Uploads the build directory for GitHub Pages to serve</li>
      </ul>
    </section>
  </div>
</div>
