import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const shellVariants = cva("", {
	variants: {
		variant: {
			default:
				"container relative mx-auto w-full max-w-screen-2xl space-y-6 px-4 lg:mt-[160px] lg:px-10 xl:px-15",
			tab: "container relative mx-auto flex w-full max-w-[920px] flex-col space-y-8 lg:py-5 xl:px-0",
		},
		// max-w-[1440px] mx-auto
	},
	defaultVariants: {
		variant: "default",
	},
});

interface ShellProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof shellVariants> {
	as?: React.ElementType;
}

/**
 * @component @name Shell
 * @description Shell container component, renders a container with children.
 * Wrapping your page with this gives consistency on all pages
 *
 *
 * @param {Object} props - Shell component props and any valid DIV attribute
 *
 */

function Shell({ className, as: Comp = "div", variant, ...props }: ShellProps) {
	return <Comp className={cn(shellVariants({ variant }), className)} {...props} />;
}

export { Shell, shellVariants };
