import NextAuth, { DefaultSession } from "next-auth"

// 개인 회원 & 보호소 회원
declare module "next-auth" {
    interface Session {
      user: {
        email: string
        password: string
        name: string
        birth: string
        phone: string
        address: string
        detail_address: string
        shelter_name: string
        shelter_type: string
        ceo_name: string
        ceo_phone: string
      } & DefaultSession["user"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
      idToken?: string
    }
}