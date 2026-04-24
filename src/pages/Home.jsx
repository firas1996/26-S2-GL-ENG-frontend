import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1234/users")
      .then((res) => {
        const users = res.data.data.users.map((item) => {
          return { id: item._id, name: item.name };
        });
        setUsersList(users);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const usersItems = usersList.map((item) => {
    return (
      <Link to={`/details/${item.id}`}>
        <li>{item.name}</li>
      </Link>
    );
  });
  return (
    <div>
      <button onClick={logoutHandler}>LogOut</button>
      <ul>{usersItems}</ul>
    </div>
  );
};

export default Home;
