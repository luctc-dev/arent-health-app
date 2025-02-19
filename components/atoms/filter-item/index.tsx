import React, { ReactNode } from "react";
import { HexagonSvg } from "@/icons";

type Props = {
  icon: ReactNode;
  label: string;
  onClick: (filterName: string) => void;
};

const FilterItem = ({ icon, label, onClick }: Props) => {
  return (
    <div
      className="relative text-center cursor-pointer"
      onClick={() => onClick(label)}
    >
      <div></div>
      <HexagonSvg className="bg-hexagon" />
      <div className="inset-center">
        <span className="flex justify-center">{icon}</span>
        <span className="font-Inter font-normal text-[20px] leading-[24px] block mt-[5px] text-light">
          {label}
        </span>
      </div>
    </div>
  );
};

export default FilterItem;
