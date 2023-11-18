"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/features/ReactQuery/constants/queryKeys";
import Link from "next/link";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Fetch = () => {
  const { data, isLoading } = useQuery([QUERY_KEYS.POST], async () => {
    const response = await axios.get<TPost[]>("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  });

  return (
    <div>
      <p className="text-lg font-bold">記事の取得</p>
      {isLoading ? (
        "ローティング中"
      ) : (
        <ul className="border-t ">
          {data?.map((post) => (
            <li key={post.id} className="py-1 border-b border-gray-200">
              <Link className="inline-block" href={`/react-query/fetch/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
