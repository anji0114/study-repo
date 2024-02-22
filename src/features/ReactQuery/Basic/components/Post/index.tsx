"use client";

import { PostValidator } from "@/libs/validators/PostValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormData = z.infer<typeof PostValidator>;

export const Post = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(PostValidator),
    defaultValues: {
      userId: 24,
      title: "",
      body: "",
    },
  });

  const {
    mutate: onPost,
    isLoading,
    data,
  } = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await axios.post<{ data: FormData; id: number }>(
        "https://jsonplaceholder.typicode.com/posts/",
        {
          data,
        }
      );

      return { ...response.data.data, id: response.data.id };
    },
    onError: (error: any) => {
      console.log(error.response.status);
    },
  });

  return (
    <div>
      <p className="text-lg font-bold">記事の作成</p>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit((data) => onPost(data))}>
        <div>
          <input
            placeholder="タイトル"
            className="w-full max-w-lg p-3 text-sm  border border-gray-200 shadow-sm rounded"
            {...register("title")}
          />
          {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
        </div>
        <div>
          <textarea
            placeholder="入力してください"
            className="w-full max-w-lg p-3 text-sm  border border-gray-200 shadow-sm rounded resize-y min-h-[80px]"
            {...register("body")}
          ></textarea>
          {errors.body && <p className="mt-1 text-sm text-red-500">{errors.body.message}</p>}
        </div>
        <button className="px-5 py-1 rounded bg-gray-600 text-white" type="submit">
          ボタン
        </button>
      </form>

      {data && (
        <div className="mt-5">
          <p className="font-bold text-lg">返り値 JSON</p>
          <p className="border border-gray-200 shadow-sm p-5">{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};
