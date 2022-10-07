import "../App.css";
// import axios from "axios";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../docs/logo.png";
import { BsFillLightningChargeFill } from "react-icons/bs"
import { RiCloseFill } from "react-icons/ri"
import { IconContext } from "react-icons";

function NavBar() {
  const [signIn, setSignIn] = useState(false);

  // function onSignIn() {
  //   axios
  //     .get(`https://api.letterboxd.com/api/v0/auth/token`, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //         Accept: "application/json",
  //       },
  //     })
  //     .then((res) => {})
  //     .catch((err) => console.log(err));
  // }

  return (
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
                {signIn ? (
                  <form className="sign-in">
                    <div className="fields">
                      <div className="close">

                    <IconContext.Provider value={{ size: '1.7rem', color: '#456'}}>
                    <RiCloseFill onClick={() => setSignIn(false)}/>
                    </IconContext.Provider>
                      </div>
                    <section className="col">
                    <label>Username or Email</label>
                    <input type="email"></input>
                    </section>
                    <section className="col">
                    <label>Password</label>
                    <input type="password"></input>
                    </section>
                    </div>
                  </form>
                ) : (
                  <Nav className="me-auto">
                    <Nav.Link onClick={() => setSignIn(true)}>
                      <span>sign in</span>
                    </Nav.Link>
                    <Nav.Link href="/create-account/">
                      <span>create account</span>
                    </Nav.Link>

                    {/* <NavDropdown title="USESRNAME" id="basic-nav-dropdown">
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
                  </NavDropdown> */}
                    {/* <Nav.Link href="/activity/">
                  <IconContext.Provider value={{ size: '1.5rem'}}>
                  <BsFillLightningChargeFill />
                    </IconContext.Provider>
                    </Nav.Link> */}
                    <Nav.Link href="/films/">
                      <span>films</span>
                    </Nav.Link>
                    <Nav.Link href="/lists/">
                      <span>lists</span>
                    </Nav.Link>
                    <Nav.Link href="/members/">
                      <span>members</span>
                    </Nav.Link>
                    <Nav.Link href="/journal/">
                      <span>journal</span>
                    </Nav.Link>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>

  );
}

export default NavBar;
