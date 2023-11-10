import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        // credentials part
    ],


    callbacks: {
        async jwt({ token, user }) {
            console.log('[...nextauth].ts > jwt()');
            return { ...token, ...user };
          },
          async session({ session, token }) {
            console.log('[...nextauth].ts > session()');
            session.user = token as any;
            return session;
          },
    },

}


export default NextAuth(authOptions); 