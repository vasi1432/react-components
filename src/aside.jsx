import { Component } from "react";
class MyFunctionComponent extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    role: "",
    age: 0,
  };
  //   handlefname = (e) => {
  //     this.setState({ fname: e.target.value });
  //   };
  //   handlelname = (e) => {
  //     this.setState({ lname: e.target.value });
  //   };
  //   handleEmail = (e) => {
  //     this.setState({ email: e.target.value });
  //   };
  //   handleAge = (e) => {
  //     this.setState({ age: e.target.value });
  //   };

  handelechanges = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { fname, lname, email, role, age } = this.state;
    return (
      <>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Please enter your first name"
            onChange={this.handelechanges}
            name="fname"
            value={fname}
          />
          <input
            className="input"
            type="text"
            placeholder="Please enter your last name"
            onChange={this.handelechanges}
            name="lname"
            value={lname}
          />
        </p>
        <p>
          <input
            className="input"
            type="text"
            placeholder="Please enter your email"
            onChange={this.handelechanges}
            name="email"
            value={email}
          />
        </p>
        <p className="radioBtn">
          <input
            type="radio"
            name="frontend developer"
            onClick={() => this.setState({ role: "frontend developer" })}
          />
          <label htmlFor="">frontend developer</label>
          <input
            type="radio"
            name="frontend developer"
            onClick={() => this.setState({ role: "backend developer" })}
          />
          <label htmlFor="">backend developer</label>
          <input
            type="radio"
            name="frontend developer"
            onClick={() => this.setState({ role: "fullstack developer" })}
          />
          <label htmlFor="">fullstack developer</label>
        </p>
        <p>
          <input
            className="input02"
            type="number"
            placeholder="Please enter your age"
            value={age}
            name="age"
            onChange={this.handelechanges}
          />
        </p>
        <h2>
          Hello my name is {fname} {lname}
          {"  "}.I am a {role} {"  "}
          .My age is {age} . You can contact me on {email}
        </h2>
      </>
    );
  }
}
export default MyFunctionComponent;
