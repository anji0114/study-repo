import React from "react";

const RenderingSsrPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" });
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
};

export default RenderingSsrPage;
