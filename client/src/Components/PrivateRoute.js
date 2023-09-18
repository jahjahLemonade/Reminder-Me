import React, { Fragment, useContext } from "react";
import { AuthContext } from "./Auth.js";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar.js";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currUser } = useContext(AuthContext);
  return (
    currUser ? (
      <Fragment>
        <Navbar tabs={["Logout"]} />
        <RouteComponent {...routeProps} />
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
