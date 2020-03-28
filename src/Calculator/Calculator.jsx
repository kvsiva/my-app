import React from "react";
class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5
  };

  setA = e => {
    this.setState({
      a: parseInt(e.target.value)
    });
  };

  setB = e => {
    this.setState({
      b: parseInt(e.target.value)
    });
  };
  render() {
    return (
      <div>
        <label> A: </label> <input onChange={this.setA} />
        <label> B: </label> <input onChange={this.setB} />
        <br />
        {"Add:" + (this.state.a + this.state.b)}
        <br />
        {"Sub:" + (this.state.a - this.state.b)}
        <br />
        {"Mul:" + this.state.a * this.state.b}
        <br />
        {"Div:" + this.state.a / this.state.b}
        <br />
      </div>
    );
  }
}
export default Calculator;
