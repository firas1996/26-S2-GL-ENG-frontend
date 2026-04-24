import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <h1>This is the Home page</h1>
      <h2>Welcome back .......</h2>
      <button onClick={logoutHandler}>LogOut</button>
    </div>
  );
};

export default Home;
