import styled from "styled-components";

import { darken } from "polished";

import { Link } from "react-router-dom";

import { ArrowBack } from "styled-icons/material-outlined";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

export const Return = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--primary);
  transition: color 0.2s;

  &:hover {
    color: ${darken(0.05, "#335DFF")};
  }

  span {
    margin-left: 10px;
    font-size: 15px;
  }
`;

export const ReturnIcon = styled(ArrowBack)`
  width: 15px;
  height: 15px;
`;
