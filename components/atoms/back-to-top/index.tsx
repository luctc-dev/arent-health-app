import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowTopSvg } from "@/icons";
import cls from "classnames";

const BackToTop = () => {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShow(window.scrollY > 50);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={cls(
        "w-[48px] h-[48px] cursor-pointer rounded-full flex justify-center items-center border border-solid border-gray-400 fixed right-[50px] bottom-[50px] transition-all",
        {
          "opacity-0 pointer-events-none": !isShow,
          "opacity-100 pointer-events-auto": isShow,
        }
      )}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      <ArrowTopSvg />
    </div>
  );
};

export default BackToTop;
