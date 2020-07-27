import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

import { Container, Return, ReturnIcon } from "./styles";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Weather APP" />
      </Link>

      <Return to="/">
        <ReturnIcon />
        <span>Voltar</span>
      </Return>
    </Container>
  );
};

export default Header;
