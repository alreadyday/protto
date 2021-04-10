import React from "react";
import { LoadingIconProvider } from "./Context/loadingIcon";
import Page from "./page";

export default function List() {
  return (
    <LoadingIconProvider>
      <Page />
    </LoadingIconProvider>
  );
}
