import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    providers: [
        // credentials part
    ],

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 //30일(맨 앞 숫자로 조정)
    },

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