import React, { Component } from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";
import "./SignInSignUpPage.styles.scss";

class SignInSignUpPage extends Component {
  render() {
    return (
      <div className="signin-signup">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default SignInSignUpPage;
