import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  ChangeHandler = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          style={{ marginTop: "40px" }}
          onSubmit={this.submitHandler}
        >
          <legend>
            <h4>Login</h4>
          </legend>
          <div className="mb-3">
            <label htmlfor="eamil" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.ChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlfor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.ChangeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
           Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
