import React from 'react'

function RegisterForm() {

    function handleRegister(event){
        event.preventDefault();  // Do not Reload the screen on calling this function.
        console.log("Hello World");
    }

    let age = 21;
    

  return (
    // If the user is above age of 18, then only show this form.

    <form>
      {/* Conditional Statement */}
      {age > 18 ? (
        <div>
        <input type='email' placeholder='Enter Your Email'></input>
        <button onClick={handleRegister} >Submit</button>
        </div>
      ) : (
        <h1>You are a small Kid, come back when you are 18 !</h1>
      )}
      
    </form>
  )
}

export default RegisterForm


// Conditional Rendering