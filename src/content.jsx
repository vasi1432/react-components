import { useState } from "react";
function MyFunctionalForm() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [age, setage] = useState("");
  return (
    <>
      <p>
        <label>
          first name :
          <input
            type="text"
            className="input"
            placeholder="First name"
            onChange={(e) => setfname(e.target.value)}
          />
        </label>
        <label>
          last name :
          <input
            type="text"
            className="input"
            placeholder="last name  "
            onChange={(e) => setlname(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          email :
          <input
            type="text"
            className="input"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>Phone number :</label>
        <input
          type="text"
          className="input"
          placeholder="Phone"
          onChange={(e) => setnumber(e.target.value)}
        />
      </p>
      <p>
        <label>age :</label>
        <input
          type="number"
          className="input"
          placeholder="age"
          onChange={(e) => setage(e.target.value)}
        />
      </p>
      <h1>
        My name is {fname} {lname}. My email address is {email} and phone number
        is {number}. I am {age} year old.
      </h1>
    </>
  );
}
export default MyFunctionalForm;
