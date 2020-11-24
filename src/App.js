import { useState } from "react";
import KeyPad from "./components/KeyPad/";
import Display from "./components/Display";
import "./App.scss";

const App = () => {
  const [memory, setMemory] = useState(null);
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [waiting, setWaiting] = useState(false);

  const calculate = {
    "/": (prevValue, nextValue) => prevValue / nextValue,
    "*": (prevValue, nextValue) => prevValue * nextValue,
    "+": (prevValue, nextValue) => prevValue + nextValue,
    "-": (prevValue, nextValue) => prevValue - nextValue,
    "=": (prevValue, nextValue) => nextValue,
  };

  const handleCalculate = (nextOperator) => {
    const inputValue = parseFloat(display);
    if (memory == null) {
      setMemory(inputValue);
    } else if (operator) {
      const currentValue = memory || 0;
      const newValue = calculate[operator](currentValue, inputValue);

      setMemory(newValue);
      setDisplay(String(newValue));
    }
    setWaiting(true);
    setOperator(nextOperator);
  };

  const handleNumber = (number) => {
    if (waiting) {
      setDisplay(String(number));
      setWaiting(false);
    } else {
      setDisplay(display === "0" ? String(number) : display + number);
    }
  };

  const handleClear = () => {
    setMemory(null);
    setDisplay("0");
    setOperator(null);
    setWaiting(false);
  };

  const handleBackspace = () => {
    setDisplay(display.substring(0, display.length - 1) || "0");
  };

  const handlePlusMinus = () => {
    const newValue = parseFloat(display) * -1;
    setDisplay(String(newValue));
  };

  const handleDot = () => {
    if (!/\./.test(display)) {
      setDisplay(display + ".");
      setWaiting(false);
    }
  };

  const handleClick = (value) => {
    switch (value) {
      case "C":
        handleClear();
        break;
      case "+/-":
        handlePlusMinus();
        break;
      case "b":
        handleBackspace();
        break;
      case ".":
        handleDot();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        handleCalculate(value);
        break;
      default:
        handleNumber(value);
    }
  };

  const isSelected = (value) => (operator === value ? "selected" : "orange");

  return (
    <main className="main">
      <div className="container">
        <Display display={display} />
        <KeyPad value="C" handleClick={handleClick} className="gray" />
        <KeyPad value="+/-" handleClick={handleClick} className="gray" />
        <KeyPad
          label="&#9003;"
          value="b"
          handleClick={handleClick}
          className="gray"
        />
        <KeyPad
          label="&divide;"
          value="/"
          handleClick={handleClick}
          className={isSelected("/")}
        />
        <KeyPad value="7" handleClick={handleClick} />
        <KeyPad value="8" handleClick={handleClick} />
        <KeyPad value="9" handleClick={handleClick} />
        <KeyPad
          label="&times;"
          value="*"
          handleClick={handleClick}
          className={isSelected("*")}
        />
        <KeyPad value="4" handleClick={handleClick} />
        <KeyPad value="5" handleClick={handleClick} />
        <KeyPad value="6" handleClick={handleClick} />
        <KeyPad
          label="&minus;"
          value="-"
          handleClick={handleClick}
          className={isSelected("-")}
        />
        <KeyPad value="1" handleClick={handleClick} />
        <KeyPad value="2" handleClick={handleClick} />
        <KeyPad value="3" handleClick={handleClick} />
        <KeyPad
          label="&#43;"
          value="+"
          handleClick={handleClick}
          className={isSelected("+")}
        />
        <KeyPad value="0" handleClick={handleClick} className="button_0" />
        <KeyPad value="." handleClick={handleClick} />
        <KeyPad value="=" handleClick={handleClick} className="orange" />
      </div>
    </main>
  );
};

export default App;
