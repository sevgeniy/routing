import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Menu.css";

export default () => {
  const selectedStyle = { backgroundColor: "white", color: "grey" };

  return (
    <nav className="menu menu--vertical">
      <NavLink className="menu-item" exact to="/" activeStyle={selectedStyle}>
        [Home]
      </NavLink>
      <NavLink className="menu-item" to="/about" activeStyle={selectedStyle}>
        [About]
      </NavLink>
      <NavLink className="menu-item" to="/events" activeStyle={selectedStyle}>
        [Events]
      </NavLink>
      <NavLink className="menu-item" to="/products" activeStyle={selectedStyle}>
        [Products]
      </NavLink>
      <NavLink className="menu-item" to="/contact" activeStyle={selectedStyle}>
        [Contact Us]
      </NavLink>
    </nav>
  );
};
