import React from "react";
import { ListContext } from "./Context";

export default function ListModule() {
  const { list } = React.useContext(ListContext);
  return (
    <div>
      {list.map((value) => {
        return <div>{value}</div>;
      })}
    </div>
  );
}
