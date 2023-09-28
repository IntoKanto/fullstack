const Filter =({filter, filterNames})=> {
    return(
    <div>
     filter shown by name: <input value={filter} onChange={filterNames}/>
     </div>
    )
   }
export default Filter