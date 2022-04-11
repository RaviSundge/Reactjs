import React, { Component } from "react";
class ClassComp extends Component {
  inputRef = React.createRef();
  focusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <>
        <h4>ClassComp</h4>
        <input ref={this.inputRef} />
      </>
    );
  }
}
export default ClassComp;
