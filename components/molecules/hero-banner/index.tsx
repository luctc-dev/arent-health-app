import React from "react";
import Row from "@/components/atoms/row";
import Col from "@/components/atoms/col";
import BodyWeightChart from "../body-weight-chart";
import AchievementRate from "@/components/molecules/achievement-rate";

const HeroBanner = () => {
  return (
    <div>
      <Row>
        <Col className="relative" span={5}>
          <AchievementRate percentage={75} label="05/21" />
        </Col>
        <Col className="relative" span={7}>
          <BodyWeightChart />
        </Col>
      </Row>
    </div>
  );
};

export default HeroBanner;
