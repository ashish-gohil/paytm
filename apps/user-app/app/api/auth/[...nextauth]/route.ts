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
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const a = new Promise((resolve, reject) => {
          setTimeout(resolve, 3000);
        });
        return await a.then();
      },
      // Return null if user data could not be retrieved
      //   },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
