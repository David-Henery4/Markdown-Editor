import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt"

export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        let userRole = "Google User";
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    //
    GitHubProvider({
      profile(profile) {
        let userRole = "Github User";
        // Setting myself up as admin role
        if (profile.email == process.env.MY_ADMIN_EMAIL) {
          userRole = "admin";
        }
        //
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    //
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Your-username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Your-password",
        },
      },
      async authorize(credentials) {
        try {
          const foundUser = await User.findOne({
            username: credentials.username,
          })
            .lean()
            .exec();
          //
          if (foundUser) {
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            //
            if (match) {
              delete foundUser.password;
              foundUser["role"] = "unverifed Email User";
              return { ...foundUser };
            }
          }
        } catch (error) {
          console.log(error);
        }
        // null = If user isn't found
        return null;
      },
    }),
  ],
  //
  callbacks: {
    // Add role to token - to be accessed on server side
    // (Server Side)
    async jwt({ token, user, session }) {
      if (user) {
        return {
          ...token,
          id: user._id,
          username: user.username,
          role: user.role,
        };
      }
      return token;
    },
    // (Client Side)
    async session({ session, token, user }) {
      return {
        ...session.user,
        id: token.id,
        username: token.username,
        role: token.role,
      };
    },
  },
  //
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    // signIn: "/auth/signin"
  }
};