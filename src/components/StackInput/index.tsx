import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import BellIcon from "../../assets/icons/BellIcon";
import ThemeIcon from "../../assets/icons/ThemeIcon";
import InformationIcon from "../../assets/icons/InformationIcon";

function StackInput() {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="me-auto" placeholder="Add your item here..." />
      <div className="vr" />
      <Button variant="outline-danger">
        <BellIcon />
      </Button>
      <Button variant="outline-danger">
        <ThemeIcon />
      </Button>
      <Button variant="outline-danger">
        <InformationIcon />
      </Button>
      <Button variant="outline-danger">
        <img src={require("../../assets/images/Avatar.png")} alt="Avatar" />
      </Button>
    </Stack>
  );
}

export default StackInput;
