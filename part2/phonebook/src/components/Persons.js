import Person from './Person';

const Persons = ({ persons, onPersonDelete }) => {
  return (
    <>
      {persons.map(person => 
        <Person key={person.id} person={person} handleClick={onPersonDelete(person.id)} />
      )}
    </>
  );
};

export default Persons;