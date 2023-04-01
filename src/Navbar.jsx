import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/subscribe">Subscribe</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;