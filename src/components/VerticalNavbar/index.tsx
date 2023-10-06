import React, { useState } from "react";
import { Col, Nav, Navbar } from "react-bootstrap";
import HomeIcon from "../../assets/icons/HomeIcon";
import CartIcon from "../../assets/icons/CartIcon";
import TableIcon from "../../assets/icons/TableIcon";
import KanbanIcon from "../../assets/icons/KanbanIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import SignInIcon from "../../assets/icons/SignInIcon";

const NavbarInfo = [
  {
    id: 0,
    icon: <HomeIcon />,
    title: "Dashboard",
    path: "#",
  },
  {
    id: 1,
    icon: <CartIcon />,
    title: "NFT Marketplace",
    path: "#",
  },
  {
    id: 2,
    icon: <TableIcon />,
    title: "Tables",
    path: "#",
  },
  {
    id: 3,
    icon: <KanbanIcon />,
    title: "Kanban",
    path: "#",
  },
  {
    id: 4,
    icon: <ProfileIcon />,
    title: "Profile",
    path: "#",
  },
  {
    id: 5,
    icon: <SignInIcon />,
    title: "Sign in",
    path: "#",
  },
];

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
          <Col className="mb-5">
            <h1>PEGASUS UI</h1>
          </Col>
          {NavbarInfo.map((nav) => {
            const { id, icon, title, path } = nav;
            return (
              <Nav.Link href={path} key={id}>
                {icon}
                <span style={{ marginLeft: 16 }}>{title}</span>
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default VerticalNavbar;
