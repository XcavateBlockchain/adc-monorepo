export type Curator = {
	id: string;
	name: string;
	role: string;
	status: boolean;
};

export type Bounty = {
	name: string;
	logo: string;
	dateUpdated: string;
	curators: Curator[];
};

export const bounties: Bounty[] = [
	{
		name: "DOTEB",
		logo: "https://polkadot.network/favicon.ico",
		dateUpdated: "2025-06-25",
		curators: [{ id: "c1", name: "BOB", role: "Owner", status: true }],
	},
	// {
	// 	name: "NFT Metadata Optimization for Kusama",
	// 	logo: "https://kusama.network/favicon.ico",
	// 	dateUpdated: "2025-06-21",
	// 	curators: [
	// 		{ id: "c6", name: "Charlie Ruiz", role: "Council Member", status: true },
	// 		{ id: "c7", name: "Dana Liu", role: "Design Lead", status: true },
	// 		{ id: "c8", name: "Elena Varga", role: "Protocol Designer", status: false },
	// 		{ id: "c9", name: "James Okwu", role: "Developer", status: true },
	// 	],
	// },
	// {
	// 	name: "Event bounty",
	// 	logo: "https://substrate.io/favicon.ico",
	// 	dateUpdated: "2025-06-18",
	// 	curators: [
	// 		{ id: "c10", name: "Ella Zhang", role: "Documentation Lead", status: true },
	// 		{ id: "c11", name: "Frank Osei", role: "Technical Writer", status: false },
	// 		{ id: "c12", name: "Katerina Diaz", role: "DevRel", status: true },
	// 		{ id: "c13", name: "Lucas Mendes", role: "Council Member", status: true },
	// 		{ id: "c14", name: "Hannah Cho", role: "Education Advisor", status: true },
	// 	],
	// },
	// {
	// 	name: "BD bounty",
	// 	logo: "https://brushfam.io/favicon.ico",
	// 	dateUpdated: "2025-06-24",
	// 	curators: [
	// 		{ id: "c15", name: "Grace Tan", role: "Security Engineer", status: true },
	// 		{ id: "c16", name: "Haruto Sato", role: "Auditor", status: false },
	// 		{ id: "c17", name: "Mohammed Al-Karim", role: "Lead Auditor", status: true },
	// 		{ id: "c18", name: "Sarah Wu", role: "Advisor", status: true },
	// 		{ id: "c19", name: "Leonardo Braga", role: "Council Member", status: true },
	// 		{ id: "c20", name: "Anita Kapoor", role: "Governance Liaison", status: false },
	// 	],
	// },
	// {
	// 	name: "DAO Governance UI Enhancements",
	// 	logo: "https://commonwealth.im/favicon.ico",
	// 	dateUpdated: "2025-06-20",
	// 	curators: [
	// 		{ id: "c21", name: "Ivan Petrov", role: "Frontend Lead", status: true },
	// 		{ id: "c22", name: "Julia Ramos", role: "Governance Designer", status: true },
	// 		{ id: "c23", name: "Benji Adler", role: "UX Specialist", status: false },
	// 		{ id: "c24", name: "Olivia Song", role: "QA Engineer", status: true },
	// 	],
	// },
];

export interface ITemplate {
	id: number;
	title: string;
	image: string;
	description?: string;
	responses?: number;
	updated: string;
	active: boolean;
}

export const templates: ITemplate[] = [
	{
		id: 1,
		title: "BD Template",
		image: "",
		responses: 50,
		updated: "04 May 2025",
		active: true,
	},
	{
		id: 2,
		title: "Extraordinary Event Template",
		image: "",
		responses: 50,
		updated: "04 May 2025",
		active: true,
	},
	{
		id: 3,
		title: "Key Event Template",
		image: "",
		responses: 50,
		updated: "04 May 2025",
		active: true,
	},
	{
		id: 1,
		title: "Meetups Template",
		image: "",
		responses: 50,
		updated: "04 May 2025",
		active: true,
	},
];
