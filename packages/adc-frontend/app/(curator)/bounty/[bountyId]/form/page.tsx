import FormBuilder from "@/components/form-builder";
import { Shell } from "@/components/shell";

export default function Page({ params }: { params: { bountyId: string; formid: string } }) {
	return (
		<Shell className="lg:mt-0">
			<FormBuilder name={"Event Organizer Application Form"} title={"Edit Form"} />
		</Shell>
	);
}
