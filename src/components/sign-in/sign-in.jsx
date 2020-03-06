import React from "react";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handeChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="form-title">Sign In</h2>
        <span className="form-sub-title">
          Sign in with your email and password
        </span>

        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <label className="form-label">Email</label>
          <input
            placeholder="name@email.com"
            className="form-input"
            type="email"
            name="email"
            onChange={this.handeChange}
            value={this.state.email}
            required
          />
          <label className="form-label">Password</label>
          <input
            placeholder="Enter your password"
            className="form-input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handeChange}
            required
          />
          <div className="button-wrapper">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Google{""}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;