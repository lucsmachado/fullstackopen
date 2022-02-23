import { useState } from "react";

const Heading = ({ title }) => <h1>{title}</h1>;

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

const Feedback = ({ text, number }) => <p>{text} {number}</p>;

const Statistics = ({ data }) => {
  if (data.good + data.neutral + data.bad === 0) {
    return(
      <p>No feedback given</p>
    );
  }
  return (
    <>
      <Feedback text='good' number={data.good} />
      <Feedback text='neutral' number={data.neutral} />
      <Feedback text='bad' number={data.bad} />
      <Feedback text='all' number={data.good + data.neutral + data.bad} />
      <Feedback text='average' number={(data.good - data.bad) / (data.good + data.neutral + data.bad)} />
      <Feedback text='positive' number={(data.good / (data.good + data.neutral + data.bad) * 100) + ' %'} />
    </>
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
