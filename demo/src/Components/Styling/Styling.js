import React from 'react';
import BasicStyling from './BasicStyling';
const Styling = () => {
    const h2Style={
        color:"black",
        backgroundColor:"cyan",
        padding:5
    }
    return ( <><h2 style={h2Style}>{"Sample content".repeat(50)}</h2>
    <BasicStyling/>
    </> );
}
 
export default Styling;