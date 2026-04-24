import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  console.log(params);
  useEffect(() => {
    axios
      .get(`http://localhost:1234/users/${params.id}`)
      .then((res) => {
        setUser(res.data.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div>
      <h1>User Name: {user.name} </h1>
      <h1>User Email: {user.email} </h1>
    </div>
  );
};

export default UserDetails;
