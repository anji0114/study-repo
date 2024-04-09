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
    title: "Styling",
    href: "/styling",
    children: [
      { title: "Tailwind css", href: "/styling/tailwind-css" },
      { title: "styled-components", href: "/styling/styled-components" },
      { title: "MUI", href: "/styling/mui" },
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
  { title: "SWR", href: "/swr" },
  { title: "React hooks form", href: "/react-hooks-form" },
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
    title: "Hooks",
    href: "/hooks",
    children: [
      { title: "Generate", href: "/a" },
      { title: "Migration", href: "/b" },
    ],
  },
  {
    title: "Test",
    href: "/testing",
    children: [
      { title: "Jest", href: "/a" },
      { title: "Testing Library", href: "/b" },
      { title: "Testing Library", href: "/c" },
    ],
  },
] as TMenuItem[];
