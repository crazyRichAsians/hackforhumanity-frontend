import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Results from './Pages/Results'
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
}
