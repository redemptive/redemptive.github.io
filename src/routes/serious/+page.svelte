<script>
  import ProjectPanel from '$lib/components/ProjectPanel.svelte';
</script>

<svelte:head>
  <title>Serious - Ewan Forbes</title>
  <meta
    name="description"
    content="DevOps, cloud engineering, automation and software delivery projects by Ewan Forbes."
  />
</svelte:head>

<div class="serious">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Serious:</h3>
      <h4>Development Skills:</h4>
      <ul>
        <li>Python</li>
        <li>JavaScript/Node.js</li>
        <li>Svelte</li>
        <li>Rust</li>
      </ul>
      <h4>Ops Skills:</h4>
      <ul>
        <li>AWS</li>
        <li>Azure</li>
        <li>Docker</li>
        <li>Docker Compose</li>
        <li>Kubernetes</li>
        <li>Jenkins</li>
        <li>TeamCity</li>
        <li>GitHub Actions</li>
      </ul>
      <h4>Great IT Books:</h4>
      <ul>
        <li>The DevOps Handbook</li>
        <li>The Phoenix Project</li>
        <li>Accelerate</li>
        <li>The Lean Startup</li>
        <li>The Goal</li>
      </ul>
    </aside>
    <section class="main">
      <h2>Serious</h2>
      <p>
        My full-time job, creating and maintaining robust, secure, cost-effective and scalable cloud
        solutions is something I take pride in and enjoy.
      </p>
      <p>
        Even for my own personal projects, I like to set up a pipeline to automate the boring and repetitive tasks.
        This site has its own CI/CD pipeline with help from GitHub Actions and GitHub Pages.
      </p>
      <p>
        I have read a lot on the theory and origin of DevOps. In my opinion, DevOps is a way of working.
        Without neglecting this side of the career, a good DevOps engineer should also be able to:
      </p>
      <ul>
        <li>Provide robust, secure, scalable and cost-effective infrastructure (cloud or otherwise).</li>
        <li>Automate manual tasks such as builds and deployments.</li>
        <li>Be a champion for good automated testing practices.</li>
        <li>Help developers understand the environments their code runs in.</li>
        <li>Break down silos and share knowledge, encouraging cross-functional communication.</li>
        <li>Have a deep understanding of development methodologies such as agile, scrum and lean.</li>
      </ul>
      <p>
        Enough talk; here are a few of the more serious projects I've done.
      </p>
      <ProjectPanel
        title="Tube Data"
        paragraphs={[
          'A simple little app which uses the TFL api to get and display the statuses of tube lines and their stops.',
          'It taught me that they are very often having issues and delayed.'
        ]}
        codeLink="https://github.com/redemptive/tube-data"
        visitLink="https://redemptive.github.io/tube-data/"
      />
      <ProjectPanel
        title="This Site"
        paragraphs={[
          'A little more detail perhaps about this site.',
          'This project is built with Node.js and SvelteKit. It prerenders to static files so GitHub Pages can serve it directly.',
          'GitHub Pages can pull the repo, install packages, check the project, build, and then deploy if all is well.'
        ]}
        codeLink="https://github.com/redemptive/redemptive.github.io"
      />
    </section>
  </div>
</div>
