import axios from "axios";
import fetchJson from "../requests/fetchJson";
import NewCard from "./NewCard";
import { useState, useEffect } from "react";

const WeatherGrid = (props) => {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const requests = props.cities.map((city) => fetchJson(city));
        const response = await axios.all(requests);
        setCityData(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    getData();
  }, [props.cities]);

  const getImage = (city) => {
    const mainWeather = city.main;
    switch (mainWeather) {
      case "Rain":
        return "rainy";
      case "Clear":
        return "clear";
      case "Clouds":
        return "cloudy";
      case "Snow":
        return "snowy";
      case "":
        return "error";
      default:
        return "";
    }
  };

  return (
    <div className="grid">
      {cityData.map((city, i) => {
        return (
          <div key={i} className={getImage(city) + " card"}>
            <div className="remove-container">
              <div
                className="remove-button"
                onClick={() => props.removeCard(city)}
              >
                X
              </div>
            </div>
            {!city.error &&
            <div>
              <h2> {city.name} </h2>
              <p>
                <b>Temperature</b> {city.temp + "°C"}
              </p>
              <p>
                <b>Wind</b> {city.wind + "m/s"}
              </p>
              <p>
                <b>Main</b> {city.main}
              </p>
            </div>}
            {city.error &&
            <h2>{city.error}</h2>
            }
          </div>
        );
      })}
      <NewCard click={props.click} submitForm={props.submitForm} />
    </div>
  );
};

export default WeatherGrid;
