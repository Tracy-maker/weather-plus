import React, { useState } from "react";
import Search from "../../app/Search/Search";
import Current from "../../app/Current/Current";
import Forecast from "../../app/Forecast/Forecast";
import p1 from "../../assets/background1.jpg";
import getDailyForecast from "../../utils/getDailyForecast/getDailyForecast";
import getCurrentWeather from "../../utils/getWeather/getCurrentWeather";
import Navbar from "../../app/Navbar/Navbar";
import Typewriter from "typewriter-effect";

const Main = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    Promise.all([getCurrentWeather(lat, lon), getDailyForecast(lat, lon)])
      .then(([currentWeatherResponse, forecastResponse]) => {
        if (currentWeatherResponse && forecastResponse) {
          setCurrentWeather({
            city: searchData.label,
            ...currentWeatherResponse,
          });
          setForecast({ city: searchData.label, ...forecastResponse });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div
        className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
        style={{ backgroundImage: `url(${p1})` }}
      >
        <div className="mx-auto w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 pb-9 pt-5">
          <Search onSearchChange={handleOnSearchChange} />
        </div>

        <div className="text-2xl text-white font-custom pt-16 px-96">
          <Typewriter
            options={{
              strings: ["Welcome to our whimsical weather wonderland!"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="mx-auto bg-white overflow-hidden w-full sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-7/12 rounded-xl shadow-md text-white">
          {currentWeather && <Current data={currentWeather} />}
          <div className="mx-auto flex px-8 sm:px-12 lg:px-16 xl:px-20 w-auto text-black">
            {forecast && <Forecast data={forecast} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
