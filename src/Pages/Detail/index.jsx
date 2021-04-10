import React from "react";
import { DetailContextProvider } from "./Context";
import Page from "./Page";

export default function DetailIndex() {
  return (
    <DetailContextProvider>
      <Page />
    </DetailContextProvider>
  );
}
