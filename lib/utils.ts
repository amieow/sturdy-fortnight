import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatRupiah } from "./formatter";

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
