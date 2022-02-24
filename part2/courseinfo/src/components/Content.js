import Part from './Part';
import Total from './Total';

const Content = ({ parts }) => {
  const sumExercises = (parts) => parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      {parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
      <Total sum={sumExercises(parts)} />
    </>
  );
};

export default Content;