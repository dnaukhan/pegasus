import Breadcrumb from "react-bootstrap/Breadcrumb";

function BreadcrumbCol() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Pages</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Dashboard
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbCol;
