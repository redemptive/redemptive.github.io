import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';

// Routes
import Home from './routes/index';
import About from './routes/about';
import Games from './routes/games';

class App extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<div className="App">
					<div className="Content">
						<header>
							<nav>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/about">About</Link></li>
									<li><Link to="/games">Games</Link></li>
								</ul>
							</nav>
							<a href="https://github.com/redemptive"><button>GitHub</button></a>
						</header>
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/games" component={Games} />
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
			</HashRouter>
		);
	}
}

export default App;