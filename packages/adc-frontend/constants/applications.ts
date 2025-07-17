export type Applicant = {
	id: number;
	name: string;
	email: string;
	created: string;
	title: string; // Event title
	summary: string; // Event summary
	description: string; // About themselves
	status: "reviewing" | "rejected" | "approved";
	organization?: string;
	isExperience: string;
	previouslyOrganized: string;
};

export const applicants: Applicant[] = [
	{
		id: 1,
		name: "Sarah Johnson",
		email: "sarah.johnson@techcorp.com",
		created: "2024-01-15",
		title: "Tech Innovations Expo 2024",
		summary:
			"A showcase of the latest advancements in technology, bringing together industry leaders and innovators.",
		description:
			"Passionate about connecting people through technology, I have a strong background in organizing large-scale tech events.",
		status: "approved",
		organization: "TechCorp Solutions",
		isExperience: "5+ years in event management",
		previouslyOrganized: "TechCon 2023, DevSummit 2022",
	},
	{
		id: 2,
		name: "Michael Chen",
		email: "mchen@innovatevent.com",
		created: "2024-01-18",
		title: "Startup Growth Conference",
		summary:
			"An event focused on helping startups scale, featuring workshops and networking opportunities.",
		description:
			"I thrive in dynamic environments and love helping startups connect with resources and mentors.",
		status: "reviewing",
		organization: "Innovate Events",
		isExperience: "3+ years in conference planning",
		previouslyOrganized: "StartupWeekend 2023",
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		email: "emily.rodriguez@globaltech.org",
		created: "2024-01-20",
		title: "Global Tech Community Meetup",
		summary:
			"A gathering for global tech enthusiasts to share ideas and foster collaboration.",
		description:
			"Community building is my passion, and I enjoy creating inclusive spaces for learning and networking.",
		status: "rejected",
		organization: "Global Tech Foundation",
		isExperience: "2+ years in community events",
		previouslyOrganized: "Local meetups and workshops",
	},
	{
		id: 4,
		name: "David Kim",
		email: "david.kim@blockchain.events",
		created: "2024-01-22",
		title: "Blockchain Future Summit",
		summary:
			"Exploring the future of blockchain technology with industry experts and pioneers.",
		description:
			"With a deep interest in blockchain, I have dedicated my career to advancing the ecosystem through impactful events.",
		status: "approved",
		organization: "Blockchain Events Co.",
		isExperience: "7+ years in blockchain events",
		previouslyOrganized: "CryptoCon 2023, DeFi Summit 2022",
	},
	{
		id: 5,
		name: "Lisa Thompson",
		email: "lisa.thompson@web3community.com",
		created: "2024-01-25",
		title: "Web3 Community Hackathon",
		summary: "A hackathon to foster innovation and collaboration in the Web3 space.",
		description:
			"I am dedicated to empowering communities and believe in the transformative power of Web3 technologies.",
		status: "reviewing",
		organization: "Web3 Community Hub",
		isExperience: "4+ years in community building",
		previouslyOrganized: "Web3 Meetups, Hackathons",
	},
	{
		id: 6,
		name: "James Wilson",
		email: "jwilson@enterprise.events",
		created: "2024-01-28",
		title: "Enterprise Leaders Forum",
		summary:
			"A forum for enterprise leaders to discuss trends and challenges in the tech industry.",
		description:
			"My expertise lies in orchestrating high-profile events that drive business growth and leadership.",
		status: "approved",
		organization: "Enterprise Events Ltd",
		isExperience: "8+ years in enterprise events",
		previouslyOrganized: "Enterprise Summit 2023, Tech Leaders Forum",
	},
	{
		id: 7,
		name: "Maria Garcia",
		email: "maria.garcia@startup.events",
		created: "2024-01-30",
		title: "Startup Pitch Night",
		summary: "An evening for startups to pitch their ideas to investors and industry experts.",
		description:
			"I am passionate about supporting early-stage founders and creating opportunities for growth.",
		status: "reviewing",
		organization: "Startup Events Network",
		isExperience: "3+ years in startup ecosystem",
		previouslyOrganized: "Pitch Nights, Founder Meetups",
	},
	{
		id: 8,
		name: "Alex Turner",
		email: "alex.turner@ai.events",
		created: "2024-02-01",
		title: "AI & ML Innovations Summit",
		summary:
			"A summit dedicated to the latest innovations in artificial intelligence and machine learning.",
		description:
			"AI is my passion, and I enjoy bringing together experts to share knowledge and inspire breakthroughs.",
		status: "approved",
		organization: "AI Events Collective",
		isExperience: "6+ years in AI/ML events",
		previouslyOrganized: "AI Summit 2023, ML Conference 2022",
	},
	{
		id: 9,
		name: "Rachel Green",
		email: "rachel.green@community.events",
		created: "2024-02-03",
		title: "Community Builders Gathering",
		summary:
			"A gathering for community leaders to exchange best practices and success stories.",
		description:
			"I believe in the power of local communities and strive to make a positive impact through events.",
		status: "rejected",
		organization: "Community Events Group",
		isExperience: "1+ year in event coordination",
		previouslyOrganized: "Local community gatherings",
	},
	{
		id: 10,
		name: "Kevin Park",
		email: "kevin.park@fintech.events",
		created: "2024-02-05",
		title: "FinTech Innovation Forum",
		summary: "A forum to discuss the latest trends and innovations in financial technology.",
		description:
			"With a strong background in fintech, I am committed to advancing the industry through collaborative events.",
		status: "reviewing",
		organization: "FinTech Events Alliance",
		isExperience: "5+ years in financial tech events",
		previouslyOrganized: "FinTech Summit 2023, Banking Innovation Forum",
	},
];
