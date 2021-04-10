import React from "react";
import { ListContextProvider } from "./modules/List/Context";
import { LoadingIconProvider } from "./modules/Loading/Context";
import Page from "./page";

export default function ListPageEntry() {
  return (
    <LoadingIconProvider>
      <ListContextProvider>
        <Page />
      </ListContextProvider>
    </LoadingIconProvider>
  );
}
