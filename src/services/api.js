import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
