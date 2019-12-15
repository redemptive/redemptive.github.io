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
						This site is a react project. 
						React-router-dom provides routing between different pages. 
						I've chosen hashrouter specifically for this.
						Routes are in their own folder in the project.
					</p>
					<p>
						Having already been very familiar with node js and react, it was a fun project.
					</p>
				</section>
			</div>
		</div>
	);
}

export default About;