"use client";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/atoms/Form";
import { Input } from "@/components/atoms/input";
import { InputPassword } from "@/components/atoms/InputPassword";

type CustomFormFieldType = {
	control: any;
	name: string;
	placeholder: string;
	label: string;
	className?: string;
	isPassword?: boolean;
};
const CustomFormField = ({
	control,
	name,
	placeholder,
	label,
	className,
	isPassword = false,
}: CustomFormFieldType) => (
	<FormField
		control={control}
		name={name}
		render={({ field }: { field: any }) => (
			<FormItem className={className}>
				<FormLabel className={"font-semibold text-textL"}>{label}</FormLabel>
				<FormControl>
					{isPassword ? (
						<InputPassword
							placeholder={placeholder}
							{...field}
							className={
								"dark:bg-neutral07 dark:border-neutral03 border-[0.3px]"
							}
						/>
					) : (
						<Input
							placeholder={placeholder}
							{...field}
							className={
								"dark:bg-neutral07 dark:border-neutral03 dark:text-white border-[0.3px]"
							}
						/>
					)}
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
);

export default CustomFormField;
