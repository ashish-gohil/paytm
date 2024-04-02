import prisma from "@repo/db/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { API_URL } from "@repo/common/index";

const url = API_URL;

export async function GET(req: NextApiRequest) {
  const user1 = await prisma.user.create({
    data: {
      email: "tesjkt@1234q1.com",
    },
  });
  console.log(url);
  return NextResponse.json({ msg: "test", user1 }, { status: 200 });
}
