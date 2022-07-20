import React, { useEffect, useState } from "react";
import toCelsius from "./Celsius";
import Loader from "./Loader";
import SearchBar from "./SearchBar";

import WeatherText from "./WeatherText";

function Component() {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("Kathmandu");
  const [isLoading, setLoading] = useState(true);
  const [feelsLike, setFeelsLike] = useState(0);
  const [data, setData] = useState();

  document.getElementById("title").innerHTML = `${city} ${toCelsius(
    feelsLike
  )} C`;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=54bdc9c78b75bbdd27b518bc53b7efa1`;

      const data = await axios.get(url);

      setData(data);
      setCity(data.data.name);
      setFeelsLike(data.data.main.feels_like);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    getData();
  }, [city]);

  const decider = () => {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <>
          <h1>Weather App</h1>
          <SearchBar
            city={city}
            setCity={setCity}
            data={data}
            input={input}
            setInput={setInput}
            setFeelsLike={setFeelsLike}
          />
          <WeatherText
            city={city}
            feelsLike={feelsLike}
            isLoading={isLoading}
            data={data}
          />
        </>
      );
    }
  };

  return decider();
}

export default Component;
