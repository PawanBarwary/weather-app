import WeatherGrid from "./components/WeatherGrid";
import { useState } from "react";

function App() {
  const [cities, setCities] = useState([
    "New York",
    "London",
    "Paris",
    "Beijing",
    "Tokyo",
  ]);
  const submitForm = (event) => {
    event.preventDefault();
    setCities([...cities, event.target[0].value]);
    event.target.reset();
  };

  const removeCard = (city) => {
    console.log("before", cities);
    console.log("city name", city.name);
    const newCities = cities.filter((c) => c !== city.name);
    setCities([...newCities]);
    console.log("after", cities);
  };

  return (
    <div className="app">
      <h1>Follow the Weather</h1>
      <WeatherGrid
        cities={cities}
        submitForm={submitForm}
        removeCard={removeCard}
      />
    </div>
  );
}

export default App;
