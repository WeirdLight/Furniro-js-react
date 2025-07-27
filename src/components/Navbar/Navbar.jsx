import { Container, Navbar, Nav, Image } from "react-bootstrap";
import account from "./images/tools/account.svg";
import search from "./images/tools/search.svg";
import basket from "./images/tools/basket.svg";
import fav from "./images/tools/fav.svg";
import logo from "./images/logo.svg";

import "./index.scss"; 

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container className="navbar-container">
        <Navbar.Brand href="#home"><Image src={logo} alt="logo" /> Furniro</Navbar.Brand>
        <Navbar.Collapse className="navbar-pages">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="navbar-tools">
            <Nav>
            <Nav.Link href="#account"><Image src={account} alt="account" /></Nav.Link>
            <Nav.Link href="#search"><Image src={search} alt="search" /></Nav.Link>
            <Nav.Link href="#fav"><Image src={fav} alt="fav" /></Nav.Link>
            <Nav.Link href="#basket"><Image src={basket} alt="basket" /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}