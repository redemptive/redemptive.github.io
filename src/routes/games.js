import React from 'react';

import ProjectPanel from '../components/ProjectPanel/ProjectPanel';

function Games() {
	return (
		<div className="Games">
  
			<div className="wrapper">
				<aside className="sidebar">
					<h3>Games:</h3>
					<ul>
						<li>Space Invaders</li>
						<li>Asteroids</li>
						<li>Crafter</li>
					</ul>
				</aside>
				<section className="main">
					<h2>Games</h2>
					<p>
                        Making Javascript browser games is a particular passion of mine. 
						Particularly remaking retro arcade games.
					</p>
					<p>
						Making these games is what originally sparked my interest in programming. 
						Well... aside from Visual Basic all those years ago at school!
					</p>
					<p>
						A bunch of these are playable via the links to play right next to the game. 
						You will be redirected to the GitHub pages site for the game repository where it is hosted.
						There are also links to the repository where you can see the code if you are so inclined.
					</p>
					<p>
						Please note though that you will need a keyboard to play them. 
						Have a go! I'm very proud of some of these.
					</p>
					<ProjectPanel 
						title="Space Invaders"
						paragraphs={[
							'I don\'t think this one needs any introduction.',
							'I\'ve remade this old school classic into a browser playable game. Ground breaking in it\'s time, \
							simple game mechanics combine to make the game everybody knows.'
						]}
						codeLink="https://github.com/redemptive/space-invaders"
						playLink="https://redemptive.github.io/space-invaders/"
					/>
					<ProjectPanel 
						title="Asteroids"
						paragraphs={[
							'Another remake of a classic game.',
							'Also groundbreaking in it\'s time, \
							the challenge was definitely in the asteroid splitting mechanics when they are hit.'
						]}
						codeLink="https://github.com/redemptive/js-asteroids"
						playLink="https://redemptive.github.io/js-asteroids/"
					/>
					<ProjectPanel 
						title="Crafter (in development)"
						paragraphs={[
							'My own idea this time.',
							'A 2D resource collecting and crafting game. \
							Still in development, this has so far been the most complex of my games to make.'
						]}
						codeLink="https://github.com/redemptive/Crafter"
						playLink="https://redemptive.github.io/Crafter/"
					/>
				</section>
			</div>
		</div>
	);
}

export default Games;