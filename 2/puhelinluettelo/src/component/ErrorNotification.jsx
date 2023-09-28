const ErrorNotification =({msg})=>{
    if(msg === null) {
        return null
    }
    return(
        <div className="errorMsg">
            {msg}
        </div>
    )
}

export default ErrorNotification