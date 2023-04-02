import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: "KEY" as string,
      clientSecret: "KEY" as string,
    }),
  ],
};

export default NextAuth(authOptions);
