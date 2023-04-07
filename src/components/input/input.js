


function Input({type, placeholder, id}){
    return( <>
        <input type={type} placeholder={placeholder} id={id} 
            maxLength="3"
        />
    </>)
}

export default Input;