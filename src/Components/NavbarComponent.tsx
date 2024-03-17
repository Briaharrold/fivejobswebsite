import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from './assets/logo.webp';
import '../App.css';
function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-class"  data-bs-theme="dark">
      <Container>
        <Navbar.Brand> <img src={logo} alt={"logo the says 5 jobs"} className=" img-logo rounded" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} style={{ display: "flex", justifyContent: "end" }} to='/'><b>Freelanceing</b></Nav.Link>
            <Nav.Link as={Link} style={{ display: "flex", justifyContent: "end" }} to='/jobtwo'><b>FashionNova</b></Nav.Link>
            <Nav.Link as={Link} style={{ display: "flex", justifyContent: "end" }} to='/jobthree'><b>Open AI</b></Nav.Link>
            <Nav.Link as={Link} style={{ display: "flex", justifyContent: "end" }} to='/jobfour'><b>GitHub</b></Nav.Link>
            <Nav.Link as={Link} style={{ display: "flex", justifyContent: "end" }} to='/jobfive'><b>Discord</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;