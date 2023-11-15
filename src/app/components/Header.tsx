"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MENU_ITEMS } from "@/constants/menu";

export const Header = () => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <header className="px-10 py-4 border-b border-gray-300">
      <ul className="flex flex-wrap items-center gap-x-10 gap-y-2">
        {MENU_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              className={clsx("underline-offset-2 hover:underline hover:opacity-70", {
                ["underline pointer-events-none"]: pathName === item.href,
              })}
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
