import React from "react";
import { LoadingIconContext } from "./modules/loading/LoadingIcon";
import { ReactComponent as LoadingIcon } from "./modules/loading/Loading.svg";

export default function ListPage() {
  const { loading } = React.useContext(LoadingIconContext);
  console.warn(LoadingIcon);
  return (
    <div>
      List
      <LoadingIcon />
    </div>
  );
}
