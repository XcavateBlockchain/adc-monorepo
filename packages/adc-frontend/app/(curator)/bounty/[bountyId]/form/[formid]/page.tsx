import FormBuilder from "@/components/form-builder";
import { Shell } from "@/components/shell";
import { Card, CardContent } from "@/components/ui/card";
import { templates } from "@/constants/curators";
import { eventFormFields } from "@/constants/form";
import { Type } from "lucide-react";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ formid: string }> }) {
	const { formid } = use(params);
	const template = templates.find((data) => data.id === Number(formid));
	if (!template) {
		return (
			<Card>
				<CardContent>
					<div className="py-12 text-center text-gray-500">
						<Type className="mx-auto mb-4 h-12 w-12 text-gray-300" />
						<p className="mb-2 font-medium text-lg">No fields added yet</p>
						<p className="text-sm">
							Start building your form by adding fields from the sidebar
						</p>
					</div>
				</CardContent>
			</Card>
		);
	}
	return (
		<Shell className="lg:mt-0">
			<FormBuilder name={template.title} title={"Edit Form"} form={eventFormFields} />
		</Shell>
	);
}
