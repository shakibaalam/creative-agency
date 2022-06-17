import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Home from './Pages/Home/Home';
import NavBar from "./Pages/Home/NavBar";
import Profile from "./Pages/Profile/Profile";
import Projects from "./Pages/Profile/Projects";

function App() {
  return (
    <div>
      <NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </NavBar>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
