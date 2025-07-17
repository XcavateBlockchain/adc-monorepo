"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	AlignLeft,
	Calendar,
	CheckSquare,
	Circle,
	Eye,
	GripVertical,
	Hash,
	List,
	Mail,
	Pencil,
	Phone,
	Play,
	Plus,
	Save,
	Settings,
	Trash2,
	Type,
	X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Icons from "./icons";
import { ScrollArea } from "./ui/scroll-area";

interface FormField {
	id: string;
	type: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	options?: string[];
}

const fieldTypes = [
	{ type: "text", label: "Text Input", icon: Type },
	{ type: "textarea", label: "Textarea", icon: AlignLeft },
	{ type: "select", label: "Select", icon: List },
	{ type: "checkbox", label: "Checkbox", icon: CheckSquare },
	{ type: "radio", label: "Radio Group", icon: Circle },
	{ type: "email", label: "Email", icon: Mail },
	{ type: "phone", label: "Phone", icon: Phone },
	{ type: "number", label: "Number", icon: Hash },
	{ type: "date", label: "Date", icon: Calendar },
];

interface FormBuilderProps {
	title: string;
	name: string;
	form?: FormField[];
}

const defaultFrom = [
	{
		id: "field-name",
		type: "text",
		label: "Full Name",
		placeholder: "Enter your full name...",
		required: true,
	},
	{
		id: "field-email",
		type: "email",
		label: "Email Address",
		placeholder: "Enter your email address...",
		required: true,
	},
	{
		id: "field-phone",
		type: "phone",
		label: "Phone Number",
		placeholder: "Enter your phone number...",
		required: false,
	},
	{
		id: "field-description",
		type: "textarea",
		label: "Description",
		placeholder: "Tell us more about yourself...",
		required: false,
	},
];

