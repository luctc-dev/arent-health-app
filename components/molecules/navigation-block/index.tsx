import React from "react";
import { BODY_RECORD_ID, MY_DIARY_ID, MY_EXERCISE_ID } from "@/constants";
import Col from "@/components/atoms/col";
import Row from "@/components/atoms/row";
import NavigationBlockItem from "@/components/atoms/navigation-block-item";

const data = [
  {
    id: BODY_RECORD_ID,
    image: "/images/MyRecommend-1.jpg",
    title: "Body record",
    label: "自分のカラダの記録",
  },
  {
    id: MY_EXERCISE_ID,
    image: "/images/MyRecommend-2.jpg",
    title: "My exercise",
    label: "自分の運動の記録",
  },
  {
    id: MY_DIARY_ID,
    image: "/images/MyRecommend-3.jpg",
    title: "My diary",
    label: "自分の日記",
  },
];

const NavigationBlock = () => {
  return (
    <div className="mt-14">
      <Row gutter={48}>
        {data.map((d) => {
          return (
            <Col span={4} key={d.id}>
              <NavigationBlockItem {...d} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default NavigationBlock;
