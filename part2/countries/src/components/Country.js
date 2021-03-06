import axios from 'axios';
import { useEffect, useState } from 'react';
import Weather from './Weather';

const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&units=metric&appid=${process.env.REACT_APP_API_KEY_OPEN_WEATHER}`)
      .then(response => {
        setWeather(response.data);
      });
  }, [country]);

  return (
    <>
      <h2>{country.name.common}</h2>
      <p>
        capital: {country.capital} <br />
        area: {(country.area / 1000).toLocaleString('en')} km² <br />
        population: {country.population.toLocaleString('en')}
      </p>
      <strong>languages:</strong>
      <ul>
        {Object.values(country.languages).map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
      <img height="150px" src={country.flags.svg} alt={`${country.demonyms.eng.m} flag`} />
      <h3>Weather in {country.capital}</h3>
      {weather && <Weather data={weather} />}
    </>
  );
};

export default Country;