import Form from './components/Form';
import Weather from './components/Weather';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState("");
  const submitForm = (event) => {
    event.preventDefault();
    setCity(event.target[0].value);
  };

  return (
    <div className="App">
      <Form submitForm={submitForm} />
      <Weather city={city} />
    </div>
  );
}

export default App;
