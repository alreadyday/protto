import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { OffsetTotalContext } from "../../Context/OffsetTotal";
import { ListContext, listGet } from "./Context";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Link)`
  width: 200px;
  height: 250px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const CardImg = styled.img`
  width: 150px;
  height: 150px;
`;

export default function ListModule() {
  const { list, setList } = React.useContext(ListContext);
  const { offsetRuntime, setOffsetTotal } = React.useContext(
    OffsetTotalContext
  );
  React.useEffect(async () => {
    const newList = await listGet(offsetRuntime);
    setList([...list, ...newList]);
    setOffsetTotal(offsetRuntime);
  }, [offsetRuntime]);
  return (
    <CardWrapper>
      {list.map((value) => {
        return (
          <Card
            key={value.id}
            to={`/detail?token_id=${value.token_id}&contract=${value.asset_contract.address}`}
          >
            <CardImg src={value.image_url} />
            {value.name}
          </Card>
        );
      })}
    </CardWrapper>
  );
}
