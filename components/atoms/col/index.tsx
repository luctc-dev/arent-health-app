"use client"
import React from "react";
import { ReactNode } from "react";
import { useContext } from "react";
import { GutterContext } from "../row";

type Props = {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  children?: ReactNode;
};

const Col = ({ span = 12, className, children }: Props) => {
  const gutter = useContext(GutterContext);
  const colStyle = {
    width: `${(100 / 12) * span}%`,
    paddingLeft: `${gutter / 2}px`,
    paddingRight: `${gutter / 2}px`,
  };

  return (
    <div className={className} style={colStyle}>
      {children}
    </div>
  );
};

export default Col;
