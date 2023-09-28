import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll =()=> {
   const request = axios
   .get(baseUrl)
   return request.then(res=> res.data)
   
   
}

const create =(obj)=>{
    const request = axios
    .post(baseUrl, obj)
    return request.then(response => response.data)
}

const update = (id, newObject)=>{
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)

}

const remove =(id)=>{
    const request = axios
    .delete(`${baseUrl}/${id}`)
    return request.then(request => console.log('Deleted', request))
}

export default { getAll, create, remove, update }