import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { IconAdd } from "./icon";
import Typography from "./Typography";

const inputVariant = cva(
	`flex transition-all h-12 w-full font-inter rounded-md border  p-4 text-sm`,
	{
		variants: {
			variant: {
				normal: `border-neutral03 bg-neutral06 
					focus-visible:outline-none focus-visible:border-accent
					placeholder:text-neutral03`,
				disable: ` border-neutral02 bg-neutral01 text-black
					placeholder:text-neutral03
					focus-visible:outline-none focus-visible:border-neutral06
				`,
				error: `text-neutral02 border-[#E3604F]
					focus-visible:outline-none focus-visible:shaodw-md focus-visible:shadow-red-400`,
			},
		},
		defaultVariants: {
			variant: "disable",
		},
	},
);

type InputPropsIcon = {
	iconRight?: boolean;
	iconLeft?: boolean;
};
// placeholder:text-neutral03
// 							focus-visible:outline-none focus-visible:border-accent
export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		InputPropsIcon,
		VariantProps<typeof inputVariant> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			id,
			iconLeft = false,
			iconRight = false,
			type,
			variant,
			...props
		},
		ref,
	) => {
		return (
			<div className={"relative"}>
				{iconLeft && (
					<div className=" absolute top-1/2 left-0 -translate-y-1/2 items-center pl-3">
						<IconAdd
							width={24}
							height={24}
							className={cn(
								{
									"opacity-50": variant != "disable",
								},
								"pointer-events-none",
							)}
						/>
					</div>
				)}
				<input
					id={id}
					type={type}
					ref={ref}
					className={cn(
						inputVariant({
							variant,
							className,
						}),
						"",
						{
							"pr-10": iconLeft,
							"pl-10": iconRight,
						},
					)}
					{...props}
				/>
				{iconRight && (
					<div className=" absolute top-1/2 right-0 -translate-y-1/2 items-center pr-3">
						<IconAdd
							width={24}
							height={24}
							className={cn(
								{
									"opacity-50": variant != "disable",
								},
								"pointer-events-none",
							)}
						/>
					</div>
				)}
			</div>
		);
	},
);

interface LabelInputType extends InputProps {
	title: string;
	message?: {
		body: string;
		error: boolean;
	};
}

const LabelInput = ({
	title,
	message,
	className,
	variant,
	...props
}: LabelInputType) => (
	<div className="flex flex-col">
		<Typography
			size="textL"
			thick={"semibold"}>
			{title}
		</Typography>
		<Input
			variant={message?.error ? "error" : variant}
			{...props}
		/>
		{message && (
			<Typography
				color={message.error ? "error" : "default"}
				thick={"light"}
				fontFamily="inter">
				{message.body}
			</Typography>
		)}
	</div>
);
Input.displayName = "Input";

export { Input, LabelInput };
