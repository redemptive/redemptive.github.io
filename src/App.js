import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route } from 'react-router-dom';

// Routes
import Home from './routes/index/index';
import About from './routes/about/about';
import Games from './routes/games/games';
import DevOps from './routes/devops/devops';

// Components
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
	render() {
		return (
			<HashRouter basename='/'>
				<div className="App">
					<div className="Content">
						<Header 
							navLinks={[
								{page: '/', text: 'Home'},
								{page: '/devops', text: 'DevOps'},
								{page: '/games', text: 'Games'},
								{page: '/about', text: 'About'}
							]}
						/>
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/games" component={Games} />
							<Route path="/devops" component={DevOps} />
							<Route path="/" component={Home} />
						</Switch>
						<Footer 
							title="Ewan Forbes - DevOps Engineer"
						/>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;