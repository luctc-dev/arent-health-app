"use client"

import Container from "@/components/atoms/container"
import ArticleList from "@/components/molecules/article-list"
import RecommendedCol from "@/components/molecules/recommended-col"
import { useAuthenticated } from "@/hooks/useAuthenticated"

const ColumnListPage = () => {
  useAuthenticated()

  return (
    <Container>
      <RecommendedCol />
      <ArticleList />
    </Container>
  )
}

export default ColumnListPage