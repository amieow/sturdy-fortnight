import * as React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const TypographyVariant = [
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
const TypographyColor = ["primary", "accent", "default"] as const;
const TypographyFont = ["poppins", "inter"] as const;
const TypographyThick = ["bold", "semibold", "regular"] as const;

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  color?: (typeof TypographyColor)[number];
  type?: (typeof TypographyVariant)[number];
  font?: (typeof TypographyFont)[number];
  thick?: (typeof TypographyThick)[number];
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

type TypographyComponent = <T extends React.ElementType = "p">(
  props: TypographyProps<T>,
) => React.ReactElement | null;

const typographyVariant = cva("leading-none", {
  variants: {
    font: {
      poppins: "font-poppins",
      inter: "font-inter",
    },
    type: {
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
      display1: "text-[64px]",
    },
    thick: {
      bolder: "800",
      bold: "700",
      semibold: "600",
      regular: "400",
    },
    color: {
      default: "text-neutral06 dark:text-neutral01",
      primary: "text-primary",
      accent: "text-accent",
    },
    defaultVariant: {
      type: "textM",
      color: "default",
      font: "poppins",
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
      type,
      color = "default",
      font,
      thick,
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
            font,
            color,
            thick,
            type,
            className,
          }),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

export default Typography;
