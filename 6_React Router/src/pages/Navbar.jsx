import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
