import tailwindConfig from "@/tailwind.config";
import styled from "styled-components";

export const StyledNavigationBlockItem = styled.div`
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    background-color: ${tailwindConfig.theme.extend.colors["dark-500"]};
  }

  & > * {
    position: absolute;
  }

  img {
    filter: grayscale(100%);
  }
`;
