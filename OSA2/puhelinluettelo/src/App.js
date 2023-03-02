import { useState, useEffect } from 'react'
//import axios from 'axios'
//import { useState } from 'react'
//import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'
import personeService from './services/persons'
import './index.css'
import Notification from './components/Notification'
//import Button from './components/Button'

const App = () => {
  const [persons, setPersons] = useState([])
  /* const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])  */
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newCriteria, setNewCriteria] = useState('')
  const [message,setMessage]=useState(null)
  const [mStyle,setMStyle]=useState("success")
  useEffect(() => {
    console.log('effect_1')
    personeService
    .getAll()
      .then(InitialPersones => {
        console.log('promise 1 fulfilled')
        console.log('iinitial persones data:',InitialPersones.data)
        setPersons(InitialPersones.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,
      number:newNumber
    }
    //newPerson
    if (!isInPersonList({persons,newName})){ 
      personeService
      .create(personObject)
        .then(returnedPersone =>{
          console.log('returnedPersone',returnedPersone)
          setPersons(persons.concat(returnedPersone.data))  
          setMStyle("success")
          setMessage(`Added ${newName}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      /* axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
          }
        ) */
    } else 
    {
    if (window.confirm(`${newName} is already added to phonebook. Do you want to update ${newName} number?`)){
      const persone=persons.filter(persona=>(persona.name===newName))[0]
      console.log('p for put=',persone)
      const changedPersone = { ...persone, number: newNumber}
      console.log('changedPersone=',changedPersone)
      personeService
      .update(changedPersone.id,changedPersone)
      .then(returnedPersone =>{
        console.log('returnedPersone',returnedPersone)
        setPersons(persons.map(pitem => pitem.id !== changedPersone.id ? pitem : returnedPersone.data))  
        setMStyle("success")
          setMessage(`Person's ${newName} phone number is changed`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
      })
      .catch(error => {
        //https://fullstackopen.com/osa2/tyylien_lisaaminen_react_sovellukseen#tehtavat-2-16-2-17
        //tehtävän 2.17*: puhelinluettelo step12 lopussa teksti
        //HUOM: Vaikka käsittelet poikkeuksen koodissa, virheilmoitus tulostuu silti konsoliin.
        //Ja näin se tapahtuu. Consolille tulostuu
        //PUT http://localhost:3001/persons/19 404 (Not Found)
        setMStyle("error")
          setMessage(`${newName} is already deleted from server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        setPersons(persons.filter(p => p.id !== changedPersone.id))
      })
    }
  }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    //debugger
    const p=persons.filter(persona=>(persona.id===id))
    const dName=p[0].name
    if (window.confirm(`Do you want to delete ${dName}?`)){
    //const id=9
    //console.log('delete button is pressed')
      personeService
      .remove(id)
        .then(() =>{
          console.log('remove is here' ,id)
          setPersons(persons.filter(persona =>(!(persona.id === id))))
          setMStyle("success")
          setMessage(`${dName} is deleted from phonebook`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
  }
  const updatePersonNumber=(id,number)=>{
    const p=persons.filter(persona=>(persona.id===id))
    
    if (window.confirm(`Do you want to update ${p[0].name} number?`)){
      //p.number=number
      const changedPersone = { ...p, number: {number} }
      personeService
      .update(id,changedPersone)
      .then(returnedPersone =>{
        console.log('returnedPersone',returnedPersone)
        setPersons(persons.map(p => p.id !== id ? p : returnedPersone.data))  
      })
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleCriteriaChange=(event)=>{
    console.log(event.target.value)
    setNewCriteria(event.target.value)
  }
  const isInPersonList=({persons,newName})=>{
    //debugger
    const p=persons.map(item=>item.name)
    return(p.includes(newName))
  }
  const namesToShow =persons.filter(persona => persona.name.toLowerCase().includes(newCriteria))
  return (
    <div>
      <Notification message={message} style={mStyle}/>
      <h2>Phonebook</h2>
      <Filter newCriteria={newCriteria} handleCriteriaChange={handleCriteriaChange}/>
        {/* <div>filter shown with <input 
                  value={newCriteria} 
                  onChange={handleCriteriaChange}/></div> */}
      <h3>add a new</h3>
      <PersonForm 
          addPerson={addPerson} 
          newName={newName} 
          handlePersonChange={handlePersonChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
          />
      {/* <form  onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handlePersonChange}/>
        </div>
        <div>number: <input 
              value={newNumber} 
              onChange={handleNumberChange}/>
              </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form> */}
      <h2>Numbers</h2>
      <p>debug: {newName}</p>
      
      {/* <>
        {persons.map(person => 
          <Person key={person.name} person={person.name} number={person.number}/>
        )}
      </> */}
      <>
       {/*  {namesToShow.map(person => 
          <Person key={person.name} person={person.name} number={person.number}/>
        )} */}
        <PersonList namesToShow={namesToShow} deletePerson={deletePerson}/>
      </>
    </div>
    
  )

}

export default App