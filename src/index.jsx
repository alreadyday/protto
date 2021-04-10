import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Detail from "./Pages/Detail";
import List from "./Pages/List";

const GlobalStyle = createGlobalStyle`
  body {
      margin: 50px;
      background: black;
      color: white;
  }
  * {
      box-sizing: border-box;
  }
`;

function RouteEntry() {
  return (
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/detail" component={Detail} />
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
