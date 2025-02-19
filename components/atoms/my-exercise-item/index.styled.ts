import tailwindConfig from "@/tailwind.config";
import styled from "styled-components";

export const StyledMyExerciseItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 16px;
  padding-bottom: 2px;
  border-bottom: 1px solid ${tailwindConfig.theme.extend.colors["gray-400"]};
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    top: 8px;
    left: 0;
    background-color: ${tailwindConfig.theme.extend.colors.light};
  }

  .minute {
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.09px;
    color: ${tailwindConfig.theme.extend.colors["primary-300"]};
  }

  .label {
    font-weight: 300;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.075px;
    color: ${tailwindConfig.theme.extend.colors.light};
  }

  .label-kcal {
    font-family: "Inter";
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.075px;
    color: ${tailwindConfig.theme.extend.colors["primary-300"]};
  }
`;
