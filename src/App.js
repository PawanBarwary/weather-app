import Form from './components/Form';
import WeatherGrid from './components/WeatherGrid';
import { useState } from 'react';


function App() {

  const [cities, setCities] = useState(['New York', 'London', 'Paris', 'Beijing', 'Tokyo']);
  
  const submitForm = (event) => {
    event.preventDefault();
    setCities([...cities, event.target[0].value]);
    console.log(cities);
  };

  const [hideForm, setHideForm] = useState(true);

  const handleClick = () => {
    console.log("I was clicked")
    setHideForm(!hideForm);
  };

  return (
    <div className="app">
      <h1>Get Weather Data</h1>
      <Form submitForm={ submitForm } show={ hideForm } />
      <WeatherGrid click={ handleClick } cities= { cities } />
    </div>
  );
}

export default App;
