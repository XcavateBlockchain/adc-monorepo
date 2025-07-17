import { eventFormFields } from "@/constants/form";
import type { FormField } from "@/types/form";
import { z } from "zod";

export const newEventForm: FormField[] = [
	{
		id: "name",
		type: "text",
		label: "Event Name",
		placeholder: "Event name",
		required: true,
	},
	{
		id: "date",
		type: "text",
		label: "Date Range",
		placeholder: "Date range...",
		required: true,
	},
	...eventFormFields,
];

export const FormResponseSchema = z.object({
	event_description: z.string(),
	event_format: z.string(),
	sponsorship_decision: z.string(),
	exception_understanding: z.string(),
	event_kind: z.string(),
	heard_about_polluladi: z.string(),
	designs_and_visuals: z.string().optional(),
	sponsorship_benefits: z.string().optional(),
	event_follow_up: z.string(),
	audience_engagement: z.string(),
	application_terms: z.string(),
	event_timeline: z.string(),
	marketing_strategy: z.string(),
	product_distribution: z.string(),
	service_definition: z.string(),
	service_numbers: z.string(),
	milestones_information: z.string(),
	team_info: z.string(),
	organization_info: z.string().optional(),
	position_explanation: z.string(),
	target_travel: z.string().optional(),
	previous_productions: z.string().optional(),
	application_support: z.string(),
	additional_information: z.string().optional(),
});

export const IEventSchema = z.object({
	id: z.any(),
	name: z.string(),
	date: z.string(),
	status: z.string(),
	submissionType: z.string(),
	submitterName: z.string(),
	submittedAt: z.string(),
	response: FormResponseSchema,
});
