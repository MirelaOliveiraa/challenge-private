import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../pages/Login";
import List from "../pages/List";
import User from "../pages/User";

const Routes = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          render={({ location }) => {
            return token ? (
              <>
                <Route exact path="/list-users/:token" component={List} />
                <Route exact path="/user/:id" component={User} />
              </>
            ) : (
              <Redirect to={{ pathname: "/", state: { from: location } }} />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
