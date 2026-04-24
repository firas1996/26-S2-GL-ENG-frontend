import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChangeHandler = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };
  const loginHandler = () => {
    axios
      .post("http://localhost:1234/users/signin", {
        email: userData.email,
        password: userData.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });

    console.log(userData);
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="container">
      <div className="form">
        <div className="divInp">
          <label>Email</label>
          <input
            type="text"
            onChange={onChangeHandler}
            name="email"
            value={userData.email}
          />
        </div>
        <div className="divInp">
          <label>Paassword</label>
          <input
            type="password"
            onChange={onChangeHandler}
            name="password"
            value={userData.password}
          />
        </div>
      </div>
      <div className="divBtn">
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
};

export default Login;
