import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function BasicExample() {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Link to="/">
          {" "}
          <img src={logo} alt="logoClarusway" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              className="nav-link rounded-2"
              style={({ isActive }) => {
                return {
                display: isActive ? "inline" : "" ,
                borderBottom: isActive && "solid 1px red",
                background:
                    isActive && "linear-gradient( #F8F8FF 10%, #FF0000 130% )",
                color: isActive && "#800080",
                fontWeight: isActive ? "bold" : "",
                };
              }}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link rounded-2"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive && "solid 1px red",
                  background:
                    isActive && "linear-gradient( #F8F8FF 10%, #FF0000 130% )",
                  color: isActive && "#800080",
                  fontWeight: isActive ? "bold" : "",
                };
              }}
              to="/about"
            >
              About
            </NavLink>
            <a
              className="nav-link"
              href="https://github.com/Yunusplt"
              title="go to Github"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
