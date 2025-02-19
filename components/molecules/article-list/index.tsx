import React from "react";
import Button from "@/components/atoms/button";
import Col from "@/components/atoms/col";
import Row from "@/components/atoms/row";
import ArticleItem from "../../atoms/article-item";
import { useAppSelector } from "@/hooks/store";

const ArticleList = () => {
  const articles = useAppSelector((state) => state.articles);

  return (
    <div className="mt-14">
      <Row gutter={8} rowGap={18}>
        {articles.map((a) => {
          return (
            <Col span={3} key={a.id}>
              <ArticleItem data={a} />
            </Col>
          );
        })}
      </Row>
      <Button
        onClick={() => {
          alert("Loadmore");
        }}
        className="block mt-7 mx-auto"
      >
        記録をもっと見る
      </Button>
    </div>
  );
};

export default ArticleList;
