import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style.scss";

import ListServices from "./service";
import PersonIcon from "@material-ui/icons/Person";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const List = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const { id } = useParams();

  const direct = (id) => {
    history.push(`/user/${id}`);
  };

  const login = () => {
    history.push("/");
  };

  const listarUsers = () => {
    ListServices.list().then((response) => setUsers(response.data.data));
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
