import React, { Component } from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
              <button>Button</button>
            </header>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div className="Home">

      <div className="wrapper">
          <aside className="sidebar">
              <h3>Sidebar</h3>
          </aside>
          <section className="main">
              <h2>Main</h2>
              <p>Lorem ipsum</p>
          </section>
      </div>

      <footer>
          <h3>Footer</h3>
          <p>Lorem ipsum</p>
      </footer>
    </div>
  );
}

function About() {
  return (
    <div className="About">

      <div className="wrapper">
          <aside className="sidebar">
              <h3>Sidebar</h3>
          </aside>
          <section className="main">
              <h2>Main - about</h2>
              <p>Lorem ipsum</p>
          </section>
      </div>

      <footer>
          <h3>Footer</h3>
          <p>Lorem ipsum</p>
      </footer>
    </div>
  );
}

export default App;