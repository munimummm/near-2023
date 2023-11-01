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
        async jwt({ token, account, profile }) {
            if (account) {
              token.accessToken = account.access_token
            //   token.id = profile.id
            }
            return token
        },

        async session({ session, token, user }) {
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        }
    },

}


export default NextAuth(authOptions); 