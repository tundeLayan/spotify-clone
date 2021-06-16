import React from "react";
import { Route, Redirect } from "react-router-dom";

import { routes } from "../../router";
import { useDataLayerValue } from "../../DataLayer";

const PrivateRoute = (props: any) => {
  // TOKEN should be a value that should be pulled out of a higher
  // order state
  const { component: Component, ...rest } = props;
  const {
    state: { token }
  }: any = useDataLayerValue();

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to={routes.login.path} />
      }
    />
  );
};

export default PrivateRoute;
