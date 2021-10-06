import React, { useEffect, useState } from "react";

import ListServices from "./service";

const List = () => {
  const [users, setUsers] = useState([]);

  const listarUsers = () => {
    ListServices.list().then((response) => setUsers(response.data.data));
  };

  useEffect(() => {
    listarUsers();
  }, []);
  return (
    <section>
      <div>
        <h1>lista</h1>

        <ul>
          {users.map((item) => (
            <li>{item.first_name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default List;
