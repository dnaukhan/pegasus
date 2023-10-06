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
    <Row className="mb-3 gx-3">
      {SmallCardsInfo.map((card) => {
        const { id, icon, title, description } = card;
        return (
          <Col key={id} sm={6} md={4} lg={2} className="mb-3">
            <div
              className="p-2"
              style={{
                borderRadius: 20,
                backgroundColor: "red",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  marginRight: 10,
                }}
              >
                {icon && icon}
              </div>
              <div>
                <span>{title}</span>
                <h5>{description}</h5>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default DashboardSmallCards;
