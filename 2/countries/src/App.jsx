import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import Content from './components/Content'

// goes on stack
function App() {
  const [countries, setCountries] = useState([])
  const [hakuSana, setHakuSana] = useState('')
  const [country, setCountry] = useState([])
  const [weather, setWeather] = useState([])

  //console.log(countries)
  


  useEffect(()=> {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(res => {
        setCountries(res.data)
        console.log('Data received')
        //console.log(res.data)
      })
  },[])

 

  const showCountries = hakuSana === '' ? [] : countries.filter(n=> n.name.common.startsWith(hakuSana))

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
