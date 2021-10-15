import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
