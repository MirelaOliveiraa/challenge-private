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

    const payload = {
      email: email,
      password: senha,
    };

    await LoginServices.create(payload).then((response) => {
      // setEmail(response.data);
      // setSenha(response.data);
      console.log(response.data);
    });

    if (token === QpwL5tke4Pnpja7X4) {
      history.push("/list-users");
    } else {
      alert("error");
    }
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
            value={email}
            placeholder="Digite seu email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <h3 className="login-h1">Senha</h3>
          <input
            className="login-input"
            type="text"
            value={senha}
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
