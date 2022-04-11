import React from 'react';
const ListRendering = () => {
    const nums=[10,20,30,40,50,60,70,80,90,100]
    return ( <>
        <h1>List Rendering</h1>
        <ul type={"circle"}>
            {nums.map((val,i)=>{
              return  <li key={i+val}>{val}</li>
            })}
        </ul>
    </> );
}
 
export default ListRendering;