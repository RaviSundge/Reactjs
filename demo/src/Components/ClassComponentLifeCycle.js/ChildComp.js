import React, { Component } from 'react';
class ChildComp extends Component {
    state = { 
        name:"Ravindra",
        count:0,
        provinces:{
            mh:["Pune","Mumbai","Nashik"],
            mp:["Bhopal","Indore","Ukjjain"],
            gj:["Surat","GandhiNagar","Baroda"],
            kr:["Banglore","Manglore","Kolar"],
        },
        cities:[]
     } ;
     constructor(){
         super();
         console.log("constructor")
     }
     static getDerivedStateFromProps(nextProps, prevState) {
         console.log("getDerivedStateFromProps")
         const province=nextProps.province;
        //  const name11=nextProps.name
        
         return{cities:prevState.provinces[province]};
     }
     shouldComponentUpdate(nextProps, nextState) {
         console.log(" shouldComponentUpdate");
         return true;
     }
     
    render() { 
        console.log("render")
        return (<>
        <h2>Child Component</h2>
        <h2>Counter {this.state.count}</h2>
        <ul>
            {this.state.cities && this.state.cities.map((city)=>(
                <li key={city}>{city}</li>
            ))}
        </ul>
        <h1>{this.state.name}</h1>

        </>);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return "hello";
    }
    componentDidUpdate(prevProps, prevState ,snap) {
        console.log(" componentDidUpdate", snap);

    }
    componentDidMount() {
        console.log("componentDidMount")
        this.timer= setInterval(()=>{this.setState((state)=>({count:state.count+1}))},1000)
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer)
    }
}
 
export default ChildComp;