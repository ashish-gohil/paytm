import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "Enter phone number",
          required: true,
        },
        password: { label: "Password", type: "password", required: true },
      },
      // TODO: User credentials type from next-aut
      //@ts-ignore
      async authorize(credentials) {
        // Do zod validation, OTP validation here
        const hashedPassword = await bcrypt.hash(
          credentials?.password || "",
          10
        );
        const existingUser = await db.user.findFirst({
          where: {
            mobileNumber: credentials?.phone,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials?.password || "",
            existingUser.password
          );
          if (passwordValidation) {
            return existingUser;
          }
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    // TODO: can u fix the type here? Using any is bad
    async session({ token, session }: any) {
      session.user.id = token.sub;

      return session;
    },
  },
};
