import FirstComp from "./components/FirstComp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserDetails from "./pages/Users/UserDetails";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Home} />
        <Route path="/details/:id" Component={UserDetails} />
      </Routes>
    </>
  );
};
export default App;
