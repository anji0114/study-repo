import { MENU_ITEMS } from "@/constants/menu";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex gap-3 flex-wrap justify-between">
        {MENU_ITEMS.map(
          (item) =>
            item.href !== "/" && (
              <li
                key={item.href}
                className="w-[calc((100%_-_12px)_/_2)] bg-gray-50 px-6 py-4 rounded shadow-sm border border-gray-200"
              >
                <Link
                  className="font-bold underline-offset-2 hover:underline hover:opacity-70"
                  href={item.href}
                >
                  {item.title}
                </Link>
                {!!item.children?.length && (
                  <ul className="space-y-1 mt-2 pl-4">
                    {item.children.map((child) => (
                      <li className=" list-disc text-sm" key={child.href}>
                        <Link
                          className=" underline-offset-2 hover:underline hover:opacity-70"
                          href={child.href}
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
        )}
      </ul>
    </main>
  );
}
