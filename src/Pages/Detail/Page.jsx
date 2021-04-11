import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DetailContext, DetailInit } from "./Context";

export const DetailWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const DetailImg = styled.img`
  height: 300px;
`;

export default function DetailPage() {
  const detailContext = React.useContext(DetailContext);
  const { detail } = detailContext;
  const location = useLocation();

  DetailInit(detailContext, location);

  return (
    detail && (
      <div>
        <Link to="/">
          &lt;&nbsp;
          {detail.collection.name}
        </Link>
        <DetailWrapper>
          <DetailImg src={detail.image_url} />
          <p>{detail.name}</p>
          <p>{detail.description}</p>
        </DetailWrapper>
      </div>
    )
  );
}
