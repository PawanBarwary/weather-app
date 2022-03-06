import { useEffect, useState } from 'react';

const Weather = (props) => {

    const apiKey = "949fa4981b2a1325e443ec491478f11a";
    const [weatherData, setWeatherData] = useState("");

    useEffect(async () => {
        if(props.city == "") return ;
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            setWeatherData(data.main.temp);
        }
        catch {
            setWeatherData("Could not retrieve your request");
        }
        
    }, [props.city]);

    return (
        <div>{weatherData}</div>
    )
};

export default Weather;