<div class="about">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Technologies</h3>
      <h4>Front End</h4>
      <ul>
        <li>Javascript</li>
        <li>Svelte</li>
        <li>SvelteKit</li>
        <li>GitHub Pages</li>
      </ul>
      <h4>CI Build</h4>
      <ul>
        <li>With GitHub Actions</li>
        <li>Pull dev branch</li>
        <li>Check the Svelte project</li>
        <li>Build static pages</li>
        <li>Publish to GitHub Pages</li>
      </ul>
    </aside>
    <section class="main">
      <h2>About This Site</h2>
      <p>I didn't want a plain old static HTML site!</p>
      <p>
        Using SvelteKit and GitHub actions, I've created something a little more interesting
        while still publishing static files.
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
        Having already been very familiar with node js and frontend frameworks, it was a fun project.
      </p>
      <h3>The Pipeline</h3>
      <p>
        The pipeline I created using GitHub actions.
        I recently stumbled onto this and immediately wanted to learn to use it.
        Before, I had been using a Raspberry PI with jenkins installed.
        It is great having such a CI tool available for free.
      </p>
      <p>
        A good pipeline setup automates boring, time consuming manual tasks and eliminates the
        possibility of human error. Here is what mine does:
      </p>
      <ul>
        <li>Triggered on push to dev branch</li>
        <li>Installs npm packages</li>
        <li>Checks the Svelte project</li>
        <li>Builds the static SvelteKit site</li>
        <li>Deploys the build directory for GitHub Pages to serve</li>
      </ul>
    </section>
  </div>
</div>
