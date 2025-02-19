"use client"
import React, { ReactNode } from "react";
import { createContext } from "react";
import cls from "classnames";

type Props = {
  gutter?: number;
  rowGap?: number;
  className?: string;
  children?: ReactNode;
};

export const GutterContext = createContext(0);

const Row = ({ gutter = 0, children, className, rowGap }: Props) => {
  const rowStyle = {
    marginLeft: `-${gutter / 2}px`,
    marginRight: `-${gutter / 2}px`,
    rowGap: typeof rowGap === "number" ? `${rowGap}px` : `${gutter}px`,
  };

  return (
    <GutterContext.Provider value={gutter}>
      <div className={cls("flex flex-wrap", className)} style={rowStyle}>
        {children}
      </div>
    </GutterContext.Provider>
  );
};

export default Row;
