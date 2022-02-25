import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Lucas Machado',
      tel: '+55 (12) 3456-7890'
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name.localeCompare(newName, undefined, { sensitivity: 'accent' }) === 0)) {
      alert(`${newName} is already on the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        tel: newTel
      };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewTel('');
    }
  };
  
  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewTelChange = (event) => {
    setNewTel(event.target.value);
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
          number:
          <input required
            type="tel"
            value={newTel}  
            onChange={handleNewTelChange}
          />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.name}>{person.name} {person.tel}</p>)}
    </>
  );
};

export default App;