import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebase from "./firebase.js";
import "../CSS/index.css";

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
      <form  id="signup" className="col s12" onSubmit={handleSignUp}>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate" />
            <label htmlFor="first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate" />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
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
