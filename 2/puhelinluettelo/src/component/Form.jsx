const Form=({sub,name,number,nameChange,numberChange})=>{
    return (
<form onSubmit={sub}>
        <div>
          name: <input 
          value={name}
          onChange={nameChange}
          />
        </div>
        <div>
          phone: <input 
          value={number}
          onChange={numberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
</form>
    )
}

export default Form