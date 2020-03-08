import React from "react";

import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up-style.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passowrds do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="form-title">Sign Up</h2>
        <span className="form-sub-title">
          Sign up with your email and password.
        </span>

        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label className="form-label">Display Name</label>
          <input
            placeholder="John Doe"
            className="form-input"
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            required
          />
          <label className="form-label">Email</label>
          <input
            placeholder="name@email.com"
            className="form-input"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            required
          />
          <label className="form-label">Passowrd</label>
          <input
            placeholder="Enter your password"
            className="form-input"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            required
          />
          <label className="form-label">Confirm Password</label>
          <input
            placeholder="Confirm your password"
            className="form-input"
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
