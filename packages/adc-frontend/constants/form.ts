import type { FormField } from "@/types/form";

export const eventFormFields: FormField[] = [
	{
		id: "event_description",
		type: "textarea",
		label: "Describe your proposal and provide as much context as possible (300 words max)",
		placeholder: "Enter your event description here...",
		required: true,
	},
	{
		id: "event_format",
		type: "textarea",
		label:
			"If you are doing a talk/event or a hackathon please describe the format, challenges, learnings, speakers, agenda etc.",
		placeholder: "Describe the format of your event...",
		required: true,
	},
	{
		id: "sponsorship_decision",
		type: "textarea",
		label:
			"If you are choosing a sponsorship please clarify why you decided to fast-track specifically/type about 1% of each idea at the top of the proposal in the dedicated section",
		placeholder: "Explain your sponsorship decision...",
		required: true,
	},
	{
		id: "exception_understanding",
		type: "textarea",
		label: "What explains from this exception are you collaborating with?",
		placeholder: "List collaborating exceptions...",
		required: true,
	},
	{
		id: "event_kind",
		type: "textarea",
		label: "Why are you doing this kind of event and why are you the best team to execute it?",
		placeholder: "Explain why you're the best team...",
		required: true,
	},
	{
		id: "heard_about_polluladi",
		type: "textarea",
		label:
			"How did you hear about Polluladi? How does this knowledge, projects and community fit?",
		placeholder: "Describe how you heard about us...",
		required: true,
	},
	{
		id: "designs_and_visuals",
		type: "textarea",
		label: "Will you have any designs and/or visuals?",
		placeholder: "Describe your design plans...",
		required: false,
	},
	{
		id: "sponsorship_benefits",
		type: "textarea",
		label:
			"If you are applying for a sponsorship which includes a benefit please provide a breakdown of up to three the concept",
		placeholder: "Outline sponsorship benefits...",
		required: false,
	},
	{
		id: "event_follow_up",
		type: "textarea",
		label: "How will you follow up after this event?",
		placeholder: "Describe your follow-up plans...",
		required: true,
	},
	{
		id: "audience_engagement",
		type: "textarea",
		label:
			"What kind of audience does your event aim to attract? How will you engage your audience?",
		placeholder: "Describe your target audience...",
		required: true,
	},
	{
		id: "application_terms",
		type: "textarea",
		label: "By submitting, forms, ToS's, etc's, More...",
		placeholder: "Acknowledge terms...",
		required: true,
	},
	{
		id: "event_timeline",
		type: "textarea",
		label: "How will you work on to then post this event?",
		placeholder: "Provide your timeline...",
		required: true,
	},
	{
		id: "marketing_strategy",
		type: "textarea",
		label: "What is your marketing strategy?",
		placeholder: "Describe your marketing approach...",
		required: true,
	},
	{
		id: "product_distribution",
		type: "textarea",
		label:
			"How do you plan to distribute the social photos/videos/production? How much content do you plan to produce?",
		placeholder: "Explain content distribution plans...",
		required: true,
	},
	{
		id: "service_definition",
		type: "textarea",
		label: "How do you define 'service'?",
		placeholder: "Define what service means to you...",
		required: true,
	},
	{
		id: "service_numbers",
		type: "textarea",
		label:
			"Define your service based on specific numbers you aim to reach/achieve, levels, turnover gross from speakers, attendees...",
		placeholder: "Provide specific service metrics...",
		required: true,
	},
	{
		id: "milestones_information",
		type: "textarea",
		label: "Milestones and information?",
		placeholder: "List your milestones...",
		required: true,
	},
	{
		id: "team_info",
		type: "textarea",
		label: "Team",
		placeholder: "Describe your team...",
		required: true,
	},
	{
		id: "organization_info",
		type: "textarea",
		label:
			"If you are an organization please provide information about previous works and links to social media and website/location",
		placeholder: "Provide organization details...",
		required: false,
	},
	{
		id: "position_explanation",
		type: "textarea",
		label:
			"Explain your relation to Polluladi what is your position in the ecosystem, what groups do you officially with, and what areas you participate in",
		placeholder: "Explain your position in the ecosystem...",
		required: true,
	},
	{
		id: "target_travel",
		type: "textarea",
		label: "Target Travel",
		placeholder: "Describe travel requirements...",
		required: false,
	},
	{
		id: "previous_productions",
		type: "textarea",
		label:
			"Have you been able to document the most photos/videos/post-production? How much content do you plan to produce?",
		placeholder: "Describe previous production work...",
		required: false,
	},
	{
		id: "application_support",
		type: "textarea",
		label:
			"How would you rank the various Technical or the requirements? Are they realistic? Are you from different groups/focal programs?",
		placeholder: "Rank technical requirements...",
		required: true,
	},
	{
		id: "additional_information",
		type: "textarea",
		label: "Additional Information",
		placeholder: "Any additional details...",
		required: false,
	},
];
