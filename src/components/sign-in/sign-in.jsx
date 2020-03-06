import React from "react";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in-styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
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
            onChange={this.handleChange}
            value={email}
            required
          />
          <label className="form-label">Password</label>
          <input
            placeholder="Enter your password"
            className="form-input"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
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
