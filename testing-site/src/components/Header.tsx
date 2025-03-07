import { Navbar, Nav, NavDropdown, Col, Row } from "react-bootstrap";
import TransFlag from "./TransFlag";
import "./Style.css"

function Header() {
  return(
  <Navbar expand="lg" className="bg-body-secondary" fixed="top" style={{padding: "0px"}}>
      <Navbar.Brand style={{paddingLeft: "20px", paddingBottom: "0px", paddingTop: "0px"}}>
        <Row>
          <Col style={{padding: "10px"}}>
            <img 
              src="src/assets/avatar.png"
              width="60"
              height="auto"
            />
          </Col>
          <Col>
            <TransFlag/>
          </Col>
          <Col className="align-self-center">
            <Row>
              Alice
            </Row>
            <Row>
              Ferreira
            </Row>
          </Col>
        </Row>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header;