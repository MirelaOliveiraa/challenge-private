import React from "react";
import "./style/global.scss";
import Routes from "./Routes";
import Login from "./pages/Login";

const App = () => {
  return (
    <section>
      <div>
        <Routes />
      </div>
      <Login />
    </section>
  );
};

export default App;
