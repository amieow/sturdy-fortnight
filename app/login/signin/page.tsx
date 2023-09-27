import { Button } from "@/components/atoms/Button";
import { LabelInput } from "@/components/atoms/input";
import Link from "next/link";
import React from "react";

const Form = () => {
	return (
		<div className="flex flex-col gap-5">
			<LabelInput
				title="Email"
				placeholder="Enter your email address"
				iconLeft
				iconRight
				variant={"normal"}
			/>
			<LabelInput
				title="Password"
				placeholder="Enter your Password here"
				iconLeft
				iconRight
				variant={"normal"}
			/>
		</div>
	);
};

function pages() {
	return (
		<div className="flex flex-col gap-5">
			<Form />
			<Link
				className="w-full"
				href={"/dashboard"}>
				<Button
					type="submit"
					className="w-full"
					variant={"primary"}
					size={"large"}>
					Sign In
				</Button>
			</Link>
		</div>
	);
}

export default pages;
