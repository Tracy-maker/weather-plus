import React from 'react'

function Main() {
  return (
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
       <Navbar/>
        <div
          className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
          style={{ backgroundImage: `url(${p1})` }}
        >
          <div className="mx-auto w-9/12 pb-9 pt-5">
            <Search onSearchChange={handleOnSearchChange} />
          </div>
          <div className="mx-auto bg-white overflow-hidden w-fit rounded-xl shadow-md  text-white">
            {currentWeather && <Current data={currentWeather} />}
            <div className="mx-auto flex px-8 w-fit text-black">
              {forecast && <Forecast data={forecast} />}
            </div>
          </div>
        </div>
      </>
    );
  )
}

export default Main
