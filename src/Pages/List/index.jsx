import React from "react";
import { DAppAccountProvider } from "./Context/DAppAccount";
import { OffsetContextProvider } from "./Context/Offset";
import { ListContextProvider } from "./Modules/List/Context";
import Page from "./Page";

export default function ListPageIndex() {
  return (
    <DAppAccountProvider>
      <OffsetContextProvider>
        <ListContextProvider>
          <Page />
        </ListContextProvider>
      </OffsetContextProvider>
    </DAppAccountProvider>
  );
}
