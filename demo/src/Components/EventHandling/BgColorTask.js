import React, { useState } from 'react';
const BgColorTask = () => {
    const[position,setPosition]=useState({x:0,y:0})
   const handleMouseMove=(e)=>{
        const{clientX:x,clientY:y}=e;
        setPosition({x,y});

    }
   const {x,y}=position;
    return ( <>
        <div onMouseMove={handleMouseMove} style={{height:"100vh",backgroundColor:`rgb(100,${x},${y})`}}>


        </div>
    </> );
}
 
export default BgColorTask;