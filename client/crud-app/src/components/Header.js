import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Brand href="#">
          <h2>CRUD APP</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
