import React, { useState } from 'react';
import style from './Style.module.css'
import "./style.css"
const BasicStyling = () => {
    const [isError, setError] = useState(false)
    return (<>
        <h2 className={`${style.header} ${style.format}`}>Hello How Are You??</h2>
        <h1 className={"box"}>Ravindra </h1>
        <p style={{ textAlign: 'center', backgroundColor: "tomato", color: "white" }}>Learn Css here</p>
        <h4 className={isError ? "error" : "success"} style={{ textAlign: "center", fontSize: "32px" }}>Sign In</h4>
        <button onClick={() => setError(!isError)} style={{ fontSize: 32, color: "black", backgroundColor: "cyan" }}>Click</button>
    </>);
}

export default BasicStyling;
//styling by module h2 node
//styling by external css h1 node
//styling by inline css p node