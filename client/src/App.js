import React, { Component } from 'react';
import NavBar from './NavBarr';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Heroes-R-Us</a>
            </div>
            <ul className="nav navbar-nav">
              <Link className="active my-nav-link" to="/">Home</Link>
              <Link className="my-nav-link" to="/heroes">Heroes</Link>
              <Link className="my-nav-link" to="/heroes/post">Create New Hero</Link>
            </ul>
          </div>
        </nav>
        <div className="container my-main-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App;
