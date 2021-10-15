import React from "react";
import "./style/global.scss";
import Routes from "./routes/index";

import { Toaster, toast } from "react-hot-toast";

const App = () => {
  return (
    <section>
      <div>
        <Routes />
        <Toaster />
      </div>
    </section>
  );
};

export default App;
