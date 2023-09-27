"use client";
import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function OtherRoutingLogin() {
	const Path = usePathname();
	if (Path.includes("signup")) {
		return (
			<div className="flex gap-2 items-center">
				<Typography
					className="h-fit"
					fontFamily="roboto">
					Already have Account?
				</Typography>
				<Link href={"/login/signin"}>
					<Button
						size={"small"}
						variant={"tertiary"}>
						Sign In
					</Button>
				</Link>
			</div>
		);
	}
	return (
		<div className="flex gap-2 items-center">
			<Typography
				className="h-fit"
				fontFamily="roboto">
				Dont have Account?
			</Typography>
			<Link href={"/login/signup"}>
				<Button
					size={"small"}
					variant={"tertiary"}>
					Sign Up
				</Button>
			</Link>
		</div>
	);
}
