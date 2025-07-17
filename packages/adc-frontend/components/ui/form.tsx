"use client";

import type { ComponentProps } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	useForm,
	type UseFormProps,
	FormProvider,
	type UseFormReturn,
	type FieldValues,
} from "react-hook-form";

import type { ZodSchema, TypeOf } from "zod";
import { cn } from "@/lib/utils";

interface UseZodFormProps<T extends ZodSchema<any>> extends UseFormProps<TypeOf<T>> {
	schema: T;
}

export const useZodForm = <T extends ZodSchema<any>>({
	schema,
	...formConfig
}: UseZodFormProps<T>) => {
	return useForm({
		...formConfig,
		resolver: zodResolver(schema as any),
	});
};

interface FormProps<T extends FieldValues = any> extends ComponentProps<"form"> {
	form: UseFormReturn<T>;
	disabled?: boolean;
}

const Form = <T extends FieldValues>({
	form,
	className,
	disabled,
	children,
	...props
}: FormProps<T>) => {
	return (
		<FormProvider {...form}>
			<form {...props}>
				<fieldset
					className={cn("grid w-full gap-6", className)}
					disabled={form.formState.isSubmitting || disabled}
				>
					{children}
				</fieldset>
			</form>
		</FormProvider>
	);
};

export default Form;
