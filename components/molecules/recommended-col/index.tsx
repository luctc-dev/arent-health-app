import React from "react";
import Col from "@/components/atoms/col";
import Row from "@/components/atoms/row";
import RecommendedItem from "@/components/atoms/recommended-item";

const RecommendedCol = () => {
  return (
    <div className="mt-14">
      <Row gutter={32}>
        <Col span={3}>
          <RecommendedItem title="RECOMMENDED COLUMN" subTitle="オススメ" />
        </Col>
        <Col span={3}>
          <RecommendedItem title="RECOMMENDED DIET" subTitle="ダイエット" />
        </Col>
        <Col span={3}>
          <RecommendedItem title="RECOMMENDED BEAUTY" subTitle="美容" />
        </Col>
        <Col span={3}>
          <RecommendedItem title="RECOMMENDED HEALTH" subTitle="健康" />
        </Col>
      </Row>
    </div>
  );
};

export default RecommendedCol;
