import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar-custom">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            PawFect Finder
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/map">
            Map
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/my-pets">
            My Pets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/find-pet">
            Find Pet
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/alerts">
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
