"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FC } from "react";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export const GetPosts: FC = () => {
  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      return data;
    },
    onError: () => {
      alert("エラー発生！！！！");
    },
  });

  if (isLoading) {
    return <p>ローディング中...</p>;
  }

  if (isError) {
    return <p>エラーが発生しました</p>;
  }

  return (
    <ul>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
