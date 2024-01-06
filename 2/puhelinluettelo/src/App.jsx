import { useState, useEffect } from 'react'
import axios from 'axios'
import Content from './component/Content'
import Filter from './component/Filter'
import Form from './component/Form'
import personService from './services/persons'
import Notification from './component/Notification'
import ErrorNotification from './component/ErrorNotification'




const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [all, setAll] = useState(true)
  const [msg, setMsg] = useState(null)
  const [emsg, setEmsg] = useState(null)
  

  
  useEffect(()=> {
   personService
    .getAll()
    .then(haettavat => 
      setPersons(haettavat)
      )
    
  },[])
  

  const addName =(event)=>{
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber
    }

    const personData = persons.find((pers) => pers.name === newName)

    if(personData) {
      const pid = personData.id
      const changedData = {...personData, number: person.number}
      if (confirm(`${person.name} is already added to phonebook, replace the old number with a new one? `)) 
        personService
        .update(pid, changedData)
        .then(haettavat => {
          setPersons(persons.map(line => line.id !== pid ? line : haettavat))
          setNewName('')
          setNewNumber('')
          setMsg(`Information of ${haettavat.name} updated suceffuly`)
          setTimeout(() =>{
            setMsg(null)
          }, 5000)
      
        })
        
      
    } else {
      personService
        .create(person)
        .then(haettavat => {
          //console.log(haettavat)
          setPersons(persons.concat(haettavat))
          setNewName('')
          setNewNumber('')
          setMsg(
            `Added ${person.name}`
          )  
          setTimeout(() => {
            setMsg(null)
          }, 5000)
        })
        .catch(error => {
          setEmsg(error.response.data.error)
          setTimeout(()=> {
            setEmsg(null)
          }, 5000)
        })
    }
   } 

  const handleNameChange=(event)=>{
    //console.log(event.target.value) 
    setNewName(event.target.value)
  } 
  const handleNumber =(event)=>{
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const filterNames =(event)=>{
    //console.log(event.target.value)
    setFilter(event.target.value)
    setAll(false)
  }

  const show = all ? persons : persons.filter(line=> line.name.toLowerCase().startsWith(filter.toLowerCase()))

  //console.log(show)
  const remove =(id)=> {
    const person = persons.find((n)=> n.id === id)
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(n => n.id !== id))
        setMsg(`Information of ${person.name} has deleted sucefully`)
        setTimeout(()=> {
          setMsg(null)
        }, 5000)
      }
      )
      .catch(() => {
        setEmsg(`Information of ${person.name} has already deleted!`)
        setPersons(persons.filter(line => line.id !== id))
        setTimeout(()=> {
          setEmsg(null)
        },5000)
    })
      
      
  }

  return (
    <div>
      <h1 >Phonebook</h1>
      <Notification msg={msg}/>
      <ErrorNotification msg={emsg}/> 
     <Filter filter={filter} filterNames={filterNames}/>
      <h3>Add new</h3>
      <Form sub={addName} name={newName} number={newNumber} nameChange={handleNameChange} numberChange={handleNumber} /> 
      <h3>Numbers</h3>
      <Content persons={show} remove={remove}/>
    </div>
  )

}

export default App