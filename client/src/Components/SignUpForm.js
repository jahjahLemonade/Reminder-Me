import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "./firebase.js"
import "../CSS/SignUpForm.css"

const SignUpForm = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
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
            <input id="signup-first_name" type="text" className="validate" />
            <label htmlFor="first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup-last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup-email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="signup-password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{ backgroundColor: "#056674" }}
            className="waves-effect btn-large"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
