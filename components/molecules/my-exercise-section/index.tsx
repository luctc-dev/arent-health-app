import React from "react";
import { MY_EXERCISE_ID } from "@/constants";
import Col from "@/components/atoms/col";
import Row from "@/components/atoms/row";
import SectionHeader from "@/components/atoms/section-header";
import MyExerciseItem from "@/components/atoms/my-exercise-item";

const MyExerciseSection = () => {
  return (
    <div id={MY_EXERCISE_ID} className="px-6 py-4 mt-14 bg-dark-500">
      <SectionHeader
        title={
          <>
            MY
            <br />
            EXERCISE
          </>
        }
        dateStr="2021.05.21"
      />
      <div className="mt-1 pr-[26px]">
        <Row
          className="max-h-[192px] overflow-auto pr-3 scroll-bar"
          gutter={40}
          rowGap={8}
        >
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
          <Col span={6}>
            <MyExerciseItem />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MyExerciseSection;
