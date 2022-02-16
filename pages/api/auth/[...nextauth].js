import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
 
 secret: '73OVB0KI2kBr41Pw2qpZZ2P1gkFoxlCcZxYV72E+NrA=',

  pages:{
      signIn: "/auth/signin",
  },
}) 
