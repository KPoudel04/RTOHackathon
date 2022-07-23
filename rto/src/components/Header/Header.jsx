import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
function Header() {
  return (
    <nav class="navbar-custom">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            PawFect Finder
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#!">
            Map
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/profile">
            <img src="user.png" /> Profile
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            MyPets
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            FindPet
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            Alerts
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            LOGOUT
          </a>
        </li>
      </ul>
    </nav>
  );
}
//Users/DIVINE/Desktop/Hackerton/RTOHackathon/rto/src/components/Header/user.png

export default Header;
