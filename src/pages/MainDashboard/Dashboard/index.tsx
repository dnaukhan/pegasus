import React from "react";
import BreadcrumbCol from "../../../components/Breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import StackInput from "../../../components/StackInput";
import DashboardHeader from "../../../components/DashboardHeader";
import DashboardSmallCards from "../../../components/DashboardSmallCards";

const Dashboard = () => {
  return (
    <Container>
      <DashboardHeader />
      <DashboardSmallCards />
    </Container>
  );
};

export default Dashboard;
