import React from "react";
import { MealItem } from "@/store/reducer";
import Image from "next/image";

type Props = {
  mealData: MealItem;
};

const MealHistoryItem = ({ mealData }: Props) => {
  return (
    <div className="relative">
      <div className="relative before:content-[''] before:block before:pt-[100%]">
        <Image
          src={mealData.image}
          alt={mealData.image}
          width={100}
          height={100}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="left-0 bottom-0 absolute font-Inter text-[15px] leading-[18px] text-light bg-primary-300 px-[10px] py-[7px]">
        {mealData.label}
      </div>
    </div>
  );
};

export default MealHistoryItem;
