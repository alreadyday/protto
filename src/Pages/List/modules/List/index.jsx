import React from "react";
import { OffsetTotalContext } from "../../Context/OffsetTotal";
import { ListContext, listGet } from "./Context";

export default function ListModule() {
  const { list, setList } = React.useContext(ListContext);
  const { offsetTotal } = React.useContext(OffsetTotalContext);
  React.useEffect(async () => {
    const newList = await listGet(offsetTotal);
    setList([...list, ...newList]);
  }, [offsetTotal]);
  return (
    <div>
      {list.map((value) => {
        return <div>{value.id}</div>;
      })}
    </div>
  );
}
