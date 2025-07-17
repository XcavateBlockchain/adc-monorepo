import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

export function CardList({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("space-y-1", className)} {...props} />;
}

const cardBodyVariants = cva(
	"grid grid-cols-12 gap-4 px-4 py-2 font-medium text-muted-foreground text-sm",
	{
		variants: {
			variant: {
				title: "",
				default:
					"rounded-lg border border-[#F3F3F3] bg-white transition-colors duration-200 hover:bg-muted/50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface CardBodyProps
	extends React.ComponentProps<"div">,
		VariantProps<typeof cardBodyVariants> {}

export function CardBody({ className, variant, ...props }: CardBodyProps) {
	return <div className={cn(cardBodyVariants({ variant }), className)} {...props} />;
}

const cardItemVariants = cva("", {
	variants: {
		col: {
			1: "col-span-1",
			2: "col-span-2",
			3: "col-span-3",
			4: "col-span-4",
			5: "col-span-5",
			6: "col-span-6",
			7: "col-span-7",
			8: "col-span-8",
			9: "col-span-9",
			10: "col-span-10",
			11: "col-span-11",
			12: "col-span-12",
		},
		align: {
			left: "text-left",
			center: "text-center",
			right: "text-right",
		},
	},
	defaultVariants: {
		col: 1,
		align: "center",
	},
});

export interface CardItemProps
	extends React.ComponentProps<"div">,
		VariantProps<typeof cardItemVariants> {}

export function CardItem({ className, col, align, ...props }: CardItemProps) {
	return <div className={cn(cardItemVariants({ col, align }), className)} {...props} />;
}
