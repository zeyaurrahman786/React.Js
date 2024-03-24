import React from 'react'

function RegisterForm() {

    function handleRegister(event){
        event.preventDefault();  // Do not Reload the screen on calling this function.
        console.log("Hello World");
    }

  return (
    <form>
        <input type='email' placeholder='Enter Your Email'></input>
        <button onClick={handleRegister} >Submit</button>
    </form>
  )
}

export default RegisterForm