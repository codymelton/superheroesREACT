import React from 'react';
import { Link } from 'react-router'

const NavBar = () =>
  <div>
  <nav>
    <ul className="nav-flex">
      <Link to="/"> Home </Link> //add activeClassName and css for that.
      <Link to="/heroes"> Heroes </Link> //add activeClassName and css for that.
      <Link to="/heroes/post"> Create Hero </Link> //add activeClassName and css for that.
    </ul>
  </nav>
  </div>

export default NavBar;
