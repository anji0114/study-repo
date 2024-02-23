import { NextApiRequest, NextApiResponse } from "next";
import ReactDOM from "react-dom/server";
import * as playwright from "playwright-aws-lambda";

const Content = (props: { title: string }) => (
  <html>
    <head></head>
    <body
      style={{
        boxSizing: "border-box",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: "40px",
            margin: "-10px -10px 0",
            fontSize: "18px",
            backgroundColor: "#fafafa",
            backgroundImage: "url(http://localhost:3000/image/image.webp)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          タイトルが入ります
        </h1>
        <div style={{ padding: "20px 40px", lineHeight: "1.75" }}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
            dignissimos explicabo velit nemo, aspernatur, magni reprehenderit perspiciatis error
            ratione iure perferendis exercitationem voluptas dolorum debitis expedita fugiat Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
            dignissimos explicabo velit nemo, aspernatur, magni reprehenderit perspiciatis error
            ratione iure perferendis exercitationem voluptas dolorum debitis expedita fugiat
            adipisci!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi recusandae veniam
            dignissimos explicabo velit nemo, aspernatur, magni reprehenderit perspiciati ratione
            iure perferendis exercitationem voluptas dolorum debitis expedita fugiat adipisci!
          </p>
        </div>
      </div>
    </body>
  </html>
);

const OGP = async (req: NextApiRequest, res: NextApiResponse) => {
  // サイズの設定
  const viewport = { width: 1200, height: 630 };

  // ブラウザインスタンスの生成
  const browser = await playwright.launchChromium();
  const page = await browser.newPage({ viewport });

  // HTMLをセットして、ページの読み込み完了を待つ
  await page.goto("https://study-repo-eta.vercel.app/ogp", { waitUntil: "networkidle" });

  // スクリーンショットを取得する
  const image = await page.screenshot({ type: "png" });
  await browser.close();

  // Vercel Edge Networkのキャッシュを利用するための設定
  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");

  // Content Type を設定
  res.setHeader("Content-Type", "image/png");

  // レスポンスを返す
  res.end(image);
};

export default OGP;
