import styled from "styled-components";
import tailwindConfig from "@/tailwind.config";

export const StyledButton = styled.button`
  border: 0;
  outline: 0;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  color: ${tailwindConfig.theme.extend.colors.light};
  background: ${tailwindConfig.theme.extend.colors["primary-400"]};
  background-image: none;
  padding: 15px 20px;
  cursor: pointer;
  position: relative;

  &.btn-primary {
    min-width: 296px;
    background: none;

    span {
      position: relative;
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        32.95deg,
        ${tailwindConfig.theme.extend.colors["primary-300"]} 8.75%,
        ${tailwindConfig.theme.extend.colors["primary-400"]} 86.64%
      );
      transition: 0.3s ease;
    }

    &:hover::before {
      opacity: 0.9;
    }

    &.btn-small {
      min-width: 0;
    }
  }

  &.btn-secondary {
    background: ${tailwindConfig.theme.extend.colors["primary-400"]};
  }

  &.btn-small {
    font-size: 14px;
    line-height: 20px;
    padding: 2px 12px;
  }
`;
