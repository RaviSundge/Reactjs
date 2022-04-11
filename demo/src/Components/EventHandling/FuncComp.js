import React, { useState } from 'react';
const FuncComp = () => {
    const[state]=useState("Ravindra")
    const handleClick=()=>{
        alert("hello " + state)
    }
    return ( <>
        <button onClick={handleClick}>Click Me</button>
    </> );
}
 
export default FuncComp;