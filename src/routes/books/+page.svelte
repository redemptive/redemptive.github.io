<script>
  import ProjectPanel from '$lib/components/ProjectPanel.svelte';
</script>

<div class="books">
  <div class="wrapper">
    <aside class="sidebar">
      <h3>Books:</h3>
      <h4>Top 5 Fiction</h4>
      <ul>
        <li>Slaughterhouse 5 - Kurt Vonnegut</li>
        <li>The Plague - Albert Camus</li>
        <li>The Disposessed - Ursula Le Guin</li>
        <li>Dracula - Bram Stoker</li>
        <li>The Glass Bead Game - Herman Hesse</li>
      </ul>
      <h4>Top 5 Non Fiction</h4>
      <ul>
        <li>The Dawn of Everything - David Graeber and David Wengrow</li>
        <li>Bullshit Jobs - David Graeber</li>
        <li>Dark Emu - Bruce Pascoe</li>
        <li>Homage to Catalonia - George Orwell</li>
        <li>McMindfulness - Ronald E Purser</li>
      </ul>
    </aside>
    <section class="main">
      <h2>Books</h2>
      <p>
        Reading is one of my main hobbies. Pick up one of my favourites and I hope you enjoy it as much as I did. My current favourite:
      </p>
      <ProjectPanel
        title="The Plague - Albert Camus"
        paragraphs={[
          'Set in 1940s French Algeria.',
          'The city of Oran is sealed off by a deadly epidemic. The book is a rejection of nihilism in the face of suffering and an exploration of the absurdity of tradgedy.'
        ]}
      />
    </section>
  </div>
</div>
