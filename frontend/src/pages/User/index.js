import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import "./style.scss";
import UserServices from "./service";

const User = () => {
  const params = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);

  const direct = () => {
    history.push(`/list-users`);
  };

  useEffect(() => {
    (async () => {
      const response = await UserServices.list(params.id);
      setUser(response.data.data);
    })();
  }, [params.id]);

  if (!user) {
    return null;
  }

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
