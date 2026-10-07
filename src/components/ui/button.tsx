import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[opacity,transform,background-color,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-40 disabled:pointer-events-none select-none",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg hover:opacity-90",
        secondary: "bg-surface-2 text-fg shadow-border hover:bg-surface",
        ghost: "bg-transparent text-fg hover:bg-surface-2",
        danger: "bg-danger text-fg hover:opacity-90",
      },
      size: {
        md: "h-11 px-4 text-sm rounded-sm",
        sm: "h-9 px-3 text-sm rounded-xs",
        lg: "h-12 px-5 text-base rounded-md",
        icon: "size-11 rounded-sm",
      },
    },
    defaultVariants: { variant: "secondary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: Props) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
