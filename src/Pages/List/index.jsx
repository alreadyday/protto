import React from "react";
import { OffsetTotalContextProvider } from "./Context/OffsetTotal";
import { ListContextProvider } from "./modules/List/Context";
import { LoadingIconProvider } from "./modules/Loading/Context";
import Page from "./page";

export default function ListPageIndex() {
  return (
    <OffsetTotalContextProvider>
      <LoadingIconProvider>
        <ListContextProvider>
          <Page />
        </ListContextProvider>
      </LoadingIconProvider>
    </OffsetTotalContextProvider>
  );
}
