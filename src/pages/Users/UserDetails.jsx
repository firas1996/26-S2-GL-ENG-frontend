import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:1234/users/${id}`)
      .then((res) => {
        setUser(res.data.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);
  return (
    <div>
      <h1>User Name: {user.name} </h1>
      <h1>User Email: {user.email} </h1>
    </div>
  );
};

export default UserDetails;
