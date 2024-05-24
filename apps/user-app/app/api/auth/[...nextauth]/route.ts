import prisma from "@repo/db/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
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
        const isPasswordCorrect = await bcrypt.compare(
          credentials?.password || "",
          user?.password || ""
        );
        if (!user || !isPasswordCorrect) {
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
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      token.userId = token.sub;
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      // @ts-ignore
      session.user.userId = token.userId;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
export const GET = handler;
export const POST = handler;
