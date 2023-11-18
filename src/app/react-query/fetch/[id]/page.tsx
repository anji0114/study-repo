import axios from "axios";
import { Metadata, NextPage } from "next";
import { isNotFoundError, notFound } from "next/dist/client/components/not-found";

type TPageType = {
  params: { id: number };
};

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPost = async (id: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      return { error: true, status: response.status, message: response.statusText };
    }

    const data = await response.json();
    return { error: false, data };
  } catch (error) {
    return { error: true, message: (error as Error).message };
  }
};

export const metadata: Metadata = {
  title: "Dynamic | STUDY FRONTEND",
  description: "Nothing worth doing is easy",
};

const page: NextPage<TPageType> = async ({ params }) => {
  const response = await fetchPost(params.id);

  if (!response.error) {
    const data = response.data;

    return (
      <div className="max-w-[800px] mx-auto">
        <h2 className="font-bold text-xl">{data.title}</h2>
        <p className="mt-6 leading-relaxed">{data.body}</p>
      </div>
    );
  } else {
    if (response.status === 404) {
      notFound();
    } else {
      return <div>予期せぬエラー</div>;
    }
  }
};

export default page;
