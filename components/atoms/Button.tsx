import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-md   font-inter font-[600]", {
  variants: {
    variant: {
      primary: `bg-primary !text-neutral07
            hover:bg-primaryHover 
            focus:bg-primaryPressed
            disabled:bg-neutral02
            disabled:text-neutral03`,
      secondary: `!text-primary border-[1px] border-primary
            hover:bg-primarySurface hover:border-primarySurface hover:text-primaryHover
            focus:bg-primaryBorder focus:border-primaryBorder focus:text-primaryPressed
            disabled:bg-neutral06 disabled:text-neutral03 disabled:border-[1px] disabled:border-neutral01`,
      tertiary: `!text-primary
            hover:text-primaryHover
            focus:text-primaryPressed
            disabled:text-neutral07  disabled:dark:text-neutral04 `,
    },
    size: {
      medium: "h-10 py-2 px-4 text-textM",
      small: "h-8 px-2 text-textS",
      large: "h-14 px-8 text-textL",
      icon: "!rounded-full h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
