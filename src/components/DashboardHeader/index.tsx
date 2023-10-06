import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import BreadcrumbCol from "../Breadcrumb";
import StackInput from "../StackInput";

const DashboardHeader = () => {
  return (
    <Container>
      <Row style={{ backgroundColor: "aqua" }} className="align-items-center">
        <Col>
          <BreadcrumbCol />
          <h1>Main Dashboard</h1>
        </Col>
        <Col className="aligh">
          <StackInput />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardHeader;
