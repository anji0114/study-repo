import "@/styles/globals.css";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

type TOgpPageProps = {};

const OGP: NextPage<{ title: string; ogImageUrl: string }> = ({ title, ogImageUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content={String(1200)} />
        <meta property="og:image:height" content={String(630)} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <div>
        <div className="bg-gray-100 p-10">
          <h1 className=" text-center text-lg font-bold">{title}</h1>
        </div>
        <div className="px-10 py-5 mx-auto max-w-screen-lg space-y-4">
          <p className="leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
            dignissimos explicabo velit nemo, aspernatur, magni reprehenderit perspiciatis error
            ratione iure perferendis exercitationem voluptas dolorum debitis expedita fugiat Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
          </p>
          <p className="leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
            dignissimos explicabo velit nemo, aspernatur, magni reprehenderit perspiciatis error
            ratione iure perferendis exercitationem voluptas dolorum debitis expedita fugiat
            adipisci!
          </p>
          <p className="leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
            dignissimos explicabo velit nemo, aspernatur, magni reprehenderit perspiciati ratione
            iure perferendis exercitationem voluptas dolorum debitis expedita fugiat adipisci!
          </p>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = () => {
  return {
    props: {
      title: "タイトルが入ります！",
      ogpImage: `https://study-repo-eta.vercel.app/api/ogp`,
    },
  };
};

export default OGP;
