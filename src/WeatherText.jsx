import React, { useState } from "react";
import { validateLocaleAndSetLanguage } from "typescript";
import toCelsius from "./Celsius";
import Loader from "./Loader";

function WeatherText(props) {
  const validate = () => {
    if (!props.data.data) {
      return <h1>Invalid</h1>;
    } else {
      return (
        <>
          <h1>{props.city}</h1>
          <h1>{toCelsius(props.feelsLike)} C</h1>
        </>
      );
    }
  };
  return validate();
}

export default WeatherText;
