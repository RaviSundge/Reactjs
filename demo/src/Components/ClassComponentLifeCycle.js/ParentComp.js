import React, { Component } from "react";
import ChildComp from "./ChildComp";
class ParentComponent extends Component {
  state = {
    name: "Ravindra",
    province: "mh",
    showChild: false,
  };
  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState((state) => ({ showChild: !state.showChild }))
          }
        >
          Toggle
        </button>
        <select onChange={(e) => this.setState({ province: e.target.value })}>
          <option value={"mh"}>Maharashtra</option>
          <option value={"mp"}>MP</option>
          <option value={"gj"}>Gujrat</option>
          <option value={"kr"}>Krnataka</option>
        </select>
        {/* <select onChange={(e)=>this.setState({name:e.target.value})}>
            <option value={"Ravindra"}>Ravindra</option>
            <option value={"Rahul"}>Rahul</option>
            <option value={"Akshay"}>Akshay</option>
            <option value={"Suraj"}>Suraj</option>
        </select> */}
        <hr />
        {this.state.showChild && (
          <ChildComp province={this.state.province} name={this.state.name} />
        )}
      </>
    );
  }
}

export default ParentComponent;
