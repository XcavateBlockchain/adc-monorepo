import type * as React from "react";

import { cn } from "@/lib/utils";
import type { FieldError } from "react-hook-form";

interface InputProps extends React.ComponentProps<"input"> {
	label?: string;
}

function Input({ label, className, type, ...props }: InputProps) {
	return (
		<div>
			{label && (
				<label className={cn("font-medium text-[16px]", {})} data-slot="label">
					{label}
				</label>
			)}
			<input
				type={type}
				data-slot="input"
				className={cn(
					"flex w-full min-w-0 border-input border-b bg-transparent pt-4 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
					"focus:outline-none",
					"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",

					className,
				)}
				{...props}
			/>
		</div>
	);
}

export { Input };
