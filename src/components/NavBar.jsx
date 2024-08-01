import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/fun">FuncComp</Link>
      </li>
      <li>
        <Link to="/class">ClassComponent</Link>
      </li>
    </nav>
  );
};

export default NavBar;
