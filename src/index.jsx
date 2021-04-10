import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Detail from "./Pages/Detail";
import List from "./Pages/List";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
  }
  * {
      box-sizing: border-box;
  }
`;

function RouteEntry() {
  return (
    <Switch>
      <Route exact path="/" render={List} />
      <Route path="/detail" render={Detail} />
    </Switch>
  );
}

ReactDOM.render(
  <HashRouter>
    <GlobalStyle />
    <RouteEntry />
  </HashRouter>,
  document.getElementById("root")
);
