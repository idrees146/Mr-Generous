import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import connectDb from '@/db/connectDb';
import User from '@/models/User';
import Payment from '@/models/Payment';

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: true,

  httpOptions: {
    timeout: 10000, // 10 seconds timeout
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDb();
        // Check if the user exists in the database
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          // Create a new user if they do not exist
          await User.create({
            email: user.email,
            username: user.email.split('@')[0],
            image: user.image || profile.picture, // Optional: Save profile image
          });
        }
        return true;
      } catch (error) {
        console.error('Error during signIn callback:', error);
        return false;
      }
    },

    async session({ session, token }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.id = dbUser._id.toString();
          session.user.name = dbUser.username; // Sync the username
        }
        return session;
      } catch (error) {
        console.error('Error during session callback:', error);
        return session;
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Pass user ID in token
      }
      return token;
    },
  },

  pages: {
    signIn: '/auth/signin', // Custom sign-in page if needed
    error: '/auth/error', // Error page if there's an issue
  },

  secret: process.env.NEXTAUTH_SECRET, // Secure token signing
});

// Named export for GET and POST methods
export const GET = authoptions;
export const POST = authoptions;

