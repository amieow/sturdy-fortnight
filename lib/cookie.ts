// cookie.ts
import Cookies from "js-cookie";

// Function untuk mengambil nilai cookie berdasarkan namanya
export function getCookie(name: string): string | undefined {
	return Cookies.get(name);
}

// Function untuk mengatur nilai cookie
export function setCookie(
	name: string,
	value: string,
	options?: Cookies.CookieAttributes,
): void {
	Cookies.set(name, value, options);
}

// Function untuk menghapus cookie berdasarkan namanya
export function removeCookie(name: string): void {
	Cookies.remove(name);
}
