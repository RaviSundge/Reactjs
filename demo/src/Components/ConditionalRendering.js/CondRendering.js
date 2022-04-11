import React, { useState } from 'react';
const ConditionalRendering = () => {
    const[isLoggedIn,setLogIn]=useState(false)
    return ( <>
        <button onClick={()=>setLogIn(!isLoggedIn)}>{isLoggedIn?"Log Out":"Log In"}</button>
        <h1>Welcome {isLoggedIn ? "Ravindra":"please Log In "}</h1>
        {isLoggedIn && (
            <div>
                <h1>Hello How are?</h1>
            
            </div>
        )}
    </> );
}
 
export default ConditionalRendering;