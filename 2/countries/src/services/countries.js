import axios from "axios";
const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const apiKey = 'e802bbe16aa652df6c3a66d5dd125c3b'

const getAll =()=>{
    const request = axios.get(url)
    return request.then(response => response.data)
}

const getWeather =(lat, long)=>{
    const request = axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${apiKey}`)
    return request.then(response => response.data)
}


export default { getAll ,getWeather }
