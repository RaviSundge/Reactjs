import React, { useState } from 'react'
const Bulb = () => {
    const [on,setOn]=useState(false)

    return ( <>
    <img src={on?"./bulb on.jpg":"./bulb off.jpg"} height="400" width={"500"} alt="wait"/>
    <button onClick={()=>setOn(!on)}>{on?"Turn Off":"Turn On"}</button>

    </> );
}
 
export default Bulb;