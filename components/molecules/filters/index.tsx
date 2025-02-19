"use client"

import React from "react";
import { CupSvg, KnifeSvg } from "@/icons";
import FilterItem from "@/components/atoms/filter-item";

type Props = {
  onClick: (filterName: string) => void;
};

const Filters = ({ onClick }: Props) => {
  return (
    <div className="flex gap-[84px] justify-center py-[25px]">
      <FilterItem
        icon={<KnifeSvg />}
        label="Morning"
        onClick={onClick}
        // onClick={() => onClick("morning")}
      />
      <FilterItem
        icon={<KnifeSvg />}
        label="Lunch"
        onClick={onClick}
        // onClick={() => onClick("lunch")}
      />
      <FilterItem
        icon={<KnifeSvg />}
        label="Dinner"
        onClick={onClick}
        // onClick={() => onClick("dinner")}
      />
      <FilterItem
        icon={<CupSvg />}
        label="Snack"
        onClick={onClick}
        // onClick={() => onClick("snack")}
      />
    </div>
  );
};

export default Filters;
