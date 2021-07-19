import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import ResultSearch from "../pages/ResultSearch";

function Main(props) {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/resultSearch" component={ResultSearch} />
    </React.Fragment>
  );
}

export default Main;
