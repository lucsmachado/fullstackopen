import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const countriesToShow = (search === '')
    ? countries
    : countries.filter(country => country.name.common.toUpperCase().includes(search.toUpperCase()));

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data);
      });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  
  return (
    <>
      <div>
        <label htmlFor="search">Find country:</label>
        <input type="search" name="search" value={search} onChange={handleChange} />
      </div>
      {(() => {
        if (countriesToShow.length > 10) {
          return <p>Too many matches, specify another filter</p>
        } else if (countriesToShow.length > 1) {
          return (
            countriesToShow.map(country =>
              <p key={country.cca2}>{country.name.common}</p>
            )
          );
        } else if (countriesToShow.length === 1) {
          return (
            <div>
              <h2>{countriesToShow[0].name.common}</h2>
              <p>
                capital: {countriesToShow[0].capital} <br />
                area: {countriesToShow[0].area / 1000} km²
              </p>
              <strong>languages:</strong>
              <ul>
                {Object.values(countriesToShow[0].languages).map(language =>
                  <li key={language}>{language}</li>
                )}
              </ul>
              <img height="150px" src={countriesToShow[0].flags.svg} alt={`${countriesToShow[0].demonyms.eng.m} flag`} />
            </div>
          );
        }
      })()}
    </>
  );
};

export default App;