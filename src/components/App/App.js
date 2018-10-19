import React, { Component } from "react";
import getStatefunc from "../../utils/genStatefunc";
import Input from "../Input/Input";
import Buttons from "../Buttons/Buttons";
import getResult from "../../utils/getResult";
import "./App.css";

class App extends Component {
  state = {
    currentInput: "0",
    isOperatorClicked: false,
    isDotClicked: false
  };

  handleClick = event => {
    const { currentInput: curInp } = this.state;
    const text = event.target.innerText;
    const currentInput = curInp === "0" ? text : curInp + text;
    this.setState({ currentInput });
    console.log(this.state);
  };
  clearInput = () =>
    this.setState({
      currentInput: "0",
      isOperatorClicked: false,
      isDotClicked: false
    });

  plusMinus = () => {
    const { currentInput: curInp } = this.state;
    const sliced = curInp.toString().slice(1);
    const currentInput = parseFloat(curInp) < 0 ? sliced : "-" + curInp;
    this.setState({ currentInput });
  };

  percent = () => {
    const { isOperatorClicked, currentInput } = this.state;
    !isOperatorClicked && this.setState({ currentInput: currentInput / 100 });
  };
  dot = () => {
    const { currentInput, isDotClicked } = this.state;
    console.log(currentInput);
    this.setState({
      currentInput: !isDotClicked ? currentInput + "." : currentInput,
      isDotClicked: true
    });
  };

  add = () => {
    const { isOperatorClicked, currentInput } = this.state;
    const parse = parseFloat(currentInput);
    !isOperatorClicked &&
      this.setState(getStatefunc("+", parse, currentInput + "+"));
  };
  minus = () => {
    const { isOperatorClicked, currentInput } = this.state;
    const parse = parseFloat(currentInput);
    !isOperatorClicked &&
      this.setState(getStatefunc("-", parse, currentInput + "-"));
  };
  mul = () => {
    const { isOperatorClicked, currentInput } = this.state;
    const parse = parseFloat(currentInput);
    !isOperatorClicked &&
      this.setState(getStatefunc("*", parse, currentInput + "*"));
  };
  divide = () => {
    const { isOperatorClicked, currentInput } = this.state;
    const parse = parseFloat(currentInput);
    !isOperatorClicked &&
      this.setState(getStatefunc("/", parse, currentInput + "/"));
  };

  stateChange = obj => this.setState(obj);
  result = () => {
    const { operator, currentInput, firstNum } = this.state;
    let regex = /\./;
    this.setState({
      operator: "",
      isOperatorClicked: false,
      isDotClicked: regex.test(currentInput) ? true : false
    });
    getResult(operator, currentInput, firstNum, this.stateChange);
  };
  render() {
    const {
      clearInput,
      handleClick,
      plusMinus,
      add,
      result,
      minus,
      mul,
      divide,
      percent,
      dot
    } = this;
    return (
      <div className="main-wrapper">
        <Input currentInput={this.state.currentInput} />
        <Buttons
          {...{
            clearInput,
            handleClick,
            plusMinus,
            add,
            result,
            minus,
            mul,
            divide,
            percent,
            dot
          }}
        />
      </div>
    );
  }
}

export default App;
