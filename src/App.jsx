import { Component, useState } from "react";
import "./App.css";

// function App() {
//   const [fname, setfname] = useState("vasi");
//   const [lname, setlname] = useState("");
//   const [email, setemail] = useState("");
//   const [age, setage] = useState("");

//   return (
//     <>
//       <h1>
//         <input
//           type="text"
//           className="input"
//           placeholder="Firstname :"
//           // name="fname"
//           value={fname}
//           onChange={(e) => setfname(e.target.value)}
//         />
//         <input
//           type="text"
//           className="input"
//           placeholder="Lastname :"
//           name="lname"
//           onChange={(e) => setlname(e.target.value)}
//         />
//       </h1>
//       <h1>
//         <input
//           type="text"
//           className="input"
//           placeholder="Email :"
//           name="email"
//           onChange={(e) => setemail(e.target.value)}
//         />
//       </h1>
//       <h1>
//         <input
//           type="number"
//           className="input"
//           placeholder="age :"
//           name="age"
//           onChange={(e) => setage(e.target.value)}
//         />
//       </h1>
//       <h1>
//         My name is {fname} {lname} .You can contact me on {email}. My age is{" "}
//         {age}
//       </h1>
//     </>
//   );
// }

function App() {
  // const [fname, setfname] = useState("");
  // const [count, setcount] = useState(0);
  const [input01, setinput01] = useState(0);
  const [input02, setinput02] = useState(0);
  const [addition, setadd] = useState(input01 + input02);
  const [subtraction, setsubtract] = useState(input01 - input02);
  const [multiplycation, setmultiply] = useState(input01 * input02);
  const [divition, setdivide] = useState(input01 / input02);

  function add() {
    {
      return setadd(input01 + input02);
    }
  }
  function subtract() {
    {
      return setsubtract(input01 - input02);
    }
  }
  function multiply() {
    {
      return setmultiply(input01 * input02);
    }
  }
  function divide() {
    {
      return setdivide(input01 / input02);
    }
  }

  return (
    <>
      {/* <h1>
        <input
          type="text"
          value={fname}
          className="input"
          onChange={(e) => setfname(e.target.value)}
        />
      </h1> */}

      {/* <h1>
        {count}
        <button onClick={() => setcount(count + 1)}>submit</button>
      </h1> */}

      <h1>
        <input
          type="number"
          className="input"
          value={input01}
          onChange={(e) => setinput01(+e.target.value)}
        />
        <input
          type="number"
          className="input"
          value={input02}
          onChange={(e) => setinput02(+e.target.value)}
        />
      </h1>
      <h1>
        {input01}
        {"+"}
        {input02}
        <button onClick={add}>=</button>
        {addition}
      </h1>
      <h1>
        {input01}
        {"-"}
        {input02}
        <button onClick={subtract}>=</button>
        {subtraction}
      </h1>
      <h1>
        {input01}
        {"*"}
        {input02}
        <button onClick={multiply}>=</button>
        {multiplycation}
      </h1>
      <h1>
        {input01}
        {"/"}
        {input02}
        <button onClick={divide}>=</button>
        {divition}
      </h1>
      {/* <h1>my name is{fname}</h1> */}
    </>
  );
}

export default App;
