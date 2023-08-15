import { useState } from "react";
import Current from "./app/Current/Current";
import Forecast from "./app/Forecast/Forecast";
import Search from "./app/Search/Search";
import p1 from "./assets/background1.jpg";
import { APP_ID, OPEN_WEATHER_MAP_BASE_URL } from "./config";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `${OPEN_WEATHER_MAP_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
    );
    const forecastFetch = fetch(
      `${OPEN_WEATHER_MAP_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div
      className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div className="mx-auto w-9/12 pb-9 pt-5">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      <div className="mx-auto bg-white overflow-hidden w-2/3 rounded-xl shadow-md  text-white">
        {currentWeather && <Current data={currentWeather} />}
        <div className="mx-auto flex px-5 py- text-black">
         {forecast && <Forecast data={forecast}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
