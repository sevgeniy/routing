import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home, About, Products, Events, Contact } from "./pages";
import { Switch, HashRouter, Route, Redirect } from "react-router-dom";
import Whoops from "./Whoops";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/company" to="/about" />
        <Redirect from="/history" to="/about/history" />
        <Redirect from="/location" to="/about/location" />
        <Redirect from="/services" to="/about/services" />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
