import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
function Header() {
  return (
    <Navbar className="navbar-custom">
        <Container>
            <Navbar.Text>
                Pawfect  Finder
            </Navbar.Text>
        </Container>
    </Navbar>

  );
}

export default Header;