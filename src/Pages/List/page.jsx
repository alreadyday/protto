import React from "react";
import { LoadingIconContext } from "./Context/loadingIcon";

export default function ListPage() {
  const { loading } = React.useContext(LoadingIconContext);
  console.warn(loading);
  return <div>List</div>;
}
