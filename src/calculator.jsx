import { useState } from "react";
import "./App.css";

function Calculator() {
  const [num01, setnum01] = useState("");
  const [num02, setnum02] = useState("");
  const [result, setresult] = useState(0);

  function add() {
    {
      return setresult(num01 + num02);
    }
  }
  function subtract() {
    {
      return setresult(num01 - num02);
    }
  }
  function multiply() {
    {
      return setresult(num01 * num02);
    }
  }
  function divide() {
    {
      return setresult(num01 / num02);
    }
  }

  return (
    <>
      <h1>
        <input
          type="number"
          placeholder="0"
          className="input"
          value={num01}
          onChange={(e) => setnum01(+e.target.value)}
        />
        <input
          type="number"
          placeholder="0"
          className="input"
          value={num02}
          onChange={(e) => setnum02(+e.target.value)}
        />
      </h1>
      <h1 className="h1">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={divide}>/</button>
      </h1>
      <h1>{result}</h1>
    </>
  );
}

export default Calculator;
