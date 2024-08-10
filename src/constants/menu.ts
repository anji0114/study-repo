export type TMenuItem = {
  title: string;
  href: string;
  codeUrl?: string;
  children?: {
    title: string;
    href: string;
    codeUrl?: string;
  }[];
};

export const MENU_ITEMS = [
  {
    title: "トップページ",
    href: "/",
  },
  {
    title: "基礎構文",
    href: "/basic",
  },
  {
    title: "実践",
    href: "/practice",
    children: [
      { title: "parameterの検索", href: "/practice/search-params" },
      { title: "QRCode生成", href: "/practice/qrcode" },
      { title: "ファイルの取り扱い", href: "/practice/file" },
    ],
  },

  {
    title: "React Query",
    href: "/react-query",
    children: [
      {
        title: "FETCH METHOD",
        href: "/react-query/fetch",
      },
      {
        title: "POST METHOD",
        href: "/react-query/post",
      },
      {
        title: "PATCH METHOD",
        href: "/react-query/patch",
      },
      {
        title: "DELETE METHOD",
        href: "/react-query/delete",
      },
      {
        title: "Infinity Query",
        href: "/react-query/infinity",
      },
    ],
  },
  {
    title: "状態管理",
    href: "/state-management",
    children: [
      { title: "Use State", href: "/state-management/use-state" },
      { title: "Context", href: "/state-management/context" },
      { title: "Redux", href: "/state-management/redux" },
      { title: "Recoil", href: "/state-management/recoil" },
    ],
  },
  {
    title: "Rendering",
    href: "/rendering",
    children: [
      { title: "ssr", href: "/rendering/ssr" },
      { title: "ssg", href: "/rendering/ssg" },
      { title: "isr", href: "/rendering/isr" },
    ],
  },
  {
    title: "テスト",
    href: "/front-test",
    children: [{ title: "ローディングテスト", href: "/front-test/loading-test" }],
  },
] as TMenuItem[];
