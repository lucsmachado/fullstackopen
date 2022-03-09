import { useEffect, useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [searchName, setSearchName] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [operationSuccess, setOperationSuccess] = useState(true);

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

  const displayTemporaryMessage = (message, timer) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage(null);
    }, timer);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name.localeCompare(newName, undefined, { sensitivity: 'base' }) === 0)) {
      //alert(`${newName} is already on the phonebook`);
      if (window.confirm(`${newName} is already on the phonebook.\nReplace the old number with a new one?`)) {
        const currentPerson = persons.find(person => person.name === newName);
        const replacementPerson = { ...currentPerson, number: newTel };
        
        personService
          .update(currentPerson.id, replacementPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person));
            setNewName('');
            setNewTel('');
            setOperationSuccess(true);
            displayTemporaryMessage(`Changed ${updatedPerson.name}'s phone number to ${updatedPerson.number}`, 5000);
          })
          .catch(error => {
            console.error(error);
            setOperationSuccess(false);
            displayTemporaryMessage(`Unable to update number: ${newName} has already been deleted from the phonebook`, 5000);
            setPersons(persons.filter(person => person.name !== newName));
          });
      }
      return;
    }
  
    const newPerson = {
      name: newName,
      number: newTel
    };

    personService
      .create(newPerson)
      .then(createdPerson => {
        setPersons(persons.concat(createdPerson));
        setNewName('');
        setNewTel('');
        setOperationSuccess(true);
        displayTemporaryMessage(`Added ${createdPerson.name} to the phonebook`, 5000);
      })
      .catch(error => {
        setOperationSuccess(false);
        displayTemporaryMessage(error.response.data.error, 5000);
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

  const handlePersonDelete = (id) => () => {
    const personToDelete = persons.find(person => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name} from the phonebook?`)) {
      personService
        .del(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error(error);
          setOperationSuccess(false);
          displayTemporaryMessage(`Unable to delete number: ${personToDelete.name} has already been deleted from the phonebook`, 5000);
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  };
  
  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} success={operationSuccess} />
      <PersonForm 
        onSubmit={handleSubmit}
        nameValue={newName}
        onNameChange={handleNewNameChange}
        telValue={newTel}
        onTelChange={handleNewTelChange}
      />
      <h2>Numbers</h2>
      <Filter value={searchName} onChange={handleSearchNameChange} />
      <Persons persons={personsToShow} onPersonDelete={handlePersonDelete} />
    </>
  );
};

export default App;