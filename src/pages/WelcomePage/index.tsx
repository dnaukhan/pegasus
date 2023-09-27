import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavbarSection from "../../components/NavbarSection";
import AuthForm from "../../components/AuthForm";

const WelcomePage = () => {
  return (
    <div className="wrapper">
      <Row>
        <Col className="d-flex justify-content-center">
          <AuthForm />
        </Col>

        <Col className="my-background">
          <NavbarSection />
        </Col>
      </Row>
    </div>
  );
};

export default WelcomePage;
