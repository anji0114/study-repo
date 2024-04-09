"use client";

import { QRCodeCanvas } from "qrcode.react";

export const Content = () => {
  const onDownLoad = () => {
    const canvas = document.querySelector("canvas");
    // CanvasをPNG画像としてエクスポート
    if (!canvas) return;
    const pngUrl = canvas.toDataURL("image/png");

    // ダウンロード用のリンク要素を生成
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";

    // ダウンロードリンクをクリックしてダウンロードを実行
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const onShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "ウェブサイトのタイトル",
          text: "共有したいテキスト",
          url: "https://example.com", // ここに共有したいURLを入力
        })
        .then(() => console.log("成功しました！"))
        .catch((error) => console.log("共有に失敗しました", error));
    } else {
      // Web Share APIが利用不可能な場合の処理
      console.log("このブラウザでは共有機能がサポートされていません。");
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="border border-[#00b9c7] p-1 rounded-sm">
        <QRCodeCanvas
          value="https://google.com"
          size={128}
          bgColor={"#fff"}
          fgColor={"#00b9c7"}
          level={"L"}
          imageSettings={{
            src: "/next.svg",
            width: 32,
            height: 32,
            excavate: true,
          }}
        />
      </div>
      <button className="border border-gray-400 px-6 py-2 text-sm rounded" onClick={onDownLoad}>
        ダウンロード
      </button>
      <button className="bg-blue-400 text-white px-6 py-2 text-sm rounded" onClick={onShare}>
        共有
      </button>
    </div>
  );
};
