const Weather = ({ data }) => {
  return (
    <>
      <p>temperature: {data.main.temp} °C</p>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
      <p>wind: {data.wind.speed} m/s</p>
    </>
  );
};

export default Weather;