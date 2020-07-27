import styled from "styled-components";

import { darken } from "polished";

import { Search, Delete } from "styled-icons/material-outlined";

export const Container = styled.div`
  text-align: center;

  .hero {
    margin: 81px 0;

    h1 {
      font-weight: 900;
      font-size: 52px;
      line-height: 62px;
      margin-bottom: 23px;
    }

    h2 {
      font-family: "Noto Sans", sans-serif;
      font-weight: 400;
      font-size: 30px;
      line-height: 41px;
      color: var(--text);
    }
  }
`;

export const SearchField = styled.div`
  display: flex;
  min-width: 550px;
  max-width: 100%;

  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 35px rgba(197, 198, 199, 0.25);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 17px;

  form {
    display: flex;
    align-items: center;

    width: 100%;

    > input {
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      color: var(--text);
      padding-left: 10px;

      &::placeholder {
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: var(--text);
      }
    }

    > button {
      background-color: var(--primary);
      border-radius: 3px;
      width: 46px;
      height: 46px;
      padding: 12px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${darken(0.05, "#335DFF")};
      }
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  color: var(--white);
`;

export const WeatherList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    position: relative;

    display: flex;
    align-items: center;

    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(197, 198, 199, 0.25);
    border: 2px solid transparent;
    border-radius: 3px;

    padding: 20px 30px;
    margin-bottom: 17px;

    cursor: pointer;

    transition: border 0.2s;

    > strong {
      font-weight: 600;
      font-size: 32px;
      line-height: 62px;
      color: var(--primary);

      padding: 0 25px;
      margin-left: 25px;
      border-left: 2px solid var(--background);
    }

    &:hover {
      border: 2px solid var(--primary);
    }

    > button {
      position: absolute;
      right: 20px;
      top: 20px;

      width: 20px;
      height: 20px;

      color: var(--primary);
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const TemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > strong {
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-transform: capitalize;
    color: var(--title);
  }

  > span {
    font-size: 16px;
    line-height: 26px;
    text-transform: capitalize;
    color: var(--text);
  }
`;

export const RemoveIcon = styled(Delete)`
  width: 24px;
  height: 24px;
`;
