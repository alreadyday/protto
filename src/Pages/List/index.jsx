import React from "react";
import { OffsetTotalContextProvider } from "./Context/OffsetTotal";
import { ListContextProvider } from "./Modules/List/Context";
import Page from "./Page";

export default function ListPageIndex() {
  return (
    <OffsetTotalContextProvider>
      <ListContextProvider>
        <Page />
      </ListContextProvider>
    </OffsetTotalContextProvider>
  );
}
