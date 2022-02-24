import { useState } from "react";

const Heading = ({ text }) => <h1>{text}</h1>;

const Anecdote = ({ text, votes }) => {
  return(
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return(
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];
  
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const selectRandom = (array) => () => setSelected(getRandomInt(array.length));

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected]++;
    setVotes(updatedVotes);
  };

  return (
    <>
      <Heading text='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={handleVote} text='vote' />
      <Button onClick={selectRandom(anecdotes)} text='next anecdote' />
      <Heading text='Anecdote with most votes' />
      <Anecdote text={anecdotes[votes.indexOf(Math.max(...votes))]} votes={votes[votes.indexOf(Math.max(...votes))]} />
    </>
  );
};

export default App;