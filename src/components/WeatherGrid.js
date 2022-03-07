import axios from "axios";
import fetchJson from "../requests/fetchJson";
import NewCard from "./NewCard";
import { useState, useEffect } from 'react';
import { clear } from "@testing-library/user-event/dist/clear";

const WeatherGrid = (props) => {

  const [cityData, setCityData] = useState([]);

  useEffect(()=> {
    const requests = props.cities.map(city => fetchJson(city));
    axios.all(requests).then(response => {
    setCityData(response);
  });
  }, [props.cities])

  const getImage = (city) => {
    const mainWeather = city.weather.weather[0].main;
    switch(mainWeather) {
      case 'Rain':
        return 'rainy';
      case 'Clear':
        return 'clear';
      case 'Clouds':
        return 'cloudy'
    }
  }

  return (
    <div className="grid">
      {
        cityData.map(city => {
          return (
            <div key={city.name} className={ getImage(city) + " card" } > 
              <h2> {city.name} </h2>  
              <p> <b>Temperature</b> {city.weather.main.temp + "°C"} </p>
              <p> <b>Wind</b> {city.weather.wind.speed + "m/s"} </p>
            </div>)
        })
      }
      <NewCard click={ props.click } submitForm={ props.submitForm }  />
    </div>
  )
};

export default WeatherGrid;
   
