"use client";

import Container from "@/components/atoms/container";
import Filters from "@/components/molecules/filters";
import HeroBanner from "@/components/molecules/hero-banner";
import MealHistory from "@/components/molecules/meal-history";
import { useAuthenticated } from "@/hooks/useAuthenticated";

export default function Home() {
  useAuthenticated()

  return (
    <>
      <HeroBanner />
      <Container>
        <Filters
          onClick={(name) => {
            alert("Filter by " + name);
          }}
        />
        <MealHistory />
      </Container>
    </>
  );
}
