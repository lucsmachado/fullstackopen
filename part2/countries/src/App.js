import axios from 'axios';
import { useEffect, useState } from 'react';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    setCountriesToShow((search === '')
      ? countries
      : countries.filter(country => country.name.common.toUpperCase().includes(search.toUpperCase()))
    );
  }, [countries, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleClick = (country) => () => {
    setCountriesToShow([country]);
  };
  
  return (
    <>
      <div>
        <label htmlFor="search">Find country:</label>
        <input type="search" name="search" value={search} onChange={handleChange} />
      </div>
      {(() => {
        if (countriesToShow.length > 10) {
          return <p>Too many matches, specify another filter</p>;
        } else if (countriesToShow.length > 1) {
          return (
            countriesToShow.map(country =>
              <p key={country.cca2}>
                {country.name.common}
                <button onClick={handleClick(country)}>show</button>
              </p>
            )
          );
        } else if (countriesToShow.length === 1) {
          return (
            <>
              <Country country={countriesToShow[0]} />
            </>
          );
        }
      })()}
    </>
  );
};

export default App;