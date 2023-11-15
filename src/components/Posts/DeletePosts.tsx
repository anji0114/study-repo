"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import axios from "axios";
import { FC } from "react";

interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

type Props = {
  onDelete: (id: string) => void;
};

export const DeletePosts: FC<Props> = ({ onDelete }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20`
      );
      return data;
    },
    onError: () => {
      alert("エラー発生！！！！");
    },
  });

  const handleDelete = async (id: string) => {
    await onDelete(id);
    // postの削除が成功した後、UI上のリストを更新
    queryClient.setQueryData<Post[]>(["post"], (oldData) =>
      oldData?.filter((post) => post.id !== id)
    );
    alert("ok");
  };

  if (isLoading) {
    return <p>ローディング中...</p>;
  }

  if (isError) {
    return <p>エラーが発生しました</p>;
  }

  return (
    <ul>
      {data?.map((post) => (
        <li
          key={post.id}
          onClick={() => {
            handleDelete(post.id);
          }}
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export const DeleteContent = () => {
  const { mutate: deleteMutate, isLoading } = useMutation(async (id: string) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  });

  return (
    <>
      {isLoading && <div className="fixed top-1/2 left-1/2">ローティング中</div>}
      <DeletePosts onDelete={deleteMutate} />
    </>
  );
};
