import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "./firebase.js"
import "../CSS/SignUpForm.css"

const SignUpForm = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { signup_email, signup_password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(signup_email.value, signup_password.value);
        history.push("/")
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  return (
    <div className="row">
      <form className="col s12" onSubmit={handleSignUp}>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup_first_name" type="text" className="validate" autoComplete="on" required/>
            <label htmlFor="signup_first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup_last_name" type="text" className="validate" autoComplete="on" required/>
            <label htmlFor="signup_last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup_email" type="email" className="validate" autoComplete="on" required />
            <label htmlFor="signup_email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup_password" type="password" className="validate" autoComplete="on" required/>
            <label htmlFor="signup_password">Password</label>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{ backgroundColor: "#056674" }}
            className="waves-effect waves-light btn-large"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
