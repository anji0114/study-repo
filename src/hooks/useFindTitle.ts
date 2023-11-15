import { MENU_ITEMS } from "@/constants/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type TItem = {
  title: string;
  href: string;
};

type TResponse = {
  title: string;
  codeUrl?: string;
  childTitles?: TItem[];
  parentItem?: TItem;
};

export const useFindTitle = (): TResponse => {
  const pathName = usePathname();
  const [title, setTitle] = useState("");
  const [codeUrl, setCodeUrl] = useState<string | undefined>(undefined);
  const [childTitles, setChildTitles] = useState<TItem[] | undefined>(undefined);
  const [parentItem, setParentItem] = useState<TItem | undefined>(undefined);

  useEffect(() => {
    let foundParentItem = undefined;
    let foundChildTitles = undefined;

    for (const item of MENU_ITEMS) {
      if (item.href === pathName) {
        setTitle(item.title);
        setCodeUrl(item.codeUrl);
        foundChildTitles = item.children
          ? item.children.map(({ title, href }) => ({ title, href }))
          : undefined;
      }

      if (item.children) {
        for (const child of item.children) {
          if (child.href === pathName) {
            setTitle(child.title);
            setCodeUrl(child.codeUrl);
            foundParentItem = { title: item.title, href: item.href };
          }
        }
      }
    }

    setChildTitles(foundChildTitles);
    setParentItem(foundParentItem);
  }, [pathName]);

  return { title, codeUrl, childTitles, parentItem };
};
