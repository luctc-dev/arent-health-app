"use client"
import Container from "@/components/atoms/container";
import BodyRecordSection from "@/components/molecules/body-record-section";
import MyDiarySection from "@/components/molecules/my-diary-section";
import MyExerciseSection from "@/components/molecules/my-exercise-section";
import NavigationBlock from "@/components/molecules/navigation-block";
import { useAuthenticated } from "@/hooks/useAuthenticated";

const MyRecordPage = () => {
  useAuthenticated()

  return (
    <Container>
      <NavigationBlock />
      <BodyRecordSection />
      <MyExerciseSection />
      <MyDiarySection />
    </Container>
  );
};

export default MyRecordPage;
