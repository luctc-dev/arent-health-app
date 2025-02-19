import { StyledMyExerciseItem } from "./index.styled";

const MyExerciseItem = () => {
  return (
    <StyledMyExerciseItem>
      <div className="info">
        <p className="label">家事全般（立位・軽い）</p>
        <p className="label-kcal">26kcal</p>
      </div>
      <p className="minute">10 min</p>
    </StyledMyExerciseItem>
  );
};

export default MyExerciseItem;
