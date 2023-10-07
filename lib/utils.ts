import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatRupiah } from "./formatter";
import { useLocalStorage } from "./useLocalStorage";
import { UserSchema, userSchemaType } from "./validation";
import { useBoundStore } from "./state";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function sumAllinObject(
	obj: { [key: string]: number },
	option?: { formated?: boolean },
) {
	if (option?.formated) {
		return formatRupiah(
			Object.values(obj).reduce((acc, value) => acc + value, 0),
		);
	}
	return Object.values(obj).reduce((acc, value) => acc + value, 0);
}

export const IsLoginedUser = () => {
	const store = useBoundStore();
	const user = {
		email: store.email,
		password: store.password,
	};
	const result = UserSchema.safeParse(user);
	if (result.success) {
		return {
			status: result.success,
			data: result.data,
		};
	}
	return {
		status: result.success,
	};
};

export const isValiduser = (val: userSchemaType) => {
	return UserSchema.safeParse(val).success;
};
