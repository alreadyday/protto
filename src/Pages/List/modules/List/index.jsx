import React from "react";
import styled from "styled-components";
import { OffsetTotalContext } from "../../Context/OffsetTotal";
import { ListContext, listGet } from "./Context";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 100px;
  height: 150px;
`;

const CardImg = styled.img`
  width: 75px;
  height: 75px;
`;

export default function ListModule() {
  const { list, setList } = React.useContext(ListContext);
  const { offsetTotal } = React.useContext(OffsetTotalContext);
  React.useEffect(async () => {
    const newList = await listGet(offsetTotal);
    setList([...list, ...newList]);
  }, [offsetTotal]);
  return (
    <CardWrapper>
      {list.map((value) => {
        return (
          <Card key={value.id}>
            <CardImg src={value.image_url} />
            {value.id}
          </Card>
        );
      })}
    </CardWrapper>
  );
}
