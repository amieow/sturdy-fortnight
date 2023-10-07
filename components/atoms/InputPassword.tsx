import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, ...props }, ref) => {
		const [isShow, setIsShow] = useState<boolean>(false);
		return (
			<div className={"relative test"}>
				<input
					className={cn(
						"flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-10",
						className,
					)}
					type={isShow ? "text" : "password"}
					ref={ref}
					{...props}
				/>
				{isShow ? (
					<EyeOpenIcon
						onClick={() => setIsShow(false)}
						className={"dark:text-neutral03 w-5 h-5 absolute right-2 top-3"}
					/>
				) : (
					<EyeClosedIcon
						onClick={() => setIsShow(true)}
						className={"dark:text-neutral03 w-5 h-5 absolute right-2 top-3"}
					/>
				)}
			</div>
		);
	},
);
InputPassword.displayName = "InputPassword";

export { InputPassword };
