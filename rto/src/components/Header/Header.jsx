import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "./images/logo.jpg";
import map from "./images/map.jpg";
import find from "./images/find.jpg";
import alert from "./images/alert.jpg";
import profile from "./images/profile.jpg";
import mypets from "./images/mypets.jpg";

function Header() {
  return (
    <nav className="navbar-custom fixed-top">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <img src={logo} className="icon" />
            PawFect Finder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/map">
            <img src={map} className="icon" />
            Map
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            <img src={profile} className="icon" />
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/my-pets">
            <img src={mypets} className="icon" />
            My Pets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/find-pet">
            <img src={find} className="icon" />
            Find Pet
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/alerts">
            <img src={alert} className="icon" />
            Alerts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login/Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Header;
