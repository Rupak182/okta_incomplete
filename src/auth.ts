import NextAuth from "next-auth";
import OktaProvider from "next-auth/providers/okta";

export const { handlers, signIn, signOut, auth } = NextAuth({
providers: [
  OktaProvider({
    clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
    clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET,
    issuer: process.env.OKTA_OAUTH2_ISSUER,

  })
]
})