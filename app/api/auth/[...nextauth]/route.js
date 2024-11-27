import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
 
 

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


  pages: {
    signIn: '/auth/signin', // Custom sign-in page if needed
    error: '/auth/error', // Error page if there's an issue
  },

  secret: process.env.NEXTAUTH_SECRET, // Secure token signing
});

// Named export for GET and POST methods
export const GET = authoptions;
export const POST = authoptions;

