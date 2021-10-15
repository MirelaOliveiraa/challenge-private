import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import List from "../pages/List";
import User from "../pages/User";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/list-users" component={List} />
        <PrivateRoute exact path="/user/:id" component={User} />
      </Switch>
    </Router>
  );
};

export default Routes;
