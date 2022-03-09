import axios from "axios";

const fetchJson = async (city) => {
  const apiKey = "6b44ad2f92dfdbc0f51db9a51e9f80f2";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    console.log(response);
    return {
      name: response.data.name,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      main: response.data.weather[0].main,
    };
  } catch (err) {
    return {
      name: "Error 404: Did you type in a valid city?",
      temp: "",
      wind: "",
      main: "",
    };
  }
};

export default fetchJson;
