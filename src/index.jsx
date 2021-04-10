import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
      <Route exact path="/" render={List} />
      <Route path="/detail" render={Detail} />
    </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyle />
    <RouteEntry />
  </BrowserRouter>,
  document.getElementById("root")
);
