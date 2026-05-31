<script>
  import ProjectPanel from '$lib/components/ProjectPanel.svelte';
</script>

<div class="fun">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Fun:</h3>
      <ul>
        <li>Face Invaders</li>
        <li>Asteroids</li>
        <li>Crafter</li>
      </ul>
    </aside>
    <section class="main">
      <h2>Fun</h2>
      <p>
        Making JavaScript browser games is a particular passion of mine,
        particularly remaking retro arcade games.
      </p>
      <p>
        Making these games is what originally sparked my interest in programming.
        Well... aside from Visual Basic all those years ago at school!
      </p>
      <p>
        A bunch of these are playable via the links next to each game.
        You will be redirected to the GitHub Pages site for the game repository where it is hosted.
        There are also links to the repository where you can see the code if you are so inclined.
      </p>
      <ProjectPanel
        title="Face Invaders"
        paragraphs={[
          "A Space Invaders style game with puking emojis.",
          "I wanted to see what I could do with plain DOM manipulation and no canvas."
        ]}
        codeLink="https://github.com/redemptive/face-invaders"
        playLink="https://redemptive.github.io/face-invaders/"
      />
      <ProjectPanel
        title="Asteroids"
        paragraphs={[
          'Another remake of a classic game.',
          "Also groundbreaking in its time, the challenge was definitely in the asteroid-splitting mechanics when they are hit."
        ]}
        codeLink="https://github.com/redemptive/jasteroids"
        playLink="https://redemptive.github.io/jasteroids/"
      />
    </section>
  </div>
</div>
