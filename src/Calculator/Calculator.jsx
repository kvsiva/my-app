import React from "react";
class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5,
    showResult: false
  };

  setA = e => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false
    });
  };

  setB = e => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false
    });
  };

  setShowResultToTrue = e => {
    this.setState(prevState => {
      return { showResult: !prevState.showResult };
    });
  };
  render() {
    return (
      <div>
        <label> A: </label> <input onChange={this.setA} />
        <label> B: </label> <input onChange={this.setB} />
        <button onClick={this.setShowResultToTrue}>Result</button>
        <br />
        {this.state.showResult ? (
          <div>
            {"Add:" + (this.state.a + this.state.b)}
            <br />
            {"Sub:" + (this.state.a - this.state.b)}
            <br />
            {"Mul:" + this.state.a * this.state.b}
            <br />
            {"Div:" + this.state.a / this.state.b}
            <br />
          </div>
        ) : (
          <div>Click On Result button</div>
        )}
      </div>
    );
  }
}
export default Calculator;
