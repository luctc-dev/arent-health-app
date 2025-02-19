import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/button";
import { StyledNavigationBlockItem } from "./index.styled";

type Props = {
  image: string;
  title: string;
  label: string;
  id: string;
};

const NavigationBlockItem = ({ image, title, label, id }: Props) => {
  const handleClick = () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <StyledNavigationBlockItem className="relative border-[24px] border-solid border-primary-300">
      <Image
        src={image}
        alt=""
        width={200}
        height={200}
        className="top-0 left-0 w-full h-full object-cover object-left]"
      />
      <div className="top-1/2 -translate-y-1/2 text-center z-[1] w-full">
        <h3 className="font-Inter text-[25px] leading-[30px] tracking-[0.125px] uppercase text-primary-300">
          {title}
        </h3>
        <Button
          variant="secondary"
          size="small"
          onClick={handleClick}
          className="mt-[10px] min-w-[160px]"
        >
          {label}
        </Button>
      </div>
    </StyledNavigationBlockItem>
  );
};

export default NavigationBlockItem;
