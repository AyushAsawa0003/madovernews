import React, { useState } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

const App = () => {
  const [section, setSection] = useState("World");

  const [user, setUser] = useState([]);

  return (
    <>
      <Router>
        <NavBar setSection={setSection} section={section} user={user} />
        <Routes>
          <Route path="/" element={<Home section={section} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
