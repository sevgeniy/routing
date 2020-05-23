import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Menu.css";

export default () => {
  const selectedStyle = { backgroundColor: "white", color: "grey" };

  return (
    <nav className="menu">
      <NavLink
        className="menu-item"
        exact
        to="/about"
        activeStyle={selectedStyle}
      >
        [Company]
      </NavLink>
      <NavLink
        className="menu-item"
        to="/about/history"
        activeStyle={selectedStyle}
      >
        [History]
      </NavLink>
      <NavLink
        className="menu-item"
        to="/about/location"
        activeStyle={selectedStyle}
      >
        [Location]
      </NavLink>
      <NavLink
        className="menu-item"
        to="/about/services"
        activeStyle={selectedStyle}
      >
        [Services]
      </NavLink>
    </nav>
  );
};
