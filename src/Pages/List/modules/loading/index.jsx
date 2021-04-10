import React from "react";
import { LoadingIconContext } from "./Context";
import { ReactComponent as LoadingIcon } from "./Loading.svg";

export default function LoadingModule() {
  const { loading } = React.useContext(LoadingIconContext);
  return (
    loading && (
      <div>
        <LoadingIcon />
      </div>
    )
  );
}
