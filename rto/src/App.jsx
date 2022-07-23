import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
import Map from "./containers/Map/Map";
import Profile from "./containers/Profile/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
