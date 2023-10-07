import { string, object, z } from "zod";

const UserSchema = object({
	email: string().email(),
	password: string().min(8).max(40),
});

const SignUpSchema = UserSchema.and(
	object({
		name: string().min(8).max(40),
		confirmPassword: string().min(8).max(40),
	}),
).refine((data) => data.password == data.confirmPassword, {
	message: "pliss re enter password",
	path: ["confirmPassword"],
});
type signUpSchemaType = z.infer<typeof SignUpSchema>;
type userSchemaType = z.infer<typeof UserSchema>;
export type { signUpSchemaType, userSchemaType };
export { UserSchema, SignUpSchema };
