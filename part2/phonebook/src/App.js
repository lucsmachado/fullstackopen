import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Lucas Machado'
    }
  ]);
  const [newName, setNewName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName
    };
    setPersons(persons.concat(newPerson));
    setNewName('');
  };
  
  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };
  
  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: 
          <input required 
            type="text" 
            value={newName} 
            onChange={handleNewNameChange} 
          />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name}</p>)}
    </>
  );
};

export default App;