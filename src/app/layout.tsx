import "@/styles/globals.css";
import { Metadata } from "next";
import { QueryProvider } from "@/Providers/QueryProvider";
import { Header } from "@/components/layouts/Header";
import PageHead from "@/components/common/PageHead";

export const metadata: Metadata = {
  title: "STUDY FRONTEND",
  description: "Nothing worth doing is easy",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <body className=" text-gray-800">
        <QueryProvider>
          <Header />
          <div className="p-10">
            <PageHead />
            <div>{children}</div>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
