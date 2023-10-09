import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValiduser } from "./lib/utils";

export function middleware(request: NextRequest) {
	const nextUrl = request.nextUrl.pathname;
	const kookies = request.cookies;
	const user = {
		email: kookies.get("email")?.value || "",
		password: kookies.get("password")?.value || "",
	};
	const isLogin = isValiduser(user);
	if (nextUrl.startsWith("/login")) {
		if (isLogin) {
			return NextResponse.redirect(new URL("/dashboard", request.url));
		}
		if (nextUrl === "/login") {
			return NextResponse.redirect(new URL("/login/signin", request.url));
		}
	}
	if (nextUrl.startsWith("/dashboard")) {
		if (!isLogin) {
			return NextResponse.redirect(new URL("/login/signin", request.url));
		}
	}
	// If none of the above conditions match, allow the request to proceed
	return NextResponse.next();
}

export const config = {
	matcher: ["/login/:path*", "/login", "/dashboard/:path*"],
};
