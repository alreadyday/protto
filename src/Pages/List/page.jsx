import React from "react";
import List from "./modules/List";
import Loading from "./modules/Loading";

export default function page() {
  return (
    <div>
      <List />
      <Loading />
    </div>
  );
}
