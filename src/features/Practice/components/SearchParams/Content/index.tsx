"use client";
import { Sort } from "@/features/Practice/components/SearchParams/Sort";
import { List } from "@/features/Practice/components/SearchParams/List";
import { useQuery } from "@tanstack/react-query";
import { fetchUsersApi } from "@/features/Practice/services/fetchUsersApi";
import { useState } from "react";

export const SearchContent = () => {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, refetch } = useQuery(["users"], async () => {
    const response = await fetchUsersApi(keyword);
    return response;
  });

  return (
    <div>
      <Sort value={keyword} onChange={(value) => setKeyword(value)} onClick={refetch} />
      <div className="mt-10">{isLoading ? "ローディングnow" : <List data={data} />}</div>
    </div>
  );
};
