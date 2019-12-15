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
						<li>Pull dev branch</li>
						<li>Check linting</li>
						<li>Publish to git hub pages (master branch)</li>
					</ul>
				</aside>
				<section className="main">
					<h2>Main - about</h2>
					<p>Lorem ipsum</p>
				</section>
			</div>
		</div>
	);
}

export default About;