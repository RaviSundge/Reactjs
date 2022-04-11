import React, { useState } from 'react';
import {createUseStyles} from 'react-jss'
// const useStyles=createUseStyles({
//     container:({color,height,width})=>({
//         backgroundColor:color,
//         height:height,
//         width:width,
//         border:"2px solid cyan",
//         borderRadius:10
//     })
// })
const useStyles=createUseStyles({
    container:({color})=>({
        backgroundColor:color,
        height:200,
        width:200,
        border:"2px solid cyan",
        borderRadius:10
    })
})
const Color22 = () => {
    const [color,setColor]=useState("red")
    const classes=useStyles(color)
    return ( <>
        <div className={classes.container}></div>
        <button onClick={()=>setColor({color:"red"})}>Red</button>
        <button onClick={()=>setColor({color:"blue"})}>Blue</button>
        <button onClick={()=>setColor({color:"yellow"})}>Yellow</button>
        {/* <button onClick={()=>setStyles({...styles,height:400,width:400})}>Zoom In</button>
        <button onClick={()=>setStyles({...styles,height:200,width:200})}>Zoom Out</button> */}
    </> );
}
 
export default Color22