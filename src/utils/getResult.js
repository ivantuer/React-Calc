let result;

export default (operator, currentInput, firstNum, stateChange) => {
  switch (operator) {
    case "+":
      result = firstNum + parseFloat(currentInput.split(operator)[1])
      result =
        result.toString().split(".")[1] &&
        result.toString().split(".")[1].length > 7
          ? parseFloat(result.toFixed(5)).toString()
          : result;
      return stateChange({
        result: result,
        currentInput: result
      });
    case "-":
      result = firstNum - (parseFloat(currentInput.split(operator)[2] || currentInput.split(operator)[1]));
      result =
        result.toString().split(".")[1] &&
        result.toString().split(".")[1].length > 7
          ? parseFloat(result.toFixed(5)).toString()
          : result;
      return stateChange({
        result: result,
        currentInput: result
      });

    case "*":
      result = firstNum * parseFloat(currentInput.split(operator)[1]);
      result =
        result.toString().split(".")[1] &&
        result.toString().split(".")[1].length > 7
          ? parseFloat(result.toFixed(5)).toString()
          : result;

      return stateChange({
        result: result,
        currentInput: result
      });

    case "/":
      result = firstNum / parseFloat(currentInput.split(operator)[1]);
      result =
        result.toString().split(".")[1] &&
        result.toString().split(".")[1].length > 7
          ? parseFloat(result.toFixed(5)).toString()
          : result;
      return stateChange({
        result: result,
        currentInput: result
      });

    default:
      return;
  }
};
