import React, { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";
import UserServices from "./service";
import "./style.scss";

const User = () => {
  const params = useParams();
  const history = useHistory();

  const direct = () => {
    history.push(`/list-users/QpwL5tke4Pnpja7X4`);
  };

  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await UserServices.list(params.id);
      setUser(response.data.data);
    })();
  }, []);

  return (
    <section>
      <div className="div-user">
        <ul className="user-ul">
          <li className="user-ul-li">
            <img src={user.avatar} alt="" />
            <div>
              <div>
                <span>{user.first_name + user.last_name}</span>
              </div>

              <span>{user.email}</span>
            </div>
            <div>
              <button className="button-user" onClick={() => direct()}>
                Voltar
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default User;
