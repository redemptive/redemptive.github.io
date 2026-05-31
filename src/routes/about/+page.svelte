<div class="about">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Technologies</h3>
      <h4>Front End</h4>
      <ul>
        <li>JavaScript</li>
        <li>Svelte</li>
        <li>SvelteKit</li>
        <li>GitHub Pages</li>
      </ul>
      <h4>CI Build</h4>
      <ul>
        <li>GitHub Actions</li>
        <li>Pull dev branch</li>
        <li>Check the Svelte project</li>
        <li>Build static pages</li>
        <li>Publish to GitHub Pages</li>
      </ul>
    </aside>
    <section class="main">
      <h2>About</h2>
      <p>I didn't want a plain old static HTML site!</p>
      <p>
        Using SvelteKit and GitHub Actions, I've created something a little more interesting.
      </p>
      <h3>The Code</h3>
      <p>
        The SvelteKit project gets prerendered and deployed to GitHub Pages as a static site.
      </p>
      <p>
        This site is made with the help of Svelte. SvelteKit provides file-based routing between
        different pages, and the static adapter turns each route into files GitHub Pages can serve.
      </p>
      <p>
        Having already been very familiar with Node.js and front-end frameworks, it was a fun project.
      </p>
      <h3>The Pipeline</h3>
      <p>
        I created the pipeline using GitHub Actions.
        I'd like to take a moment to appreciate github actions. You can do so much for free!
      </p>
      <p>
        A good pipeline setup automates boring, time consuming manual tasks and eliminates the
        possibility of human error. Here is what mine does:
      </p>
      <ul>
        <li>Triggered on push to master branch</li>
        <li>Installs npm packages</li>
        <li>Checks the Svelte project</li>
        <li>Builds the static SvelteKit site</li>
        <li>Uploads the build directory for GitHub Pages to serve</li>
      </ul>
    </section>
  </div>
</div>
