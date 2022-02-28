const Country = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>
        capital: {country.capital} <br />
        area: {country.area / 1000} km²
      </p>
      <strong>languages:</strong>
      <ul>
        {Object.values(country.languages).map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
      <img height="150px" src={country.flags.svg} alt={`${country.demonyms.eng.m} flag`} />
    </>
  );
};

export default Country;