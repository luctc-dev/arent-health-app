import DrawerMenuItem from "@/components/atoms/drawer-menu-item";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { CloseSvg, MenuSvg } from "@/icons";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const listMenus = [
  {
    href: "/my-record",
    label: "自分の記録",
  },
  {
    href: "/",
    label: "体重グラフ",
  },
  {
    href: "/",
    label: "目標",
  },
  {
    href: "/",
    label: "選択中のコース",
  },
  {
    href: "/column-list",
    label: "コラム一覧",
  },
  {
    href: "/",
    label: "設定",
  },
];

const DrawerMenu = () => {
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(false);
  }, [pathname]);

  useOnClickOutside(dropdownRef, () => {
    setIsShow(false);
  });

  const handleClick = () => {
    setIsShow((preIsShow) => !preIsShow);
  };

  return (
    <div className="relative">
      {!isShow && <MenuSvg className="cursor-pointer" onClick={handleClick} />}
      {isShow && <CloseSvg className="cursor-pointer" onClick={handleClick} />}
      {isShow && (
        <div
          ref={dropdownRef}
          className="absolute w-[280px] top-full right-0 z-50"
        >
          {listMenus.map((menu) => {
            return (
              <DrawerMenuItem
                key={menu.href + menu.label}
                href={menu.href}
                label={menu.label}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DrawerMenu;
