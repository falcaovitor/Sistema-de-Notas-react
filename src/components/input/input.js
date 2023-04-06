


function Input({type, placeholder, id}){
    return( <>
        <input type={type} placeholder={placeholder} id={id} 
            maxLength="2"
        />
    </>)
}

export default Input;