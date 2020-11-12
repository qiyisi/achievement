import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  const { path } = rest;
  const isAuthPath = path !== "/login" && path !== "/register";
  return (
    <Route
      {...rest}
      render={(props) =>
        // if user login goto app else goto login
        user ? (
          isAuthPath ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        ) : isAuthPath ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default AuthRoute;
