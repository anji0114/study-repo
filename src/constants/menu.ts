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
    codeUrl: "https://github.com/anji0114/study-repo",
  },
  {
    title: "React Query",
    href: "/react-query",
    codeUrl: "https://github.com/anji0114/study-repo",
    children: [
      {
        title: "無限スクロール",
        href: "/react-query/infinity",
      },
    ],
  },
  {
    title: "状態管理",
    href: "/state-management",
    children: [
      { title: "Use State", href: "/a" },
      { title: "Context", href: "/b" },
    ],
  },
  {
    title: "Prisma",
    href: "/prisma",
    children: [
      { title: "Generate", href: "/a" },
      { title: "Migration", href: "/b" },
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
    title: "Firebase",
    href: "/firebase",
    children: [
      { title: "Generate", href: "/a" },
      { title: "Migration", href: "/b" },
    ],
  },
  {
    title: "Supabase",
    href: "/supabase",
    children: [
      { title: "Generate", href: "/a" },
      { title: "Migration", href: "/b" },
    ],
  },
  {
    title: "Graph QL",
    href: "/graph-ql",
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
