import React, { Component } from 'react';
import ParentComponent from './ParentComp';
class CompLifeCycle extends Component {
    state = {  } 
    render() { 
        return (<>
            <ParentComponent/>
        </>);
    }
}
 
export default CompLifeCycle;