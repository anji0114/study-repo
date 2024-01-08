import { TUser } from "@/features/Practice/types/user";
import React, { FC } from "react";

type TListProps = {
  data: TUser[] | undefined;
};

export const List: FC<TListProps> = ({ data }) => {
  return (
    <ul className="space-y-0.5">
      {data?.map((item) => (
        <li className="bg-gray-100 p-1 flex gap-2" key={item.id}>
          <span>{item.id}.</span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};
