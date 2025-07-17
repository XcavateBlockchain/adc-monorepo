import FormBuilder from "@/components/form-builder";
import { Shell } from "@/components/shell";
import { eventFormFields } from "@/constants/form";

export default function Page({ params }: { params: { bountyId: string; formid: string } }) {
	return (
		<Shell className="lg:mt-0">
			<FormBuilder name="New Template" title={"Build from"} form={eventFormFields} />
		</Shell>
	);
}
