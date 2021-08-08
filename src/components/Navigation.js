import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="navigator">
        Home
      </Link>
      <Link to="/about" className="navigator">
        About
      </Link>
    </div>
  );
}

export default Navigation;
