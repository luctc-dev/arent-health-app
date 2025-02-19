import React, { useState } from "react";
import { EyeDisableSvg, EyeSvg } from "@/icons";
import { StyledInput } from "./index.styled";

export type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = HTMLInputProps & {
  label: string;
  type?: string;
  className?: string;
};

function Input({ label, type = "text", className, ...restProps }: Props) {
  const [localType, setLocalType] = useState(type);

  function handleToggleShowPwd() {
    if (localType === "password") {
      setLocalType("text");
    } else if (localType === "text") {
      setLocalType("password");
    }
  }

  const showIconEye = type === "password" && localType === "password";
  const showIconEyeDisabled = type === "password" && localType === "text";

  return (
    <StyledInput className="relative mb-5">
      {label && <label className="block mt-[3px]">{label}</label>}
      <div className="relative">
        {showIconEye && (
          <EyeSvg
            className="toggle-password"
            onClick={handleToggleShowPwd}
            width="1em"
            height="1em"
          />
        )}
        {showIconEyeDisabled && (
          <EyeDisableSvg
            className="toggle-password"
            onClick={handleToggleShowPwd}
            width="1em"
            height="1em"
          />
        )}
        <input type={localType} className={className} {...restProps} />
      </div>
    </StyledInput>
  );
}

export default Input;
