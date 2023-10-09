import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValiduser } from "./lib/utils";
export const config = {
	matcher: ["/login/:path*", "/login", "/cart/:path*", "/dashboard/:path*"],
};
export function middleware(request: NextRequest) {
	const nextUrlPath = request.nextUrl.pathname;
	const kookies = request.cookies;
	const user = {
		email: kookies.get("email")?.value || "",
		password: kookies.get("password")?.value || "",
	};
	const params = request.nextUrl.searchParams;
	const seperatedUrl = nextUrlPath.slice(1, nextUrlPath.length).split("/");
	const isLogin = isValiduser(user);
	const loginPage = new URL("/login/signin", request.url);
	if (nextUrlPath.startsWith("/login")) {
		const url = params.getAll("history");
		if (isLogin) {
			return NextResponse.redirect(
				new URL(
					url.length > 0 ? `/${url.join("/")}` : "/dashboard",
					request.url,
				),
			);
		}
		if (nextUrlPath === "/login") {
			return NextResponse.redirect(loginPage);
		}
	}
	if (nextUrlPath.startsWith("/dashboard")) {
		for (const prevUrl of seperatedUrl) {
			loginPage.searchParams.append("history", prevUrl);
		}
		if (!isLogin) {
			return NextResponse.redirect(loginPage);
		}
	}
	if (nextUrlPath.startsWith("/cart")) {
		if (!isLogin) {
			loginPage.searchParams.set("history", "cart");
			return NextResponse.redirect(loginPage);
		}
	}
	// If none of the above conditions match, allow the request to proceed
	return NextResponse.next();
}
