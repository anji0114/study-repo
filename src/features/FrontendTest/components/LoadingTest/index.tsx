"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { usePosts } from "../../hooks/usePosts/index.";

type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const LoadingTest = () => {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) return <p className="text-center">ローディング中</p>;

  if (isError) return <p>エラー発生</p>;

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li className="py-2 border-b border-b-gray-100" key={item.id}>
            {index}. {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
