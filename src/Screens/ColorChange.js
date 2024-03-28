import React, { useState } from 'react'

function ColorChange() {
    const [color, setColor] = useState('white');

    const colorChange = () =>{
        setColor(color === 'white' ? 'red' : 'white');
    }
  return (
    <div style={{ backgroundColor: color, height:600}}>
        <button onClick={colorChange}>Screen Color Change </button>
    </div>
  )
}

export default ColorChange