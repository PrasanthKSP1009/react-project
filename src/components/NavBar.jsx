import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <li>
        <Link to="/"  className="list">Home</Link>
      </li>
      <li>
        <Link to="/about" className="list">About</Link>
      </li>
      <li>
        <Link to="/fun" className="list">FuncComp</Link>
      </li>
      <li>
        <Link to="/class" className="list">ClassComponent</Link>
      </li>
      <li>
        <Link to="/eff" className="list">Use Effect</Link>
      </li>
      <li>
        <Link to="/ref" className="list">UseRef</Link>
      </li>
    </nav>
  );
};

export default NavBar;
