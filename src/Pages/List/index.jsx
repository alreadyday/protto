import React from "react";
import { OffsetTotalContextProvider } from "./Context/OffsetTotal";
import { ListContextProvider } from "./modules/List/Context";
import Page from "./page";

export default function ListPageIndex() {
  return (
    <OffsetTotalContextProvider>
      <ListContextProvider>
        <Page />
      </ListContextProvider>
    </OffsetTotalContextProvider>
  );
}
