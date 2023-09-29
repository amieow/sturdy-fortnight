import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const TypographyVariant = [
	"textXS",
	"textS",
	"textM",
	"textL",
	"textXl",
	"heading4",
	"heading3",
	"heading2",
	"heading1",
	"display3",
	"display2",
	"display1",
] as const;
const TypographyColor = [
	"primary",
	"accent",
	"default",
	"error",
	"muted",
] as const;
const TypographyFont = ["poppins", "inter", "roboto"] as const;
const TypographyThick = [
	"bolder",
	"bold",
	"semibold",
	"regular",
	"light",
] as const;

type TypographyProps<T extends React.ElementType> = {
	as?: T;
	className?: string;
	color?: (typeof TypographyColor)[number];
	size?: (typeof TypographyVariant)[number];
	fontFamily?: (typeof TypographyFont)[number];
	thick?: (typeof TypographyThick)[number];
	children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

type TypographyComponent = <T extends React.ElementType = "p">(
	props: TypographyProps<T>,
) => React.ReactElement | null;

const typographyVariant = cva("leading-none", {
	variants: {
		fontFamily: {
			poppins: "font-poppins",
			inter: "font-inter",
			roboto: "font-roboto",
		},
		size: {
			textXS: "text-[10px]",
			textS: "text-[12px]",
			textM: "text-[14px]",
			textL: "text-[16px]",
			textXl: "text-[18px]",
			heading4: "text-[24px]",
			heading3: "text-[28px]",
			heading2: "text-[32px]",
			heading1: "text-[36px]",
			display3: "text-[48px]",
			display2: "text-[56px]",
			display1: "text-[32px] md:text-[64px]",
		},
		thick: {
			bolder: "font-[800]",
			bold: "font-[700]",
			semibold: "font-[600]",
			medium: "font-medium",
			regular: "font-[400]",
			light: "font-light",
		},
		color: {
			default: "text-neutral06 dark:text-neutral01",
			muted: "text-neutral02",
			primary: "text-primary",
			accent: "text-accent",
			error: "text-[#E3604F]",
		},
		defaultVariant: {
			size: "textM",
			color: "default",
			fontFamily: "poppins",
			thick: "regular",
		},
	},
});

//@ts-ignore
// eslint-disable-next-line react/display-name
const Typography: TypographyComponent = React.forwardRef(
	<T extends React.ElementType = "p">(
		{
			as,
			size = "textM",
			color = "default",
			fontFamily = "poppins",
			thick = "regular",
			className,
			children,
			...props
		}: TypographyProps<T>,
		ref?: React.ComponentPropsWithRef<T>["ref"],
	): React.ReactElement | null => {
		const Component = as || "p";

		return (
			<Component
				ref={ref}
				className={cn(
					typographyVariant({
						fontFamily,
						color,
						thick,
						size,
					}),
					className,
				)}
				{...props}>
				{children}
			</Component>
		);
	},
);

export default Typography;
