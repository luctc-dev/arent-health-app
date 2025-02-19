import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  href: string;
};

const DrawerMenuItem = ({ label, href }: Props) => {
  return (
    <Link
      href={href}
      className="block text-lg py-[22px] px-8 text-light bg-gray-400 hover:bg-dark-300 transition-all"
    >
      {label}
    </Link>
  );
};

export default DrawerMenuItem;
