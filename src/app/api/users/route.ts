import { MOC_USERS } from "@/constants/moc/users";
import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest) => {
  const keyword = req.nextUrl.searchParams.get("keyword");

  const filteredUsers = keyword
    ? MOC_USERS.filter((user) => user.name.includes(keyword))
    : MOC_USERS;

  return NextResponse.json({ message: "success", data: filteredUsers }, { status: 200 });
};
