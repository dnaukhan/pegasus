import React, { useState } from "react";
import VerticalNavbar from "../../components/VerticalNavbar";
import Dashboard from "./Dashboard";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";

const MainDashboard = () => {
  return (
    <Container fluid>
      {/* For Desktop and Tablet View */}
      <Row>
        <Col md={3} lg={3} className="d-none d-md-block">
          <VerticalNavbar />
        </Col>
        <Col md={9} lg={9} className="d-none d-md-block">
          <Dashboard />
        </Col>
      </Row>

      {/* For Mobile View */}
      <Row>
        <Col xs={12} className="d-md-none">
          <VerticalNavbar />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="d-md-none">
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
};

export default MainDashboard;
