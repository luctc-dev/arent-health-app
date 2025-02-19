import styled from "styled-components";
import tailwindConfig from "@/tailwind.config";

export const StyledAchievementRate = styled.div`
  .text-shadow {
    text-shadow: 0px 0px 6px ${tailwindConfig.theme.extend.colors["primary-500"]};
  }

  .CircularProgressbar {
    width: 181px;

    .CircularProgressbar-trail {
      stroke: transparent;
    }

    .CircularProgressbar-path {
      stroke-linecap: square;
      stroke-width: 1px;
      stroke: ${tailwindConfig.theme.extend.colors.light};
      box-shadow: 0px 0px 6px ${tailwindConfig.theme.extend.colors["primary-500"]};
    }
  }
`;
