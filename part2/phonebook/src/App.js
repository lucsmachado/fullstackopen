import { useEffect, useState } from 'react';
import axios from 'axios';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

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
      <PersonForm 
        onSubmit={handleSubmit}
        nameValue={newName}
        onNameChange={handleNewNameChange}
        telValue={newTel}
        onTelChange={handleNewTelChange}
      />
      <h2>Numbers</h2>
      <Filter value={searchName} onChange={handleSearchNameChange} />
      <Persons persons={personsToShow} />
    </>
  );
};

export default App;