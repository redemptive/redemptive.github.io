import React, { Component } from 'react';
import './App.css';

import {
	HashRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import Home from './routes/index';
import About from './routes/about';

class App extends Component {
	render() {
		return (
			<Router basename='/'>
				<div className="App">
					<div className="Content">
						<header>
							<nav>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/about">About</Link></li>
									<li></li>
								</ul>
							</nav>
							<a href="https://github.com/redemptive"><button>GitHub</button></a>
						</header>
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/" component={Home} />
						</Switch>
						<footer>
							<h3>Ewan Forbes - DevOps Engineer</h3>
							<p>
                This site is made with react and react-router-dom. <a href="https://github.com/redemptive/redemptive.github.io">
                  See the code here
								</a>
							</p>
						</footer>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;