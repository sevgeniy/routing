import React from "react";
import MainMenu from "./MainMenu";
import "../css/PageTemplate.css";

const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu className="page__menu" />
    <div class="page__content">{children}</div>
  </div>
);

export default PageTemplate;
