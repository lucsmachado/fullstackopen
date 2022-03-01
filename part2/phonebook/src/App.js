import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    personService
      .readAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const personsToShow = (searchName === '')
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(searchName.toUpperCase()));

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.localeCompare(newName, undefined, { sensitivity: 'accent' }) === 0)) {
      alert(`${newName} is already on the phonebook`);
      return;
    }
  
    const newPerson = {
      name: newName,
      tel: newTel
    };

    personService
      .create(newPerson)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson));
        setNewName('');
        setNewTel('');
      })
      .catch(error => {
        console.error(error);
      });
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