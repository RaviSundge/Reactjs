import React, { Component } from 'react';
import "index.css"
class Counter extends Component{
    state={
        count:0
    }
    increment=()=>{
        // this.setState({
        //     count:this.state.count +1
        // })
        this.setState((prevState)=>{
            return {
                count:prevState.count +10
            }
        });
        this.setState((prevState)=>{
            return {
                count:prevState.count +10
            }
        });
        this.setState((prevState)=>
          ({ count:prevState.count +10
            }));
        // console.log(this.state.count)
        
    }
    decrement=()=>{
        // this.setState({
        //     count:this.state.count-1
        // })
        this.setState((prevState)=>{
            return{
                count:prevState.count -10
            }
        })
        this.setState((prevState)=>{
            return{
                count:prevState.count -20
            }
        })
        console.log(this.state.count)
    }
    render(){
        return(<div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.increment}>++</button>
            <button onClick={this.decrement}>--</button>
            
            </div>)
    }
}
export default Counter;