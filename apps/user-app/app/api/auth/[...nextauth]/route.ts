import prisma from "@repo/db/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// import { NextApiRequest } from "next";
// import { NextRequest, NextResponse } from "next/server";

// export function GET(
//   req: NextRequest,
//   { params: { nextauth } }: { params: { nextauth: string[] } }
// ) {
//   console.log(nextauth);
//   return NextResponse.json({
//     msg: "Auth Handler",
//     req,
//   });
// }

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter Mail address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials): Promise<any> {
        // try {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.username || "",
          },
        });
        if (!user || user?.password !== credentials?.password) {
          return null;
        }
        // return {
        //   userId: user?.id,
        //   name: user?.fullname,
        //   email: user?.email,
        // };
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      token.userId = token.sub;
      console.log(token);
      console.log(user);
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      console.log(user);
      session.user.userId = token.userId;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
export const GET = handler;
export const POST = handler;
