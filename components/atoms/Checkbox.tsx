"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"peer h-4 w-4 shrink-0 rounded-sm border border-neutral01 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white ",
			className,
		)}
		{...props}>
		<CheckboxPrimitive.Indicator
			className={cn("flex items-center justify-center text-current")}>
			<CheckIcon className="h-4 w-4" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const CheckboxWithText = ({ name, text }: { name: string; text: string }) => {
	return (
		<div className="flex items-center space-x-4">
			<Checkbox
				id={name}
				className={
					"w-6 h-6 border-neutral01 data-[state=checked]:bg-primary data-[state=checked]:text-white data-[state=checked]:border-neutral07 "
				}
			/>
			<label
				htmlFor={name}
				className="text-sm dark:text-neutral02  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
				{text}
			</label>
		</div>
	);
};
export { CheckboxWithText, Checkbox };
