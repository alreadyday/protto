import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import LoadingModule from "../../Modules/Loading";
import { DetailContext, DetailInit } from "./Context";

const DetailWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const DetailImg = styled.img`
  height: 150px;
`;

// render detail
export default function DetailPage() {
  const detailContext = React.useContext(DetailContext);
  const { detail } = detailContext;
  const location = useLocation();

  detailContext.init(detailContext, location);

  if (!detail) {
    return <LoadingModule />;
  }

  return (
    <div>
      <Link to="/">
        &lt;&nbsp;
        {detail.collection.name}
      </Link>
      <DetailWrapper>
        <DetailImg src={detail.image_url} />
        <p>{detail.name}</p>
        <p>{detail.description}</p>
        <button onClick={() => (window.location = detail.permalink)}>
          Permalink
        </button>
      </DetailWrapper>
    </div>
  );
}
