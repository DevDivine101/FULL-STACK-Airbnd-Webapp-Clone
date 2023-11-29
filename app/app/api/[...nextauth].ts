import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import  GithubProvider  from "next-auth/providers/github";
import  GoogleProvider  from "next-auth/providers/github";
import prisma from "@/prisma/libs/prismadb"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"



export const authOptions: AuthOptions ={
  adapter: PrismaAdapter(prisma),
  providers:[
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.Google_CLIENT_ID as string,
      clientSecret: process.env.Google_CLINET_SECRET as string
    }),
    CredentialsProvider({
      name:'credentals',
      credentials: {
        email: {label:'email', type: 'text'},
        password: {label: 'password', type: 'password'},
      },
      async authorize(credentials){

        if(!credentials?.email || !credentials?.password){
          throw new Error('Invalid credentials')
        }
        const user = await prisma.user.findUnique({
          where:{
            email: credentials.email
          }
        });
        if(!user || !user?.hashedPassword){
          throw new Error('Invalid credentials')
          // return  new Error('Invalid credentials')
        }
        const isCorrectPassword = await bcrypt.compare(
                credentials.password,
          user.hashedPassword
        );
        if(!isCorrectPassword){
          throw new Error('Invalid credentials')
        }
        return user;
      }
    })
  ]
}