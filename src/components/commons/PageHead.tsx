"use client";

import { useFindTitle } from "@/hooks/useFindTitle";
import { ArrowLeftCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const PageHead = () => {
  const { title, codeUrl, childTitles, parentItem } = useFindTitle();

  if (!title) return null;

  return (
    <div className="mb-10">
      {parentItem && (
        <Link className="flex items-center gap-1 mb-2 text-blue-400 text-sm" href={parentItem.href}>
          <ArrowLeftCircleIcon className="w-4" />
          {parentItem.title}
        </Link>
      )}
      <h1 className="flex items-center gap-4 justify-between border-l-4  text-xl font-bold p-4 rounded border-blue-400 bg-gray-50">
        {title}
        {codeUrl && (
          <Link
            className="w-7 rotate-45 text-blue-400 hover:opacity-70"
            href={codeUrl}
            target="_blank"
          >
            <ArrowUpCircleIcon />
          </Link>
        )}
      </h1>
      {childTitles && (
        <ul className="w-[calc(100%_-_4px)] ml-auto mt-2 px-4 py-2 border-l-4 border-gray-300 rounded space-y-1 bg-gray-50">
          {childTitles.map((item) => (
            <>
              <li className="text-sm list-disc list-inside" key={item.href}>
                <Link className="underline underline-offset-2 hover:text-blue-500" href={item.href}>
                  {item.title}
                </Link>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PageHead;
