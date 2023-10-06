import { Col, Row, Stack } from "react-bootstrap";
import EarningsIcon from "../../assets/icons/EarningsIcon";
import DollarIcon from "../../assets/icons/DollarIcon";
import TotalProjectsIcon from "../../assets/icons/TotalProjectsIcon";

const SmallCardsInfo = [
  {
    id: 0,
    icon: <EarningsIcon />,
    title: "Earnings",
    description: "$350.4",
  },
  {
    id: 1,
    icon: <DollarIcon />,
    title: "Spend this month",
    description: "$642.39",
  },
  {
    id: 2,
    icon: "",
    title: "Sales",
    description: "$574.34",
    commentNumber: "+23%",
    commentText: "since last month",
  },
  {
    id: 3,
    icon: "",
    title: "Your balance",
    description: "$1,000",
  },
  {
    id: 4,
    icon: "",
    title: "NewTasks",
    description: "154",
  },
  {
    id: 5,
    icon: <TotalProjectsIcon />,
    title: "Total Projects",
    description: "2935",
  },
];
const DashboardSmallCards = () => {
  return (
    <Stack direction="horizontal" gap={4}>
      {SmallCardsInfo.map((card) => {
        const { id, icon, title, description } = card;
        return (
          <Row className="p-2" key={id} style={{ borderRadius: 20 }}>
            <Col>{icon && icon}</Col>
            <Col>
              <span>{title}</span>
              <h5>{description}</h5>
            </Col>
          </Row>
        );
      })}
    </Stack>
  );
};

export default DashboardSmallCards;
