import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import LoginServices from "./services";

import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  const Direct = async () => {
    const { data } = await LoginServices.list();

    const payload = {
      email: email,
      password: senha,
    };

    try {
      await LoginServices.create(payload).then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);

          history.push(`/list-users/${response.data.token}`);
        }
      });
    } catch (error) {
      toast.error("Email ou senha incorretos.", {
        duration: 10000,
      });
    }
  };

  return (
    <section className="section-login">
      <div className="div-login">
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
      <Toaster />
    </section>
  );
};
export default Login;
