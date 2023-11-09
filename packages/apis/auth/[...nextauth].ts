import NextAuth, {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { supabase } from '../../../supabase/src/initSupabase';
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Supabase',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials?.email as string,
            password: credentials?.password as string,
          });
          if (error) {
            throw new Error(error.message);
          }
          if (data) {
            return Promise.resolve(data.user);
          }
          return Promise.resolve(null);
        } catch (error) {
          throw new Error('An error occurred while signing in.');
        }
      },
    }),
  ],

  pages: {
    signIn: '/signin',
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
};

export default NextAuth(authOptions);
