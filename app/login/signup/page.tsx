import { Button } from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { LabelInput } from "@/components/atoms/input";
import Link from "next/link";

const Form = () => {
	return (
		<>
			<LabelInput
				placeholder="Please enter your full name"
				variant={"normal"}
				iconLeft
				iconRight
				type="text"
				title="Name"
			/>
			<LabelInput
				placeholder="Please enter your email"
				title="Email"
				type="email"
				variant={"normal"}
				iconLeft
				iconRight
			/>
			<LabelInput
				placeholder="Please enter your password"
				title="Password"
				variant={"normal"}
				iconLeft
				iconRight
			/>
			<LabelInput
				placeholder="Please re-enter your password"
				title="Repeat"
				variant={"normal"}
				iconLeft
				iconRight
			/>
		</>
	);
};

const SignupPage = () => {
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
					Sign Up
				</Button>
			</Link>
		</div>
	);
};

export default SignupPage;
