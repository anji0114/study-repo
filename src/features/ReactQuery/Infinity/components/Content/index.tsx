"use client";

import { fetchUsersApi } from "@/features/Practice/services/fetchUsersApi";
import { useInfiniteQuery } from "@tanstack/react-query";

export const InfinityContent = () => {
  const { data } = useInfiniteQuery({
    queryKey: ["INFINITY_USER_QUERY"],
    queryFn: async () => {
      return fetchUsersApi("");
    },
  });

  console.log(data);

  return <div></div>;
};
