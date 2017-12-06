import React, { Component } from 'react';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>

          <div className="container">
            <div className="nav-bar">

              <Header />
              <nav className="tabs">
                <NavLink exact to="/">Home</NavLink>{'   '}
                <NavLink exact to="/projects">Projects</NavLink>{'   '}
                <NavLink exact to="/contact">Contact</NavLink>{'   '}
              </nav>

            </div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
            </Switch>

          </div>

        </Router>
    );
  }
}

export default App;
