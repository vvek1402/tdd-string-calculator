import { useState } from "react";
import { add, divide, multiply, subtract } from "../utils/Calculate";
import { convertToInt } from "../utils/Helpers";

const StringCalculatorUI = () => {
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      if (input.length < 2) {
        if (input === "") {
          setResult(0);
        } else {
          setResult(convertToInt(input));
        }
        return;
      }
      setError(null);
      let calcResult = 0;

      switch (operation) {
        case "add":
          calcResult = add(input);
          break;
        case "sub":
          calcResult = subtract(input);
          break;
        case "mul":
          calcResult = multiply(input);
          break;
        case "div":
          calcResult = divide(input);
          break;
        default:
          throw new Error("Unknown operation");
      }

      setResult(calcResult);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setResult(null);
    }
  };

  const handleReset = () => {
    setOperation("add");
    setInput("");
    setError(null);
    setResult(null);
  }

  return (
    <div className="calculator-container">
      <h1 className="title">TDD String Calculator</h1>

      <div className="input-group">
        <label htmlFor="input">Enter numbers:</label>
        <input
          type="text"
          id="input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="e.g., 1,2,3 or //;\n1;2;3"
        />
      </div>

      <div className="input-group">
        <label htmlFor="operation">Select Operation:</label>
        <select
          id="operation"
          value={operation}
          onChange={(event) => setOperation(event.target.value)}
        >
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="mul">Multiply</option>
          <option value="div">Divide</option>
        </select>
      </div>

      <div className="flex-justify" >
      <button className="calculate-btn" onClick={handleCalculate}>
        Calculate
      </button>

      <button className="reset-btn" onClick={() => handleReset()}>
        Reset
      </button>
      </div>
 

      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}

      {error && (
        <div className="error">
          <h3>Error: {error}</h3>
        </div>
      )}
    </div>
  );
};

export default StringCalculatorUI;
