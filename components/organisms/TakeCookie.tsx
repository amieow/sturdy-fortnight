"use client";

import { useBoundStore } from "@/lib/state";
import { useEffect } from "react";

export default function TakeCookie({
	children,
}: {
	children: React.ReactNode;
}) {
	const getKue = useBoundStore((state) => state.getAllKue);
	useEffect(() => {
		getKue();
	}, [getKue]);
	return children;
}
