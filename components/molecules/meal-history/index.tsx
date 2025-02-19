import React from "react";
import Col from "@/components/atoms/col";
import Row from "@/components/atoms/row";
import Button from "@/components/atoms/button";
import Container from "@/components/atoms/container";
import MealHistoryItem from "../../atoms/meal-history-item";
import { useAppSelector } from "@/hooks/store";

const MealHistory = () => {
  const mealHistory = useAppSelector((state) => state.mealHistory);

  return (
    <div>
      <Container>
        <Row gutter={8}>
          {mealHistory.map((h) => {
            return (
              <Col key={h.id} span={3}>
                <MealHistoryItem mealData={h} />
              </Col>
            );
          })}
        </Row>
        <Button
          onClick={() => {
            alert("Loadmore");
          }}
          className="block mt-[28px] mx-auto"
        >
          記録をもっと見る
        </Button>
      </Container>
    </div>
  );
};

export default MealHistory;