export default function FormBuilder({ name, title, form = defaultFrom }: FormBuilderProps) {
	const [formFields, setFormFields] = useState<FormField[]>(form);
	const [selectedField, setSelectedField] = useState<FormField | null>(null);
	const [previewMode, setPreviewMode] = useState(false);
	const router = useRouter();

	const addField = (type: string) => {
		const newField: FormField = {
			id: `field-${Date.now()}`,
			type,
			label: `${fieldTypes.find((f) => f.type === type)?.label} Field`,
			placeholder: `Enter ${type}...`,
			required: false,
			options: type === "select" || type === "radio" ? ["Option 1", "Option 2"] : undefined,
		};
		setFormFields([...formFields, newField]);
		setSelectedField(newField);
	};

	const updateField = (id: string, updates: Partial<FormField>) => {
		setFormFields((fields) =>
			fields.map((field) => (field.id === id ? { ...field, ...updates } : field)),
		);
		if (selectedField?.id === id) {
			setSelectedField({ ...selectedField, ...updates });
		}
	};

	const deleteField = (id: string) => {
		setFormFields((fields) => fields.filter((field) => field.id !== id));
		if (selectedField?.id === id) {
			setSelectedField(null);
		}
	};

	const renderField = (field: FormField, _isPreview = false) => {
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
				return <Input type={field.type} {...commonProps} />;
			case "textarea":
				return <Textarea {...commonProps} />;
			case "select":
				return (
					<Select>
						<SelectTrigger className="w-full">
							<SelectValue placeholder={field.placeholder} />
						</SelectTrigger>
						<SelectContent>
							{field.options?.map((option, index) => (
								<SelectItem key={index} value={option.toLowerCase().replace(/\s+/g, "-")}>
									{option}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				);
			case "checkbox":
				return (
					<div className="flex items-center space-x-2">
						<Checkbox id={field.id} />
						<Label htmlFor={field.id} className="font-normal text-sm">
							{field.label}
						</Label>
					</div>
				);

			default:
				return <Input {...commonProps} />;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="border-b bg-white py-3 pr-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Button variant={"ghost"} className="rounded-lg" onClick={router.back}>
							<X className="size-5" />
						</Button>
						<h1 className="font-semibold text-gray-900 text-xl">{name}</h1>
					</div>
					<div className="flex items-center gap-3">
						<Button
							variant={previewMode ? "default" : "outline"}
							size={"sm"}
							onClick={() => setPreviewMode(!previewMode)}
							className="gap-2 rounded-lg"
						>
							{previewMode ? <Pencil className="h-4 w-4" /> : <Play className="h-4 w-4" />}
						</Button>
						<Button className="gap-2 rounded-lg" size={"sm"}>
							<Save className="h-4 w-4" />
						</Button>
					</div>
				</div>
			</div>

			<div className="flex h-[calc(100vh-80px)]">
				{/* Sidebar - Field Types */}
				{!previewMode && (
					<div className="w-64 border-r bg-white p-4">
						<h3 className="mb-4 font-medium text-gray-900">Form Elements</h3>
						<div className="space-y-2">
							{fieldTypes.map((fieldType) => {
								const Icon = fieldType.icon;
								return (
									<Button
										key={fieldType.type}
										variant="ghost"
										className="h-10 w-full justify-start gap-3"
										onClick={() => addField(fieldType.type)}
									>
										<Icon className="h-4 w-4 text-gray-500" />
										<span className="text-sm">{fieldType.label}</span>
									</Button>
								);
							})}
						</div>
					</div>
				)}

				{/* Main Canvas */}
				<div className="flex-1 p-6">
					<div className="mx-auto max-w-4xl">
						<Card>
							<CardHeader>
								<CardTitle>{previewMode ? "Form Preview" : title}</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
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
										<div className="space-y-6 pr-6">
											{formFields.map((field) => (
												<div
													key={field.id}
													className={`group relative rounded-lg border-2 p-4 transition-all ${
														selectedField?.id === field.id && !previewMode
															? "border-blue-500 bg-blue-50"
															: "border-gray-200 hover:border-gray-300"
													}`}
													onClick={() => !previewMode && setSelectedField(field)}
												>
													{!previewMode && (
														<div className="-left-2 -translate-y-1/2 absolute top-1/2 opacity-0 transition-opacity group-hover:opacity-100">
															<GripVertical className="h-4 w-4 text-gray-400" />
														</div>
													)}

													<div className="space-y-2">
														<div className="flex items-center justify-between">
															<Label className="font-medium text-gray-700 text-sm">
																{field.label}
																{field.required && (
																	<span className="ml-1 text-red-500">*</span>
																)}
															</Label>
															{!previewMode && (
																<div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
																	<Badge variant="secondary" className="text-xs">
																		{fieldTypes.find((f) => f.type === field.type)?.label}
																	</Badge>
																	<Button
																		size="sm"
																		variant="ghost"
																		onClick={(e) => {
																			e.stopPropagation();
																			deleteField(field.id);
																		}}
																		className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
																	>
																		<Trash2 className="h-3 w-3" />
																	</Button>
																</div>
															)}
														</div>
														{renderField(field, previewMode)}
													</div>
												</div>
											))}
										</div>
									</ScrollArea>
								)}

								{formFields.length > 0 && (
									<div className="pt-4">
										<Button className="w-full">Submit Form</Button>
									</div>
								)}
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Properties Panel */}
				{!previewMode && selectedField && (
					<div className="w-80 border-l bg-white p-4">
						<div className="mb-4 flex items-center gap-2">
							<Settings className="h-4 w-4" />
							<h3 className="font-medium text-gray-900">Field Properties</h3>
						</div>

						<div className="space-y-4">
							<div>
								<Label htmlFor="field-label" className="font-medium text-sm">
									Label
								</Label>
								<Input
									id="field-label"
									value={selectedField.label}
									onChange={(e) => updateField(selectedField.id, { label: e.target.value })}
									className="mt-1"
								/>
							</div>

							<div>
								<Label htmlFor="field-placeholder" className="font-medium text-sm">
									Placeholder
								</Label>
								<Input
									id="field-placeholder"
									value={selectedField.placeholder || ""}
									onChange={(e) =>
										updateField(selectedField.id, { placeholder: e.target.value })
									}
									className="mt-1"
								/>
							</div>

							<div className="flex items-center space-x-2">
								<Checkbox
									id="field-required"
									checked={selectedField.required}
									onCheckedChange={(checked) =>
										updateField(selectedField.id, { required: checked as boolean })
									}
								/>
								<Label htmlFor="field-required" className="font-medium text-sm">
									Required field
								</Label>
							</div>

							{(selectedField.type === "select" || selectedField.type === "radio") && (
								<div>
									<Label className="font-medium text-sm">Options</Label>
									<div className="mt-2 space-y-2">
										{selectedField.options?.map((option, index) => (
											<div key={index} className="flex gap-2">
												<Input
													value={option}
													onChange={(e) => {
														const newOptions = [...(selectedField.options || [])];
														newOptions[index] = e.target.value;
														updateField(selectedField.id, { options: newOptions });
													}}
													className="flex-1"
												/>
												<Button
													size="sm"
													variant="outline"
													onClick={() => {
														const newOptions = selectedField.options?.filter(
															(_, i) => i !== index,
														);
														updateField(selectedField.id, { options: newOptions });
													}}
													className="px-2"
												>
													<Trash2 className="h-3 w-3" />
												</Button>
											</div>
										))}
										<Button
											size="sm"
											variant="outline"
											onClick={() => {
												const newOptions = [
													...(selectedField.options || []),
													`Option ${(selectedField.options?.length || 0) + 1}`,
												];
												updateField(selectedField.id, { options: newOptions });
											}}
											className="w-full"
										>
											<Plus className="mr-1 h-3 w-3" />
											Add Option
										</Button>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
