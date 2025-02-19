import React, { ReactNode } from "react";

type Props = {
  title: ReactNode;
  dateStr: string;
};

const SectionHeader = ({ title, dateStr }: Props) => {
  return (
    <div className="text-light font-Inter flex items-center">
      <p className="text-[15px] leading-[18px] tracking-[0.15px] pr-5">
        {title}
      </p>
      <p className="text-[22px] leading-[27px] tracking-[0.11px]">{dateStr}</p>
    </div>
  );
};

export default SectionHeader;
