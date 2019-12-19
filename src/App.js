import React, { Component } from 'react';
import './App.css';

import { HashRouter, Switch, Route } from 'react-router-dom';

// Routes
import Home from './routes/index';
import About from './routes/about';
import Games from './routes/games';

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
								{page: '/about', text: 'About'},
								{page: '/games', text: 'Games'}
							]}
						/>
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/games" component={Games} />
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