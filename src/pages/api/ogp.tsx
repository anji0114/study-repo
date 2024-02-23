import { NextApiRequest, NextApiResponse } from "next";
import * as playwright from "playwright-aws-lambda";

const OGP = async (req: NextApiRequest, res: NextApiResponse) => {
  // サイズの設定
  const viewport = { width: 1200, height: 630 };

  // ブラウザインスタンスの生成
  const browser = await playwright.launchChromium({ headless: true });
  const page = await browser.newPage({ viewport });

  // HTMLをセットして、ページの読み込み完了を待つ

  await page.goto("https://next-portfolio-anji0114.vercel.app/", { waitUntil: "networkidle" });

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
