import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { OffsetContext, offsetInit } from "../../Context/Offset";
import { ListContext, listInit } from "./Context";

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Link)`
  width: 25%;
  height: 250px;
  display: flex;
  flex-flow: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 50%;
  }
`;

const CardImg = styled.img`
  height: 150px;
  max-width: 100%;
`;

const CardName = styled.p`
  text-align: center;
`;

export default function ListModule() {
  const listContext = React.useContext(ListContext);
  const offsetContext = React.useContext(OffsetContext);
  const { list } = listContext;
  listInit(listContext, offsetContext);
  offsetInit(offsetContext);
  return (
    <CardWrapper>
      {list.map((value, i) => {
        return (
          <Card
            key={i}
            to={`/detail?token_id=${value.token_id}&contract=${value.asset_contract.address}`}
          >
            <CardImg src={value.image_url} />
            <CardName>{value.name}</CardName>
          </Card>
        );
      })}
    </CardWrapper>
  );
}
