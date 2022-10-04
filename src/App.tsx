import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./docs/logo.png"
import { BsFillLightningChargeFill } from "react-icons/bs"

import { IconContext } from "react-icons";


function App() {
  return (
    <Router>
      <header className="site-header">
        <div>
          <Navbar className="color-nav" expand="lg">
            <Container>
              <Navbar.Brand href="/">
                <img
                className="site-logo"
                  src={logo}
                  alt="Letterboxd - Your life in film"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title="USESRNAME" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Home
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Films
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Diary
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Reviews
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      Watchlist
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      settings
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      subscriptions
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                      sign out
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/activity/">
                  <IconContext.Provider value={{ size: '1.5rem'}}>
                  <BsFillLightningChargeFill />
                    </IconContext.Provider>
                    </Nav.Link>
                  <Nav.Link href="/films/"><span>films</span></Nav.Link>
                  <Nav.Link href="/lists/"><span>lists</span></Nav.Link>
                  <Nav.Link href="/members/"><span>members</span></Nav.Link>
                  <Nav.Link href="/journal/"><span>journal</span></Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </Router>
  );
}

export default App;
