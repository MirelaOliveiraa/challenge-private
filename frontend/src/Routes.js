import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import List from "./pages/List";
import User from "./pages/User";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/list-users/:token" component={List} />
      </Switch>
    </Router>
  );
};
export default Routes;
