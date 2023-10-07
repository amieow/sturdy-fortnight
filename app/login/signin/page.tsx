"use client";
import { Button } from "@/components/atoms/Button";
import { LabelInput } from "@/components/atoms/input";
import { setCookie } from "@/lib/cookie";
import { UserSchema, userSchemaType } from "@/lib/validation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
	const [formData, setFormData] = useState<Partial<userSchemaType>>({});
	const [error, setError] = useState<
		Zod.inferFlattenedErrors<typeof UserSchema> | null | undefined
	>();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const result = UserSchema.safeParse(formData);

		if (!result.success) {
			setError(result.error.flatten());
		} else {
			setError(undefined);
			const { email, password } = result.data;
			setCookie("email", email);
			setCookie("password", password);
			window.location.reload();
		}
	};
	const handleInput = (key: keyof userSchemaType) => ({
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
				type={"email"}
				title="Email"
				placeholder="Enter your email address"
				variant={"normal"}
				{...handleInput("email")}
			/>
			<LabelInput
				type={"password"}
				title="Password"
				placeholder="Enter your Password here"
				variant={"normal"}
				{...handleInput("password")}
			/>
			<Button
				type="submit"
				className="w-full"
				variant={"primary"}
				size={"large"}>
				Sign In
			</Button>
		</form>
	);
};

export default Form;
