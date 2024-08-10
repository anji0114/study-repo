import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type TPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export const usePosts = () => {
  return useQuery<TPost[]>(["posts"], async () => {
    const response = await axios.get<TPost[]>("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  });
};
