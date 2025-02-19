import React from "react";
import { MY_DIARY_ID } from "@/constants";
import Button from "@/components/atoms/button";
import Col from "@/components/atoms/col";
import MyDiaryItem from "@/components/atoms/my-diary-item";
import Row from "@/components/atoms/row";

const MyDiarySection = () => {
  return (
    <div id={MY_DIARY_ID} className="mt-14">
      <h3 className="font-Inter text-[22px] leading-[27px] text-dark-500 font-normal tracking-[0.11px]">
        MY DIARY
      </h3>
      <Row gutter={12}>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
        <Col span={3}>
          <MyDiaryItem />
        </Col>
      </Row>
      <Button
        onClick={() => {
          alert("Loadmore");
        }}
        className="block mt-[30px] mx-auto"
      >
        記録をもっと見る
      </Button>
    </div>
  );
};

export default MyDiarySection;
