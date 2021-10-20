import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./style.scss";
import ListServices from "./service";

import { toast } from "react-hot-toast";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const List = () => {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [busca, setBusca] = useState("");

  const direct = (id) => {
    history.push(`/user/${id}`);
  };

  const login = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const listarUsers = () => {
    ListServices.list().then((response) => setUsers(response.data.data));
  };

  const filtrar = () => {
    if (busca) {
      const filtro = users.filter(
        (item) =>
          item.first_name.toLowerCase().indexOf(busca.toLowerCase()) !== -1 ||
          item.email.toLowerCase().indexOf(busca.toLowerCase()) !== -1
      );
      if (filtro.length > 0) {
        setUsers(filtro);
      } else {
        toast.error("Desculpe, não encontramos essa usuario.");
      }
    } else {
      listarUsers();
    }
  };

  useEffect(() => {
    listarUsers();
  }, []);

  return (
    <section className="section-list">
      <ul className="list-users-ul">
        <div className="list-users-title">
          <div>
            <PersonIcon className="list-users-icon" />
            <span>Usuários</span>
          </div>
          <button className="button-close" onClick={() => login()}>
            <PowerSettingsNewIcon className="list-users-close" />
          </button>
        </div>
        <div className="section-filter">
          <input
            placeholder="Nome ou Email"
            className="input-filter"
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          />
          <div>
            <SearchIcon className="icon-filter" onClick={() => filtrar()} />
          </div>
        </div>
        <div className="section-card-list">
          {users.map((item) => (
            <li className="list-users-li">
              <div>
                <img src={item.avatar} />
                <div className="list-users-info">
                  <span>
                    {item.first_name} {item.last_name}
                  </span>
                  <span>{item.email}</span>
                </div>
              </div>
              <button onClick={() => direct(item.id)}>Visualizar</button>
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

export default List;
