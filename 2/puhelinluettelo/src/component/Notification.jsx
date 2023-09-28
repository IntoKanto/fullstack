const Notification =({ msg})=>{
    if(msg === null) {
        return null
    }
    return (
        <div className="addMsg">
            {msg}
        </div>
    )
}

export default Notification