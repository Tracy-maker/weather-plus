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
    const handleOnSearchChange = (searchData) => {
      const [lat, lon] = searchData.value.split(" ");
    
      Promise.all([fetchCurrentWeather(lat, lon), fetchForecast(lat, lon)])
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
    In this code:
    
    fetchCurrentWeather and fetchForecast are separate functions for fetching the current weather and forecast data, respectively. These functions handle the fetching and error handling logic, making the code more reusable and organized.
    In the handleOnSearchChange function, we use Promise.all to fetch both current weather and forecast data simultaneously.
    Once both responses are received, we update the state using the data obtained from the responses, if the responses are successful.
    Errors are caught and logged appropriately within the functions.
    This approach helps to encapsulate the fetching logic and error handling, making your code more maintainable and easier to understand.
    
    
    
    
    User
    const fetchCurrentWeather = async (lat, lon) => {
      try {
        const response = await fetch(
          `${OPEN_WEATHER_MAP_BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
        );
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    change to axios
    ChatGPT
    Certainly, here's how you can rewrite the fetchCurrentWeather function using axios instead of the fetch API:
    
    javascript
    Copy code
    import axios from 'axios';
    import { OPEN_WEATHER_MAP_BASE_URL, APP_ID } from '../../config';
    
    const fetchCurrentWeather = async (lat, lon) => {
      try {
        const response = await axios.get(
          `${OPEN_WEATHER_MAP_BASE_URL}/weather`,
          {
            params: {
              lat: lat,
              lon: lon,
              appid: APP_ID,
              units: 'metric'
            }
          }
        );
        if (!response.data) {
          throw new Error('Response data is empty');
        }
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    
    export default fetchCurrentWeather;
    In this code:
    
    We import axios at the beginning.
    The axios.get function is used to make the API request. We pass the URL as the first argument and use the params property to pass query parameters.
    The response data can be accessed using response.data.
    If the response data is not available or the request is not successful, an error is thrown.
    Errors are caught and logged, and the function returns null in case of errors.
    Make sure you have the axios library installed in your project (npm install axios) for this code to work.
    
    
    
    
    User
    const fetchForecast = async (lat, lon) => {
      try {
        const response = await fetch(
          `${OPEN_WEATHER_MAP_BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
        );
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      } catch (error) {
        console.error(error);
        return null;
      }}; change to axios
    ChatGPT
    Certainly, here's how you can rewrite the fetchForecast function using axios:
    
    javascript
    Copy code
    import axios from 'axios';
    import { OPEN_WEATHER_MAP_BASE_URL, APP_ID } from '../../config';
    
    const fetchForecast = async (lat, lon) => {
      try {
        const response = await axios.get(
          `${OPEN_WEATHER_MAP_BASE_URL}/forecast`,
          {
            params: {
              lat: lat,
              lon: lon,
              appid: APP_ID,
              units: 'metric'
            }
          }
        );
        if (!response.data) {
          throw new Error('Response data is empty');
        }
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    
    export default fetchForecast;
    In this code, the structure and logic are very similar to the fetchCurrentWeather function I provided earlier. The main difference is that we are using axios.get instead of the fetch API to make the API request.
    
    Just like before, make sure you have the axios library installed in your project (npm install axios) for this code to work.
    
    
    
    
    
    

  return (
    <div
      className="h-screen w-screen flex-col justify-center items-center bg-cover bg-no-repeat bg-center font-custom text-base"
      style={{ backgroundImage: `url(${p1})` }}
    >
      <div className="mx-auto w-9/12 pb-9 pt-5">
        <Search onSearchChange={handleOnSearchChange} loadOptions={getLoadOptions} />
      </div>
      <div className="mx-auto bg-white overflow-hidden w-fit rounded-xl shadow-md  text-white">
        {currentWeather && <Current data={currentWeather} />}
        <div className="mx-auto flex px-8 w-fit text-black">
         {forecast && <Forecast data={forecast}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
