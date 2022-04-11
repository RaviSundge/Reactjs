import React, { useState } from 'react';
const Color = () => {
    const[color,setColor]=useState("yellow")
    const handleClick=(e)=>{
        const {value}=e.target
        setColor(value)

    }
    return ( <>
        <div style={{height:500 ,width:500,border:"2px solid black",backgroundColor:`${color}`}}>

        </div>
        <button onClick={handleClick} value={"red"} >Red</button>
        <button onClick={handleClick} value={'green'}>Green</button>
        <button onClick={handleClick} value={"blue"}>Blue</button>
    </> );
}
 
export default Color;