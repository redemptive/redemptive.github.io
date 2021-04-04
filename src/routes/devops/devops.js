import React from 'react';

import ProjectPanel from '../../components/ProjectPanel/ProjectPanel';

function DevOps() {
	return (
		<div className="DevOps">
  
			<div className="wrapper">
				<aside className="sidebar">
					<h3>DevOps:</h3>
					<h4>Dev Skills:</h4>
					<ul>
						<li>Nodejs</li>
						<li>React</li>
						<li>API Development</li>
					</ul>
					<h4>Ops Skills:</h4>
					<ul>
						<li>AWS</li>
						<li>Azure</li>
						<li>Docker</li>
						<li>Docker Compose</li>
						<li>Kubernetes</li>
						<li>Jenkins</li>
						<li>Team City</li>
					</ul>
					<h4>Great DevOps Books:</h4>
					<ul>
						<li>The DevOps Handbook</li>
						<li>The Phoenix Project</li>
						<li>Accelerate</li>
						<li>The Lean Startup</li>
						<li>The Goal</li>
					</ul>
				</aside>
				<section className="main">
					<h2>DevOps</h2>
					<p>
                        My full time job, creating and maintaining robust, cost effective and scalable cloud solutions 
						is something I take pride in and enjoy.
					</p>
					<p>
						Even for my own personal projects, I've set up a reliable CI/CD pipeline for many of them.
						This site has it's own CD pipeline even with help from GitHub actions and GitHub pages.
					</p>
					<p>
						I read a lot on the theory and origin of DevOps. In my opinion, DevOps is a way of working. 
						Not neglecting this side of the career, a good DevOps engineer should also be able to:
					</p>
					<ul>
						<li>Provide robust, secure, scalable and cost effective infrastructure (cloud or otherwise).</li>
						<li>Automate manual tasks such as builds and deployments.</li>
						<li>Be a champion for good automated testing practices.</li>
						<li>Help developers understand the environments their code runs in.</li>
						<li>Break down silos and share knowledge, encouraging cross-functional communication.</li>
						<li>Have a deep understanding of development methodologies such as agile, scrum and lean.</li>
					</ul>
					<p>
						Enough talk, here are a few DevOps related project's I've done for myself.
					</p>
					<ProjectPanel 
						title="This Site"
						paragraphs={[
							'A little more detail perhaps about this site.',
							'This project is built with nodejs and react. It also has a robust test suite. This is important for any good CI/CD pipeline.',
							'GitHub pages will kindly pull the repo, install packages, lint, test then deploy if all is well.'
						]}
						codeLink="https://github.com/redemptive/space-invaders"
					/>
					<ProjectPanel 
						title="Raspberry Pi Jenkins Server"
						paragraphs={[
							'This was quite a lot of fun.',
							'First, I had to flash the sd card with a fresh ubuntu server 18.04 image. It\'s not the most powerful machine there is, but I kept installed programs to a minimum.'
						]}
					/>
				</section>
			</div>
		</div>
	);
}

export default DevOps;