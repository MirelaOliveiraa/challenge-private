import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import LoginServices from "./services";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const Direct = async () => {
    const { data } = await LoginServices.list();
    const users = data.data;
    data.filter((user) => user.)

    //history.push("/list-users");
  };

  return (
    <section>
      <div className="div-login">
        <div>
          <h1>Login</h1>
          <h3 className="login-h1">Email</h3>
          <input
            className="login-input"
            type="email"
            placeholder="Digite seu email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <h3 className="login-h1">Senha</h3>
          <input
            className="login-input"
            type="text"
            placeholder="Digite sua senha"
            onChange={(event) => setSenha(event.target.value)}
          />

          <button className="login-button" onClick={() => Direct()}>
            Login
          </button>
        </div>
      </div>
    </section>
  );
};
export default Login;
