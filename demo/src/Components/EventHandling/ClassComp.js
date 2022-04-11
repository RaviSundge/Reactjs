import React,{Component} from 'react';
class ClassComp extends Component {
    state = { name:"Ravindra" } 
    // constructor(){
    //     super();
    //    this.handleClick= this.handleClick.bind(this);  //we have to bind here to avoid this we can use arrow function
    // }
    handleClick(){

        alert("Hello "+this.state.name)
    }
    // handleClick=()=>{ 
    //     alert("hello" +this.state.name)  //here we can use above method without bind by using passing arrow function where we are using lets seee that also
    // }
    render() { 
        return (<>
            {/* <button onClick={this.handleClick}>Click Me</button>  */}
            <button onClick={()=>this.handleClick()}>Click Me</button> 
        </>);
    }
}
 
export default ClassComp;