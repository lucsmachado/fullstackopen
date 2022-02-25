import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
       name: 'Arto Hellas', 
       tel: '040-123456', 
       id: 1
    },
    {
       name: 'Ada Lovelace', 
       tel: '39-44-5323523', 
       id: 2 
    },
    {
       name: 'Dan Abramov', 
       tel: '12-43-234345', 
       id: 3 
    },
    {
       name: 'Mary Poppendieck', 
       tel: '39-23-6423122', 
       id: 4 
    },
    {
      name: 'Lucas Machado',
      tel: '+55 (12) 3456-7890',
      id: 5
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [searchName, setSearchName] = useState('');

  const personsToShow = (searchName === '')
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(searchName.toUpperCase()));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name.localeCompare(newName, undefined, { sensitivity: 'accent' }) === 0)) {
      alert(`${newName} is already on the phonebook`);
    } else {
      const newPerson = {
        name: newName,
        tel: newTel,
        id: persons.length + 1
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

  const handleSearchNameChange = (event) => {
    setSearchName(event.target.value);
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
      <div>
        filter by name:
        <input type="text" value={searchName} onChange={handleSearchNameChange} />
      </div>
      {personsToShow.map(person => <p key={person.id}>{person.name} {person.tel}</p>)}
    </>
  );
};

export default App;