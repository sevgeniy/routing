import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home, About, Products, Events, Contact } from "./pages";
import { Switch, HashRouter, Route } from "react-router-dom";
import Whoops from "./Whoops";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops} />
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
