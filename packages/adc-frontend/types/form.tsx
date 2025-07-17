export interface FormField {
	id: string;
	type: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	options?: string[];
}

export interface IEvent {
	id: number;
	name: string;
	date: string;
	submissionType: string; // take from template name
	submitterName: string;
	status: string;
	submittedAt: string;
	response: object;
}
