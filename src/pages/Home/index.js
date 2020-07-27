import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import history from "../../services/history";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

import {
  addCardRequest,
  removeCard,
  loadDetails,
} from "../../store/modules/forecast/actions";

import {
  Container,
  SearchField,
  SearchIcon,
  WeatherList,
  TemperatureInfo,
  RemoveIcon,
} from "./styles";

const Home = () => {
  const [city, setCity] = useState("");

  const cards = useSelector((state) => state.forecast.data);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCardRequest(city));
    setCity("");
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Container>
        <div className="hero">
          <h1>Explore weather</h1>
          <h2>Several cities in the world</h2>
        </div>
        <SearchField>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleInputChange}
              value={city}
              type="text"
              name="city"
              id="city"
              placeholder="Enter the name of a city"
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </form>
        </SearchField>
        <WeatherList>
          {cards.map((card) => (
            <li key={card.id}>
              <img
                src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`}
                alt=""
              />

              <strong>{Math.round(card.main.temp)}°</strong>
              <TemperatureInfo>
                <strong>{card.name}</strong>
                <span>{card.weather[0].description}</span>
              </TemperatureInfo>

              <button
                type="button"
                onClick={() => dispatch(removeCard(card.id))}
              >
                <RemoveIcon />
              </button>
            </li>
          ))}
        </WeatherList>
        <Footer />
      </Container>
    </>
  );
};

export default Home;
