import React from 'react'

function Title(props) {
  return (
    // <h1>This is About Screen!</h1>
    <h1 style={{fontSize:80, color:"red"}} >{props.name}</h1> // Whenever we get a name from the screen, we can pass it into the component over here!
  )
}

export default Title



// Code Optimization Tips :-
// 1. Props -> Objects       (props.name ke jagah par hum sirf name likh sakte hai)
