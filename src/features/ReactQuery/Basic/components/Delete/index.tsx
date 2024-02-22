"use client";

import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/features/ReactQuery/Basic/constants/queryKeys";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Delete = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery([QUERY_KEYS.POST], async () => {
    const response = await axios.get<TPost[]>("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  });

  const { mutate: onDeletePost } = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData([QUERY_KEYS.POST], (oldData: TPost[] | undefined) => {
        if (typeof oldData === "undefined") return;
        return oldData.filter((post) => post.id !== id);
      });
    },
  });

  return (
    <div>
      <p className="text-lg font-bold">記事の削除</p>
      {isLoading ? (
        "ローティング中"
      ) : (
        <ul className="border-t ">
          {data?.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <span>{post.title}</span>
              <button
                className="text-[10px] text-red-400"
                onClick={() => {
                  onDeletePost(post.id);
                }}
              >
                削除する
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
