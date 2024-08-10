import React from "react";

const RenderingSsgPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
};

export default RenderingSsgPage;
