const Content =({persons, remove})=>{
    return(
     <div>
       {persons.map(line=>
         <li className="numbers" key={line.id}>{line.name} {line.number} <button onClick={()=>remove(line.id)}>delete</button></li>
         )}
     </div>
    )
   }
   export default Content