import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Modal } from "react-bootstrap";
import React from "react";
import AddForm from "./AddForm";

class Logout extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container style={{ maxWidth: "1600px" }}>
          <Navbar.Brand href="#home">QUIZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavDropdown title="Quiz-Type" id="collasible-nav-quiztype">
                <NavDropdown.Item href="#Math">Math</NavDropdown.Item>
                <NavDropdown.Item href="#Literature">
                  Literature
                </NavDropdown.Item>
                <NavDropdown.Item href="#English">English</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                title="Logout"
                id="collasible-nav-logout"
                style={{ marginRight: "70px" }}
              >
                <NavDropdown.Item href="acount">
                  <Button>Acount</Button>
                </NavDropdown.Item>
                <NavDropdown.Item href="admin">
                  <Button>Admin</Button>
                </NavDropdown.Item>
                <NavDropdown.Item href="#ChangeInformation">
                  <Button
                    onClick={() => {
                      this.handleModal();
                    }}
                  >
                    Change Infor
                  </Button>
                  
                  <Modal show={this.state.show}>
                    <Modal.Header>Information</Modal.Header>
                    <Modal.Body>
                      <AddForm />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => {
                          this.handleModal();
                        }}
                      >
                        Close
                      </Button>
                      <Button>Save</Button>
                    </Modal.Footer>
                  </Modal>
                </NavDropdown.Item>
                <NavDropdown.Item href="logout">
                  <Button>Logout</Button>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Logout;