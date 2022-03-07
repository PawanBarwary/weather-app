import axios from "axios";

const fetchJson = async (city) => {
  console.log("A request was made");
  const apiKey = "6b44ad2f92dfdbc0f51db9a51e9f80f2";
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    console.log(response.data);
    return { weather: response.data, name: response.data.name };
  }
  catch {
    return null;
  } 
};

export default fetchJson;