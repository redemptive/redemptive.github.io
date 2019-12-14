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
              </ul>
              <h4>Development</h4>
              <ul>
                <li>NodeJs</li>
                <li>React</li>
                <li>TDD</li>
                <li>Rest APIs</li>
              </ul>
          </aside>
          <section className="main">
              <h2>Ewan Forbes</h2>
              <h3>DevOps Engineer</h3>
              <p>
                Hello. I'm Ewan Forbes, a DevOps engineer currently working from London
              </p>
              <p>
                There's nothing I enjoy more than learning a new technology or skill.
                This has given me a wide variety of skills at all stages of the development lifecycle.
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
    </div>
  );
}

export default App;