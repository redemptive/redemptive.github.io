import React from 'react';

function Home() {
	return (
		<div className="Home">
  
			<div className="wrapper">
				<aside className="sidebar">
					<h3>Key Skills</h3>
					<h4>DevOps/Cloud</h4>
					<ul>
						<li>Terraform</li>
						<li>Azure</li>
						<li>Azure ARM Templates</li>
						<li>AWS</li>
						<li>Networking</li>
						<li>Docker</li>
						<li>Docker Compose</li>
						<li>Kubernetes</li>
					</ul>
					<h4>Development</h4>
					<ul>
						<li>Python</li>
						<li>Javascript/NodeJs</li>
						<li>React</li>
						<li>TDD</li>
						<li>Rest APIs</li>
					</ul>
				</aside>
				<section className="main">
					<h2>Ewan Forbes</h2>
					<h3>DevOps Engineer</h3>
					<p>
						Hello. I'm Ewan Forbes, an experienced DevOps engineer currently working from Dundee.
					</p>
					<p>
						There's nothing I enjoy more than learning a new technology or skill.
						This has given me a wide range of knowledge across all stages of the development lifecycle.
						With my endless curiosity for IT, I'll continue learning and experimenting.
					</p>
					<p>
						Please, feel free to have a browse. There is everything from JavaScript browser games, nodejs rest apis with tdd and docker.  
					</p>
				</section>
			</div>
		</div>
	);
}

export default Home;