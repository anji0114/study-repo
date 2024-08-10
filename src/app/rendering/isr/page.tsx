import React from "react";

const RenderingIsrPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 10 },
  });
  const data = await response.json();

  return <div>{JSON.stringify(data)}</div>;
};

export default RenderingIsrPage;
