import React from 'react';
import { useState } from 'react';
import Buscador from '../Buscador';
import Card from '../Card';

const apiKey = "0a372ed8be80765f7eebb9afe07cc239";

const Index = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState(false);
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState([]);

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    // Weather
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${loc}`;
    const weatherResponse = await fetch(weatherURL);
    try {
      if (!weatherResponse.ok) throw await weatherResponse.json();
      const weatherData = await weatherResponse.json();
      console.log(weatherData);
      setWeather(weatherData);
    } catch (error) {
      console.log(error);
    }

    // Forecast
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&lang=es&q=${loc}`;
    const forecastResponse = await fetch(forecastURL);
    try {
      if (!forecastResponse.ok) throw await forecastResponse.json();
      const forecastData = await forecastResponse.json();
      console.log(forecastData);
      setForecast(forecastData);
      setLoading(false);
      setCard(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setCard(false);
    }
  };

  return (
    <>
      <Buscador newLocation={getLocation} />
      <Card weather={weather} showCard={card} loadingData={loading} forecast={forecast} />
    </>
  );
};

export default Index;

