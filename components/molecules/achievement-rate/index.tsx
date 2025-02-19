"use client";
import React from "react";
import Image from "next/image";
import { StyledAchievementRate } from "./index.styled";
import { CircularProgressbar } from "@/components/atoms/circular-progressbar";

type Props = {
  label: string;
  percentage: number;
};

const AchievementRate = ({ label, percentage }: Props) => {
  return (
    <StyledAchievementRate className="absolute top-0 left-0 right-0 bottom-0">
      <Image
        alt=""
        width={540}
        height={540}
        src="/images/d01.jpg"
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="inset-center">
        <CircularProgressbar value={percentage} />
        <p className="inset-center m-0 font-Inter font-normal text-lg text-light text-shadow">
          <span>{label}</span>
          <span className="text-[25px] leading-[30px] pl-1">{percentage}%</span>
        </p>
      </div>
    </StyledAchievementRate>
  );
};

export default AchievementRate;
