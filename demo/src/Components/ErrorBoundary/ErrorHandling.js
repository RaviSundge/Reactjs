import React, { Component } from "react";
class ErrorHandling extends Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    return this.state.hasError ? (
      <h4>someting went wrong</h4>
    ) : (
      this.props.children
    );
  }
}
export default ErrorHandling;
