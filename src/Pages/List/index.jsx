import React from "react";
import { OffsetContextProvider } from "./Context/Offset";
import { ListContextProvider } from "./Modules/List/Context";
import Page from "./Page";

export default function ListPageIndex() {
  return (
    <OffsetContextProvider>
      <ListContextProvider>
        <Page />
      </ListContextProvider>
    </OffsetContextProvider>
  );
}
