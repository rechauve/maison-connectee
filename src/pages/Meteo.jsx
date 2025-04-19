import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const cities = ["Laruscade", "Mimizan"];
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const Meteo = () => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = {};

      for (const city of cities) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fr&appid=${API_KEY}`
        );
        const json = await response.json();
        data[city] = json;
      }

      setWeatherData(data);
      setLoading(false);
    };

    fetchWeather();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Prévisions météo</h1>

      {cities.map((city) => {
        const weather = weatherData[city];
        if (!weather || !weather.list) return null;

        const dailyForecast = weather.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );

        return (
          <div key={city} className="bg-gradient-to-br from-blue-100 to-blue-300 p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-bold text-blue-800 mb-4">{city}</h2>
            <div className="flex overflow-x-auto space-x-4">
              {dailyForecast.map((item, index) => (
                <div key={index} className="bg-white shadow rounded p-4 w-40 flex-shrink-0 text-center">
                  <p className="font-semibold">{new Date(item.dt_txt).toLocaleDateString()}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={item.weather[0].description}
                    className="mx-auto"
                  />
                  <p className="capitalize text-gray-700">{item.weather[0].description}</p>
                  <p className="text-lg font-bold">{Math.round(item.main.temp)}°C</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meteo;

