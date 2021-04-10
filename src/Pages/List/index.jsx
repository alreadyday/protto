import React from "react";
import { LoadingIconProvider } from "./modules/loading/LoadingIcon";
import Page from "./page";

export default function List() {
  return (
    <LoadingIconProvider>
      <Page />
    </LoadingIconProvider>
  );
}
