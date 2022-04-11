import React, { Component, PureComponent } from "react";
// class ClassComp extends PureComponent {
class ClassComp extends Component {
  state = {};
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.add.city === this.props.add.city) return false;
    else return true;
  }
  render() {
    console.log("ClassComponent");
    return (
      <>
        {/* <h3>Class Component-{this.props.city}</h3> */}
        <h3>Class Component-{this.props.add.city}</h3>
      </>
    );
  }
}

export default ClassComp;
