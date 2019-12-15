import React from 'react';

function About() {
	return (
		<div className="About">
  
			<div className="wrapper">
				<aside className="sidebar">
					<h3>Technologies</h3>
					<h4>Front End</h4>
					<ul>
						<li>Javascript</li>
						<li>React</li>
						<li>GitHub Pages</li>
					</ul>
					<h4>CI Build</h4>
					<ul>
						<li>GitHub Actions</li>
						<li>Pull dev branch</li>
						<li>Check linting</li>
						<li>Publish to git hub pages (master branch)</li>
					</ul>
				</aside>
				<section className="main">
					<h2>About This Site</h2>
					<p>I didn't want a plain old static HTML site!</p>
					<p>
						Using react, react-router-dom and GitHub actions, I've created something a little more interesting.
					</p>
					<h3>The Code</h3>
					<p>
						So, I've used node js targeting version 10.x.
						The react project gets built and deployed to GitHub pages.
					</p>
					<p>
						This site is made with the help of react. 
						React-router-dom provides routing between different pages. 
						I've chosen hashrouter specifically for this.
						Routes are separated out to their own folder in the repository source.
					</p>
					<p>
						Having already been very familiar with node js and react, it was a fun project.
					</p>
					<h3>The Pipeline</h3>
					<p>
						The pipeline I created using GitHub actions.
						I recently stumbled onto this and immediately wanted to learn to use it.
						Before, I had been using a Raspberry PI with jenkins installed.
						It is great having such a CI tool available for free.
					</p>
					<p>
						A good pipeline setup automates boring, time consuming manual tasks and eliminates the possibility of human error.
						Here is what mine does:
					</p>
					<ul>
						<li>Triggered on push to dev branch</li>
						<li>Installs npm packages</li>
						<li>Checks linting with eslint</li>
						<li>Builds the react project</li>
						<li>Deploys to the master branch which GitHub pages serves from</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

export default About;