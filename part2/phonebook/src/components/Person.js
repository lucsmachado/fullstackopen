const Person = ({ person, handleClick }) => {
  return (
    <p>{person.name} {person.tel} <button onClick={handleClick}>delete</button></p>
  );
};

export default Person;