import FirstComp from "./components/FirstComp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/");
  }
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" Component={Home} />
      </Routes>
    </>
  );
};
export default App;
