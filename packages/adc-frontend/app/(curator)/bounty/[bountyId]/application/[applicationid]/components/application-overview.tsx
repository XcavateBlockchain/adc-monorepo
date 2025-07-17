import { ScrollArea } from "@/components/ui/scroll-area";
import type { Applicant } from "@/constants/applications";

export default function ApplicantOverview({ ...data }: Applicant) {
	return (
		<div className="flex-1">
			<ScrollArea className="h-[75vh] pb-0">
				<div className="grid grid-cols-1 gap-8 [&>div]:max-h-[50vh]">
					<DescriptionItem label="Name" value={data.name} />
					<DescriptionItem label="Organization" value={data.organization} />
					<DescriptionItem label="Email" value={data.email} />
					<DescriptionItem label="Title of your proposed event" value={data.title} />
					<DescriptionItem label="Summary" value={data.summary} />
					<DescriptionItem label="Description" value={data.description} />
					<DescriptionItem
						label="How long have you been in the Polkadot eco-system?"
						value={data.isExperience}
					/>
					<DescriptionItem
						label="How many events have you previously organized?"
						value={data.previouslyOrganized}
					/>
					<DescriptionItem label="Date Submitted" value={data.created} />
				</div>
			</ScrollArea>
		</div>
	);
}

const DescriptionItem = ({ label, value }: { label: string; value: any }) => (
	<div className="flex flex-col gap-2">
		<h2 className="font-medium text-[16px]/[28px]">{label}</h2>
		<p className="font-extralight text-[16px]/[28px]">{value}</p>
	</div>
);
