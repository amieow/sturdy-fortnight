"use client";

import { usePathname } from "next/navigation";

export default function IsLoginPage({
	children,
}: {
	children: React.ReactNode;
}) {
	const Path = usePathname();
	if (Path.includes("login")) {
		return;
	}
	return children;
}
