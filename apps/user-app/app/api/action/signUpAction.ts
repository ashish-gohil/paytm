"use server";
import prisma from "@repo/db/client";
import bcrypt from "bcrypt";
interface SignUpArgs {
  name: string;
  email: string;
  password: string;
  mobile: string;
}
export default async function ({ name, email, password, mobile }: SignUpArgs) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      mobileNumber: mobile,
      fullname: name,
      availableBalance: 0,
      lockedBalance: 0,
    },
  });
  if (user) return true;
  else {
    return false;
  }
}
