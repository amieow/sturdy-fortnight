"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import OtherLoginMethod from "../organisms/login/OtherLoginMethod";
import OtherRoutingLogin from "../organisms/login/OtherRoutingLogin";
import Typography from "../atoms/Typography";
import { usePathname } from "next/navigation";
import { IsLoginedUser, cn } from "@/lib/utils";

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const Path = usePathname();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, [setLoading]);

	return (
		<div className={`min-h-screen flex`}>
			<div className="relative w-full max-md:hidden">
				<Image
					className=" object-cover"
					fill
					src={"/landing-hero.png"}
					alt="blur"
				/>
			</div>
			<div className=" w-full flex-col justify-center py-8 px-[42px] flex-shrink-0 flex gap-6 bg-[#1D1D1D] md:max-w-xl">
				<Typography
					thick="bold"
					size="heading2"
					color="primary">
					{Path.includes("signup") ? "Sign Up" : "Sign In"}
				</Typography>
				{children}
				<OtherLoginMethod />
				<OtherRoutingLogin />
			</div>
		</div>
	);
}
