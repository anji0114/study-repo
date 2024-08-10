"use client";
import { Sort } from "@/features/Practice/SearchParams/components/Sort";
import { List } from "@/features/Practice/SearchParams/components/List";
import { fetchUsersApi } from "@/features/Practice/SearchParams/services/fetchUsersApi";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
