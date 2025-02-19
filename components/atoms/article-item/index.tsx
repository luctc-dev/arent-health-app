import React from "react";
import Link from "next/link";
import Image from "next/image";
import { TypeArticleItem } from "../../../store/reducer";

type Props = {
  data: TypeArticleItem;
};

const ArticleItem = ({ data }: Props) => {
  return (
    <div className="relative">
      <div className="relative before:content-[''] before:block before:pt-[62%]">
        <Image
          src={data.image}
          alt={data.image}
          width={100}
          height={100}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <p className="left-0 bottom-0 absolute font-Inter text-[15px] leading-[18px] text-light bg-primary-300 px-3 py-[3px]">
          {data.date}
        </p>
      </div>
      <h2 className="mt-2">
        <Link
          href="/"
          className="font-light text-[15px] leading-[22px] tracking-[0.075px] text-dark-500 block two-lines"
        >
          {data.title}
        </Link>
      </h2>
      <p className="font-light text-[12px] leading-[22px] tracking-[0.06px] text-primary-400">
        {data.tags}
      </p>
    </div>
  );
};

export default ArticleItem;
