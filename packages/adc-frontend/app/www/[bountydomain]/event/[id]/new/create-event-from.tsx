"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form, { useZodForm } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useApp } from "@/context/app-context";
import { IEventSchema, newEventForm } from "@/lib/validations";
import { events as mock } from "@/constants/eevents";

import type { FormField } from "@/types/form";
import { Type } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CreateEventFrom({ template }: { template?: string }) {
	const { events, setEvents } = useApp();
	const [formFields, setFormFields] = useState<FormField[]>(newEventForm);
	const [isLoading, setIsLoading] = useState(false);

	const form = useZodForm({
		schema: IEventSchema,
		defaultValues: {
			id: Date.now,
			name: mock[0].name,
			status: "pending",
			submitterName: "Alice",
			submissionType: template,
			submittedAt: `${new Date()}`,
			response: { ...(mock[0].response as any) },
		},
	});

	// useEffect(() => {
	// 	const subscription = form.watch((value, { name, type }) => {
	// 		console.log("Field changed:", name, value);
	// 	});
	// 	return () => subscription.unsubscribe();
	// }, [form]);

	const renderField = (field: FormField) => {
		const commonProps = {
			placeholder: field.placeholder,
			required: field.required,
			className: "w-full",
		};

		switch (field.type) {
			case "text":
			case "email":
			case "phone":
			case "number":
			case "date":
				return (
					<Input
						type={field.type}
						label={field.label}
						placeholder={field.placeholder}
						required={field.required}
						className="w-full"
						{...form.register(field.id)}
					/>
				);

			case "textarea":
				return (
					<Textarea
						placeholder={field.placeholder}
						required={field.required}
						className="w-full"
						{...form.register(`response.${field.id}`)}
					/>
				);
			default:
				return <Input {...commonProps} />;
		}
	};

	const onSubmit = (data: any) => {
		setIsLoading(true);
		const timeout = setTimeout(() => {
			setEvents([...events, data]);
			setIsLoading(false);
			toast.success("Event submitted");
		}, 2000);
		return () => clearTimeout(timeout);
	};

	return (
		<div className="flex h-full w-full flex-col gap-11 rounded-[10px] border border-[#C5C5C5] px-12 py-10 shadow">
			{/* Header */}

			<h1 className="text-center font-semibold capitalize">{template}</h1>
			<Form form={form} onSubmit={form.handleSubmit(onSubmit)}>
				{formFields.length === 0 ? (
					<div className="py-12 text-center text-gray-500">
						<Type className="mx-auto mb-4 h-12 w-12 text-gray-300" />
						<p className="mb-2 font-medium text-lg">No fields added yet</p>
						<p className="text-sm">
							Start building your form by adding fields from the sidebar
						</p>
					</div>
				) : (
					<ScrollArea className="h-[66vh]">
						<div className="space-y-6 px-[70px] pb-5">
							{formFields.map((field) => {
								if (field.type === "textarea") {
									return (
										<div key={field.id}>
											<label className="font-medium text-[16px]" data-slot="label">
												{field.label}
												{field.required && <span className="ml-1 text-red-500">*</span>}
											</label>

											{renderField(field)}
										</div>
									);
								}

								return <div key={field.id}>{renderField(field)}</div>;
							})}
						</div>
					</ScrollArea>
				)}
				<div className="flex items-center justify-center">
					<Button
						className="w-fit"
						type="submit"
						disabled={!form.formState.isDirty || !form.formState.isValid || isLoading}
					>
						Submit Form
					</Button>
				</div>
			</Form>
		</div>
	);
}
