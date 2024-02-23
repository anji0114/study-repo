import { NextApiRequest, NextApiResponse } from "next";
import ReactDOM from "react-dom/server";
import * as playwright from "playwright-aws-lambda";

const styles = `
  html, body {
    height: 100%;
    display: grid;
  }

  h1 { margin: auto; color: red; }
`;

const Content = (props: { title: string }) => (
  <html>
    <head>
      <style>{styles}</style>
    </head>
    <body>
      <h1>{props.title}</h1>
    </body>
  </html>
);

const OGP = async (req: NextApiRequest, res: NextApiResponse) => {
  // サイズの設定
  const viewport = { width: 1200, height: 630 };

  // ブラウザインスタンスの生成
  const browser = await playwright.launchChromium();
  const page = await browser.newPage({ viewport });

  // HTMLの生成
  const props = { title: "Hello OGP!" };
  const markup = ReactDOM.renderToStaticMarkup(<Content {...props} />);
  const html = `<!doctype html>${markup}`;

  // HTMLをセットして、ページの読み込み完了を待つ
  await page.setContent(html, { waitUntil: "domcontentloaded" });

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
