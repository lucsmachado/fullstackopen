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
      <Feedback text='good' number={good} />
      <Feedback text='neutral' number={neutral} />
      <Feedback text='bad' number={bad} />
      <Feedback text='all' number={good + neutral + bad} />
      <Feedback text='average' number={(good - bad) / (good + neutral + bad)} />
      <Feedback text='positive' number={(good / (good + neutral + bad) * 100) + ' %'} />
    </div>
  );
};

export default App;
