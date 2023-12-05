import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";
import CardHighlight from "./components/CardHighlight";
import { useSubscription } from "mqtt-react-hooks";
import axios from "axios";
import UsagePieChart from "./components/UsagePieChart";
import TopVehicleBarChart from "./components/TopVehicleBatChart";
const Home = () => {
  const { message } = useSubscription(["test/realtime"]);
  const [realtimeData, setRealtimeData] = useState([]);
  const [topsCarsUsageData, setTopsCarsUsageData] = useState([]);
  const [usageFuel, setUsageFuel] = useState([]);

  const getRealtime = () => {
    axios.get("http://localhost:3001/realtime").then((res) => {
      setRealtimeData(res.data);
    });
    axios.get("http://localhost:3001/top-5-car-usage").then((res) => {
      setTopsCarsUsageData(res.data);
    });
    axios.get("http://localhost:3001/fuel-usage").then((res) => {
      setUsageFuel(res.data);
    });
  };
  useEffect(() => {
    getRealtime();
    if (message?.content === "get-realtime") {
      getRealtime();
    }
  }, [message]);

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Dashboard</BreadcrumbItem>
      </Breadcrumb>
      <CardHighlight
        data={realtimeData}
        sliderPerView={3}
      />

      <Row>
        <Col className="col-xl-8 col-12">
          <TopVehicleBarChart data={topsCarsUsageData} />
        </Col>
        <Col className="col-xl-4 col-12">
          <UsagePieChart data={usageFuel} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
