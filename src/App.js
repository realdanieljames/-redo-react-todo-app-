import React, {Component} from "react";
import Todo from "./components/Todo/Todo";

import validator from "validator";
import testUtils from "react-dom/test-utils";


class App  extends Component {
  state = {
    isAuth: false,
    email: "",
    password: "",
    isError:  false,
    isPasswordError: true,
    isPasswordErrorMessage: "",
    isSubmitError: false,
    submitErrorMessage: "",
  };
//===========================================================================================//
//===========================================================================================//

  handleOnChangeEmail = (event)=> {
    this.setState({
      [event.target.name]: event.target.value,
    }, ()=>{
      const {email} = this.state;

      let isEmail = validator.isEmail(email);

      if(isEmail) {

      }else {
        this.setState({
          isError: true,
          errorMessage:  `Please Enter a Correct Email`
        })
      }
    });
  };
//===========================================================================================//
//===========================================================================================//

handleOnChangePassword= (event)=> {
  this.setState(
    {
      [event.target.name]: event.target.value,
    },
    ()=>{
      const {password} = this.state;

      let isPassword = validator.matches(
        password, "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
      );

      if(isPassword) {
        this.setState({
          isPasswordError: false,
          isPasswordErrorMessage:   "",
        });
      } else {
        this.setState({
          isPasswordError: true,
          isPasswordErrorMessage: "Password must contain 1 uppercase,  1 lowercase, 1 special character,  and one of these symbols #?!@$%^&*_",
        });
      }
    }
  );
}
//===========================================================================================//
//===========================================================================================//

handleOnSubmit = (event)=> {
  event.preventDefault();
  const {email, password} = this.state;

  if(validator.isEmpty(email)  && validator.isEmpty(password)) {
    this.setState({
      isSubmitError: true,
      submitErrorMessage: " cannot have empty email an password"
    });
    return;
  } else {
    this.setState({
      isSubmitError: false,
      submitErrorMessage: "",
    });
  }

  if(validator.isEmpty(password)){
    this.setState({
      isSubmitError: true,
      submitErrorMessage: " Cannot have empty email",
    })
  } else {
    this.setState({
      isSubmitError: false,
      submitErrorMessage: "",
    });
  }

  if(validator.isEmpty(password)){
    this.setState({
      isSubmitError: testUtils,
      submitErrorMessage: "Cannot have empty password"
    });
  }
};
//===========================================================================================//
//===========================================================================================//
render(){
const {
  isAuth,
  errorMessage,
  isError,
  isPasswordError,
  isPasswordErrorMessage
} = this.state;

let showTodoComponent = isAuth ? (
  <Todo />
) : (
  <form onSubmit={this.handleOnSubmit}>
    {" "}
    {isError ? <div>{errorMessage}</div> : ""}
    <input 
      type = "text"
      placeholder="enter email"
      name="email"
      onChange={this.handleOnChangeEmail}
      value={this.state.email}
    />{" "}
    <br />
{isPasswordError ?<div>{isPasswordErrorMessage}</div>: ""}
  <input 
    type="text"
    placeholder="enter password"
    name ="password"
    onChange={this.handleOnChangePassword}
    value={this.state.password}  
  />{" "}
  <br /> 
  <button>Sign Up</button>
  </form>
);

return (
  <div style={{ textAlign:"center", marginTop: "15%" }}>
    {showTodoComponent}
  </div>
);
}
}

export default App;

