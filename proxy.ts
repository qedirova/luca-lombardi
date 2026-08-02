import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_PAGES = ["/login", "/register"]
const PROTECTED_PAGES = ["/cart","/profile" ]

export function proxy(request: NextRequest) {

const token = request.cookies.get("auth_token")?.value
const {pathname} = request.nextUrl

const isAuthPage = AUTH_PAGES.some((route)=>pathname.startsWith(route))
const isProtectedPage = PROTECTED_PAGES.some((route)=>pathname.startsWith(route))

if(token && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url))
}

if(!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", request.url))
}


  return NextResponse.next();
}