import { useEffect, useState } from 'react'
import countryService from './services/countries'

import Content from './components/Content'

// goes on stack
function App() {
  const [countries, setCountries] = useState([])
  const [hakuSana, setHakuSana] = useState('')
  const [country, setCountry] = useState([])
  const [weather, setWeather] = useState([])

  console.log(countries)
  


  useEffect(()=> {
    countryService
      .getAll()
      .then(loaded => {
          setCountries(loaded)
          console.log('Data received', countries)
        
      })
     
  },[])

 

  const showCountries = hakuSana === '' ? [] : countries.filter(n=> n.name.common.toLowerCase().startsWith(hakuSana.toLowerCase()))

  const handleInput=(e)=>{
    setHakuSana(e.target.value)   
  }
  //console.log(show)
  //console.log(hakuSana) 
 
 const clicking = (cca2) => {
  const tunnus = countries.find(n => n.cca2 === cca2)
  console.log(`Klikattu ${tunnus.cca2}`)
  setHakuSana(tunnus.name.common)
  
  

  //console.log(tunnus)
  //console.log(typeof tunnus)
  
 }
  


  return (
   <div>
    Find countries
    <input onChange={handleInput}></input>
    <Content countries={showCountries} clicking={clicking}/>
   </div>
  )
}

export default App
