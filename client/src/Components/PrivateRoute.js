import React, { Fragment, useContext } from "react";
import { AuthContext } from "./Auth.js";
import Home from "./Home.js";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar.js";

const PrivateRoute = () => {
  const { currUser } = useContext(AuthContext);
  return (
    currUser ? (
      <Fragment>
        <Navbar tabs={["Logout"]} />
         <Home/>
      </Fragment>
    ) : (
        <Fragment>
          <Navbar tabs={["Login", "Sign Up"]} />
          <LandingPage />
        </Fragment>
      )
  );
};

export default PrivateRoute;
