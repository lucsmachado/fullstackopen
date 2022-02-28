const Weather = ({ data }) => {
  return (
    <>
      <h3>Weather in {data.name}</h3>
      <p>temperature: {data.main.temp} °C</p>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
      <p>wind: {data.wind.speed} m/s</p>
    </>
  );
};

export default Weather;