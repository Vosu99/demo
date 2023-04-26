import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, Outlet} from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{maxWidth: "1600px"}}>
        <Navbar.Brand href=" home">QUIZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Quiz-Type" id="collasible-nav-quiztype">
              <NavDropdown.Item href="#Math">Math</NavDropdown.Item>
              <NavDropdown.Item href="#Literature">
              Literature
              </NavDropdown.Item>
              <NavDropdown.Item href="English">English</NavDropdown.Item>      
            </NavDropdown>
          </Nav>
          <Nav >
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default CollapsibleExample;