import React from "react";
import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "./Loading.svg";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function LoadingModule() {
  return (
    <LoadingWrapper>
      <LoadingIcon />
    </LoadingWrapper>
  );
}
