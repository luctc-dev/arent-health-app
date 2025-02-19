import Link from "next/link";
import cls from "classnames";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  label: ReactNode;
  href: string;
  count?: number;
};

const MenuItem = ({ icon, label, href, count }: Props) => {
  const pathname = usePathname();
  const hasBadge = typeof count === "number";
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cls(
        "flex items-center text-light font-light text-base relative p-2 pr-4",
        { "text-primary-400": isActive }
      )}
    >
      {icon && <span className="block mr-2">{icon}</span>}
      <span className="min-w-24">{label}</span>
      {hasBadge && (
        <span className="top-0 left-[23px] absolute w-4 h-4 rounded-full text-[10px] font-normal text-center leading-4 bg-primary-500 font-Inter">
          {count}
        </span>
      )}
    </Link>
  );
};

export default MenuItem;
