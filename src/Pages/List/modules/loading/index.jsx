import React from "react";
import styled from "styled-components";
import { LoadingIconContext } from "./Context";
import { ReactComponent as LoadingIcon } from "./Loading.svg";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LoadingModule() {
  const { loading } = React.useContext(LoadingIconContext);
  return (
    loading && (
      <LoadingWrapper>
        <LoadingIcon />
      </LoadingWrapper>
    )
  );
}
