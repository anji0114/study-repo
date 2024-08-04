import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  if (params.id === "bbb") {
    return notFound();
  }

  return <div>表示</div>;
};

export default page;
