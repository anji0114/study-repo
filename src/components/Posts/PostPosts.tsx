"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
};

export const PostPosts = () => {
  const { getValues, register } = useForm<Post>();

  const {
    mutate: onSave,
    isLoading,
    data,
  } = useMutation({
    mutationFn: async () => {
      const values = getValues();
      const response = await axios.post<Post>("https://jsonplaceholder.typicode.com/posts/", {
        title: values.title,
        body: values.body,
        userId: values.userId,
      });
      return response.data;
    },
  });

  return (
    <div className="py-5">
      <div className="space-y-2">
        <div>
          <input
            className="w-[500px] p-2 border border-gray-300 rounded"
            placeholder="タイトル"
            {...register("title", { required: true, maxLength: 10 })}
          />
        </div>
        <div>
          <textarea
            className="w-[500px] p-2 border border-gray-300 rounded"
            placeholder="本文"
            {...register("body", { required: true, maxLength: 10 })}
          ></textarea>
        </div>
        <div>
          <input
            className="w-[500px] p-2 border border-gray-300 rounded"
            placeholder="ユーザーID"
            {...register("userId", { required: true, maxLength: 10 })}
          />
        </div>
        <div>
          <button className="bg-gray-900 text-white px-5 py-2 rounded" onClick={() => onSave()}>
            保存する
          </button>
        </div>
      </div>

      <div className="mt-10">
        {isLoading ? (
          "loading..."
        ) : (
          <div>
            <p>
              <span className="font-medium text-lg">タイトル:</span>
              {data?.title}
            </p>
            <p>
              <span className="font-medium text-lg">本文:</span>
              {data?.body}
            </p>
            <p>
              <span className="font-medium text-lg">ユーザーID:</span>
              {data?.userId}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
