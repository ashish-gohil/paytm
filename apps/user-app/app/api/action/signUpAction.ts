"use server";
import prisma from "@repo/db/client";
interface SignUpArgs {
  name: string;
  email: string;
  password: string;
}
export default async function ({ name, email, password }: SignUpArgs) {
  const user = await prisma.user.create({
    data: {
      email,
      password,
      fullname: name,
    },
  });
  return true;
}
