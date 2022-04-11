import React, { Component } from "react";
class ClassComp extends Component {
  state = {};
  greet(name) {
    alert("hello " + name);
  }
  render() {
    return (
      <>
        <h3>Class Component</h3>
        <button onClick={() => this.props.print()}>From Child</button>
      </>
    );
  }
}

export default ClassComp;
