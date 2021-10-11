import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserServices from "./service";
const User = () => {
  const [user, setUser] = useState([]);

  const listarUser = () => {
    UserServices.list().then((response) => setUser(response.data.data));
  };

  useEffect(() => {
    listarUser();
  }, []);
  return (
    <section>
      <ul className="section-ul">
        {user.map((item) => (
          <li>{item.id}</li>
        ))}
      </ul>
    </section>
  );
};
export default User;
