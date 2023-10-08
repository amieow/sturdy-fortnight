"use client";
"use client";
import { Button } from "@/components/atoms/Button";
import { LabelInput } from "@/components/atoms/input";
import { setCookie } from "@/lib/cookie";
import { useLocalStorage } from "@/lib/useLocalStorage";
import {
	SignUpSchema,
	signUpSchemaType,
	userSchemaType,
} from "@/lib/validation";

import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState<Partial<signUpSchemaType>>({});
	const [error, setError] = useState<
		Zod.inferFlattenedErrors<typeof SignUpSchema> | null | undefined
	>();
	const { setItem } =
		useLocalStorage<Omit<signUpSchemaType, keyof userSchemaType>>("user");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = SignUpSchema.safeParse(formData);
		if (!result.success) {
			setError(result.error.flatten());
		} else {
			setError(undefined);
			const { email, password, ...rest } = result.data;
			setItem(rest);
			setCookie("email", email, { sameSite: "None" });
			setCookie("password", password, { sameSite: "None" });
			window.location.reload();
		}
	};
	const handleInput = (key: keyof signUpSchemaType) => ({
		value: formData[key],
		onChange: (e: ChangeEvent<HTMLInputElement>) => {
			setFormData((current) => ({
				...current,
				[key]: e.target.value,
			}));
		},
		message: {
			body: error?.fieldErrors[key]?.join(", ") || "",
			error: error?.fieldErrors[key] ? true : false,
		},
	});
	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-5">
			<LabelInput
				placeholder="Please enter your full name"
				variant={"normal"}
				type="text"
				title="Name"
				{...handleInput("name")}
			/>
			<LabelInput
				placeholder="Please enter your email"
				title="Email"
				type="email"
				variant={"normal"}
				{...handleInput("email")}
			/>
			<LabelInput
				placeholder="Please enter your password"
				title="password"
				type={"password"}
				variant={"normal"}
				{...handleInput("password")}
			/>
			<LabelInput
				placeholder="Please re-enter your password"
				title="Repeat"
				type={"password"}
				variant={"normal"}
				{...handleInput("confirmPassword")}
			/>
			<Button
				type="submit"
				className="w-full"
				variant={"primary"}
				size={"large"}>
				Sign Up
			</Button>
		</form>
	);
};

export default Form;
