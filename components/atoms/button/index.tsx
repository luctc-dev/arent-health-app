import React, { RefObject } from "react";
import cls from "classnames";
import { StyledButton } from "./index.styled";

export type HTMLButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = HTMLButtonProps & {
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  ref?: RefObject<HTMLButtonElement>;
};

const Button = ({
  variant = "primary",
  className,
  children,
  size = "large",
  ...restProps
}: Props) => {
  const classes = cls(
    {
      ["btn-" + variant]: variant,
      ["btn-" + size]: size,
    },
    className
  );

  return (
    <StyledButton className={classes} {...restProps}>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
