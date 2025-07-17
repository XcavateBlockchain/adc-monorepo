import type { IEvent } from "@/constants/eevents";
import { ScrollArea } from "./ui/scroll-area";

export default function Proposals({ ...data }: IEvent) {
	return (
		<div className="flex h-full flex-col space-y-4">
			<div className="flex-1">
				<ScrollArea className="h-[75vh] pb-0">
					<div className="grid grid-cols-1 gap-8 [&>div]:max-h-[50vh]">
						<DescriptionItem
							label="Event Description"
							value={data.response.event_description}
						/>
						<DescriptionItem label="Event Format" value={data.response.event_format} />
						<DescriptionItem
							label="Sponsorship Decision"
							value={data.response.sponsorship_decision}
						/>
						<DescriptionItem
							label="Exception Understanding"
							value={data.response.exception_understanding}
						/>
						<DescriptionItem label="Event Kind" value={data.response.event_kind} />
						<DescriptionItem
							label="How Did You Hear About Polluladi?"
							value={data.response.heard_about_polluladi}
						/>
						<DescriptionItem
							label="Designs and Visuals"
							value={data.response.designs_and_visuals}
						/>
						<DescriptionItem
							label="Sponsorship Benefits"
							value={data.response.sponsorship_benefits}
						/>
						<DescriptionItem label="Event Follow Up" value={data.response.event_follow_up} />
						<DescriptionItem
							label="Audience Engagement"
							value={data.response.audience_engagement}
						/>
						<DescriptionItem
							label="Application Terms"
							value={data.response.application_terms}
						/>
						<DescriptionItem label="Event Timeline" value={data.response.event_timeline} />
						<DescriptionItem
							label="Marketing Strategy"
							value={data.response.marketing_strategy}
						/>
						<DescriptionItem
							label="Product Distribution"
							value={data.response.product_distribution}
						/>
						<DescriptionItem
							label="Service Definition"
							value={data.response.service_definition}
						/>
						<DescriptionItem label="Service Numbers" value={data.response.service_numbers} />
						<DescriptionItem
							label="Milestones Information"
							value={data.response.milestones_information}
						/>
						<DescriptionItem label="Team Info" value={data.response.team_info} />
						<DescriptionItem
							label="Organization Info"
							value={data.response.organization_info}
						/>
						<DescriptionItem
							label="Position Explanation"
							value={data.response.position_explanation}
						/>
						<DescriptionItem label="Target Travel" value={data.response.target_travel} />
						<DescriptionItem
							label="Previous Productions"
							value={data.response.previous_productions}
						/>
						<DescriptionItem
							label="Application Support"
							value={data.response.application_support}
						/>
						<DescriptionItem
							label="Additional Information"
							value={data.response.additional_information}
						/>
					</div>
				</ScrollArea>
			</div>
		</div>
	);
}

const DescriptionItem = ({ label, value }: { label: string; value: any }) => (
	<div className="flex flex-col gap-2">
		<h2 className="font-medium text-[16px]/[28px]">{label}</h2>
		<p className="font-extralight text-[16px]/[28px]">{value}</p>
	</div>
);
