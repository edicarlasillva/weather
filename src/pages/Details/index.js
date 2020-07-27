import React from "react";
import { useSelector } from "react-redux";

import Footer from "../../components/Footer";

import { Container, DetailsWeather, MainInfo, TemperatureInfo } from "./styles";

function Details() {
  const details = useSelector((state) => state.forecast.data.id);
  return (
    <Container>
      <DetailsWeather>
        <MainInfo>
          <img src="" alt="" />
          <strong>{details.main.temp}º</strong>

          <TemperatureInfo>
            <strong>{details.name}</strong>
            <span>Chuva</span>
          </TemperatureInfo>
        </MainInfo>
        <ul>
          <li>
            <strong>Temperature Min/Max</strong>
            <span>22º/22º</span>
          </li>

          <li>
            <strong>Humidity</strong>
            <span>22</span>
          </li>

          <li>
            <strong>Pressure</strong>
            <span>22</span>
          </li>
        </ul>
      </DetailsWeather>
      <Footer />
    </Container>
  );
}

export default Details;
