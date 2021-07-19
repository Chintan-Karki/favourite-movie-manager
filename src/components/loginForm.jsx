import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     const a = this.username.current.value;
  //     console.log("Submitted", a);
  //   };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              name="username"
              id="username"
              type="text"
              className="form-control"
              value={account.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              value={account.password}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-primary">LOGIN</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
