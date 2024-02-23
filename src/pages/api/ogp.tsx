import { NextApiRequest, NextApiResponse } from "next";
import { chromium } from "playwright";

const styles = `
  html, body {
    height: 100%;
    display: grid;
  }

  h1 { margin: auto; color: red; }
`;

const html = `
<!DOCTYPE html>
<html>
<head>
<style>
  html, body {
    height: 100%;
    display: grid;
  }
  h1 { margin: auto; color: red; }
</style>
</head>
<body>
  <h1>Title Placeholder</h1>
</body>
</html>
`;

const OGP = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(html.replace("Title Placeholder", "Default Title")); // タイトルを動的に置換
  const screenshot = await page.screenshot();
  await browser.close();

  // スクリーンショットをレスポンスとして返す
  res.setHeader("Content-Type", "image/png");
  res.send(screenshot);
};

export default OGP;
