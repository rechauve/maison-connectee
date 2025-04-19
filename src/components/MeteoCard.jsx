import { useEffect, useState } from "react";

const MeteoCard = ({ city }) => {
  const [weather, setWeather] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fr&appid=${apiKey}`
        );
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Erreur météo :", err);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (!weather || weather.cod !== "200") return <div>Chargement météo pour {city}...</div>;

  const today = weather.list[0];

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-64">
      <h2 className="text-xl font-semibold mb-2">{weather.city.name}</h2>
      <div className="flex items-center space-x-4">
        <img
          src={`https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`}
          alt={today.weather[0].description}
        />
        <div>
          <p className="text-lg font-medium">{Math.round(today.main.temp)}°C</p>
          <p className="text-sm text-gray-600">{today.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default MeteoCard;
