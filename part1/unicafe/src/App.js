import { useState } from "react";

const Heading = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ data }) => {
  if (data.good + data.neutral + data.bad === 0) {
    return(
      <p>No feedback given</p>
    );
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={data.good} />
        <StatisticLine text='neutral' value={data.neutral} />
        <StatisticLine text='bad' value={data.bad} />
        <StatisticLine text='all' value={data.good + data.neutral + data.bad} />
        <StatisticLine text='average' value={(data.good - data.bad) / (data.good + data.neutral + data.bad)} />
        <StatisticLine text='positive' value={(data.good / (data.good + data.neutral + data.bad) * 100) + ' %'} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addOne = (state, setter) => () => setter(state + 1);
    
  return (
    <div>
      <Heading title='give feedback' />
      <Button onClick={addOne(good, setGood)} text='good' />
      <Button onClick={addOne(neutral, setNeutral)} text='neutral' />
      <Button onClick={addOne(bad, setBad)} text='bad' />
      <Heading title='statistics' />
      <Statistics data={{good, neutral, bad}} />
    </div>
  );
};

export default App;
