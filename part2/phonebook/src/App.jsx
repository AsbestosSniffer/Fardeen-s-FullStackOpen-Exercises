import { useState } from 'react'

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <p>
      filter shown with <input 
        value={filter}
        onChange={handleFilterChange}
      />
    </p>
  )
}

const PersonForm = ({ 
  addNumber,
  newName, 
  handleNameChange, 
  newNumber,
  handleNumberChange
}) => {
  return (
    <form onSubmit={addNumber}>
      <div>
        name: <input 
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input 
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Person = ({ person }) => {
  const { name, number } = person
  return (
    <p>{name} {number}</p>
  )
}

const Persons = ({ persons }) => {
  return (
    persons.map(person => <Person key={person.name} person={person}/>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const alreadyExists = (newNameAttempt) => 
  persons.reduce((exists, person) => exists || person.name === newNameAttempt, false )

  const addNumber = (event) => {
    event.preventDefault()
    if (alreadyExists(newName)) {
      window.alert(`${newName} is already added to phonebook`)
      return 
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setFilter(event.target.value)
  
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter} 
        handleFilterChange={handleFilterChange} 
      />
      <h2>add a new</h2>
      <PersonForm 
        addNumber={addNumber}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App