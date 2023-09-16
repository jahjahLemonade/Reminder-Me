import React, { useContext } from "react";
import { Route, redirect } from "react-router-dom";
import { AuthContext } from "./Auth.js";

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
  const {currUser} = useContext(AuthContext);
  return (
    <Route 
    {...rest}
      render={routeProps =>
        currUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <redirect to={"/Landing"} />
        )
      }
    />
  );
};

export default PrivateRoute;
