import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
import Wrapper from "./components/Wrapper/Wrapper";
import Profile from "./containers/Profile/Profile";
import Map from "./containers/Map/Map";

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
