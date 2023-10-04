import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const VerticalNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="sm"
      expanded={expanded}
      style={{ backgroundColor: "yellow" }}
    >
      <Navbar.Toggle
        onClick={() => setExpanded(!expanded)}
        aria-controls="basic-navbar-nav"
        className="mb-2"
      >
        &#9776; {/* Hamburger icon */}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#about">NFT Marketplace</Nav.Link>
          <Nav.Link href="#services">Tables</Nav.Link>
          <Nav.Link href="#contact">Kanban</Nav.Link>
          <Nav.Link href="#about">Profile</Nav.Link>
          <Nav.Link href="#services">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default VerticalNavbar;
