import authConfig from "@/auth.config"
import {
  API_AUTH_PREFIX,
  LOGIN_SUCCESS_REDIRECT,
  authRoutes,
  publicRoutes,
} from "@/route.config"
import NextAuth from "next-auth"
import { NextResponse } from "next/server"

export const { auth } = NextAuth(authConfig)

export default auth(async (req) => {
  const { nextUrl } = req

  const isLoggedIn = !!req.auth
  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) return NextResponse.next()

  if (isLoggedIn && isAuthRoute)
    return NextResponse.redirect(new URL(LOGIN_SUCCESS_REDIRECT, nextUrl))

  if (!isLoggedIn && !isPublicRoute)
    return NextResponse.redirect(new URL("/", nextUrl))

  return NextResponse.next()
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
