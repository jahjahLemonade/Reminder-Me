import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
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
          <Redirect to={"/Landing"} />
        )
      }
    />
  );
};

export default PrivateRoute;
