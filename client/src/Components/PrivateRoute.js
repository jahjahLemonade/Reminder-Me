import React, { useContext } from "react";
import { Route, Routes, redirect } from "react-router-dom";
import { AuthContext } from "./Auth.js";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currUser } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        {...rest}
        render={routeProps =>
          currUser ? (
            <RouteComponent {...routeProps} />
          ) : (
              redirect("/Landing")
            )
        }
      />
    </Routes>
  );
};

export default PrivateRoute;
