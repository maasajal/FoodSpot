import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="menu">
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            {/* <img src="logo.png" alt="Book Circle logo" /> */}
            <strong>Food Spot</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/today-meal">Today's meal</Nav.Link>
              <Nav.Link href="/new-food">New Food</Nav.Link>
              <Nav.Link
                href="/add-recipe"
                title="Admin login. user id and password required"
              >
                Add Recipe
              </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbarBottomMargin"></div>
    </div>
  );
};
export default Header;
