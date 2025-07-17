export interface FormResponse {
	id: string;
	[key: string]: any;
}

export interface IEvent {
	id: number;
	name: string;
	date: string;
	submissionType: string; // take from template name
	submitterName: string;
	status: string;
	submittedAt: string;
	response: FormResponse;
}

// Sample responses array with 10 different responses
export const sampleResponses: FormResponse[] = [
	{
		id: "response_1",
		event_description:
			"A 3-day blockchain hackathon focusing on DeFi solutions for emerging markets. The event will bring together 200+ developers, designers, and entrepreneurs to build innovative financial applications. We'll have workshops on smart contract development, tokenomics, and regulatory compliance.",
		event_format:
			"Day 1: Opening ceremony, team formation, and workshops. Day 2: Intensive development with mentorship sessions. Day 3: Final presentations and judging. Speakers include industry leaders from major DeFi protocols.",
		sponsorship_decision:
			"We chose fast-track sponsorship to secure venue and catering early, ensuring maximum participation and quality experience for attendees.",
		exception_understanding:
			"Collaborating with local blockchain communities and university tech clubs to ensure diverse participation.",
		event_kind:
			"DeFi hackathons are crucial for innovation in emerging markets. Our team has organized 5 successful tech events previously.",
		heard_about_polluladi:
			"Discovered Polluladi through their community forum. Their focus on grassroots blockchain education aligns perfectly with our mission.",
		designs_and_visuals:
			"Professional branding package including logos, banners, presentation templates, and social media assets.",
		sponsorship_benefits:
			"Tier 1: Logo placement and opening remarks. Tier 2: Workshop hosting and booth space. Tier 3: Naming rights and judging panel seat.",
		event_follow_up:
			"Monthly meetups for participants, mentorship program for winning teams, and quarterly progress reports.",
		audience_engagement:
			"Targeting developers, students, and fintech professionals. Engagement through interactive workshops, networking sessions, and gamified challenges.",
		application_terms:
			"Agreed to all terms and conditions as outlined in the application guidelines.",
		event_timeline:
			"3 months preparation, 1 month marketing, event execution, and 2 months follow-up activities.",
		marketing_strategy:
			"Social media campaigns, university partnerships, tech community outreach, and influencer collaborations.",
		product_distribution:
			"Live streaming, highlight reels, participant interviews, and project showcases. Expecting 50+ pieces of content.",
		service_definition:
			"Service means providing valuable learning experiences and networking opportunities for the blockchain community.",
		service_numbers:
			"Target: 200 participants, 50 projects, 10 workshops, 5 expert speakers, 3 winning teams.",
		milestones_information:
			"Month 1: Venue booking, Month 2: Speaker confirmation, Month 3: Registration opens, Event execution.",
		team_info:
			"5-person team with combined 20+ years in event management and blockchain development.",
		organization_info:
			"BlockChain Innovators Club - organized 5 previous events, 2K+ community members. Website: bcic.org",
		position_explanation:
			"Active community member for 2 years, participate in developer forums and education initiatives.",
		target_travel:
			"Speakers from 3 different countries, estimated travel budget for 5 international guests.",
		previous_productions:
			"Produced 100+ hours of content from previous events, including tutorials and project demos.",
		application_support:
			"Technical requirements are realistic and well-planned. Support from 3 different community groups.",
		additional_information:
			"This event will be carbon-neutral with digital certificates and plant-based catering.",
	},
	{
		id: "response_2",
		event_description:
			"NFT art exhibition showcasing digital artists from Africa. A 2-week gallery experience combining physical and virtual reality displays, featuring 50+ artists and their unique digital creations.",
		event_format:
			"Weekly artist talks, VR gallery tours, live minting sessions, and interactive art workshops. Hybrid format with both physical gallery and metaverse presence.",
		sponsorship_decision:
			"Fast-track sponsorship needed to secure premium gallery space and cutting-edge VR equipment for optimal visitor experience.",
		exception_understanding:
			"Partnering with African Digital Art Collective and local art schools to ensure authentic representation.",
		event_kind:
			"First major NFT exhibition in our region. Our team combines art curation expertise with blockchain technology knowledge.",
		heard_about_polluladi:
			"Recommended by fellow artists in the NFT community who had positive experiences with Polluladi's support programs.",
		designs_and_visuals:
			"Custom exhibition design, artist portfolio layouts, VR environment designs, and promotional materials.",
		sponsorship_benefits:
			"Gallery naming rights, VIP preview access, artist meet-and-greets, and exclusive NFT drops for sponsors.",
		event_follow_up:
			"Monthly artist spotlight features, quarterly exhibitions, and ongoing artist development programs.",
		audience_engagement:
			"Art collectors, crypto enthusiasts, students, and general public. Interactive installations and guided tours.",
		application_terms:
			"All terms accepted and artist agreements secured for intellectual property protection.",
		event_timeline:
			"4 months artist selection and curation, 2 months setup, 2 weeks exhibition, ongoing follow-up.",
		marketing_strategy:
			"Art magazine partnerships, crypto influencer collaborations, university presentations, and social media campaigns.",
		product_distribution:
			"Virtual gallery tours, artist interviews, behind-the-scenes content, and exhibition highlights. 75+ content pieces planned.",
		service_definition:
			"Service means bridging traditional art appreciation with digital innovation and blockchain technology.",
		service_numbers:
			"50 featured artists, 500+ artworks, 2000+ visitors expected, 10 workshops, 20 VR experiences.",
		milestones_information:
			"Month 1: Artist submissions, Month 2: Selection process, Month 3: Technical setup, Month 4: Marketing launch.",
		team_info:
			"Art curator, blockchain developer, VR specialist, and marketing coordinator with 15+ years combined experience.",
		organization_info:
			"Digital Arts Foundation - 3 years operating, 500+ artist network. Website: digitalartsfoundation.org",
		position_explanation:
			"Contributor to Polluladi's digital art initiatives and member of the creative economy working group.",
		target_travel:
			"International artists from 5 countries, estimated travel and accommodation support for 15 participants.",
		previous_productions:
			"Created virtual exhibition content for 3 previous shows, including 360° gallery tours and artist documentaries.",
		application_support:
			"Technical setup is ambitious but achievable with our VR partner. Support from 4 different artist communities.",
		additional_information:
			"Proceeds from NFT sales will support emerging artists through scholarship programs.",
	},
	{
		id: "response_3",
		event_description:
			"DeFi education bootcamp for university students across Latin America. 5-day intensive program covering smart contracts, yield farming, and decentralized governance through hands-on projects.",
		event_format:
			"Morning lectures, afternoon labs, evening project presentations. Guest speakers from major DeFi protocols and regulatory experts.",
		sponsorship_decision:
			"Sponsorship enables us to provide free attendance, meals, and materials for 100 students from underserved communities.",
		exception_understanding:
			"Collaborating with university blockchain clubs and Latin American DeFi Alliance for curriculum development.",
		event_kind:
			"DeFi education gap in Latin America is significant. Our team has academic and industry experience to bridge this gap.",
		heard_about_polluladi:
			"Introduced through university partnership program, impressed by their commitment to global blockchain education.",
		designs_and_visuals:
			"Educational materials, presentation templates, certification designs, and promotional graphics for universities.",
		sponsorship_benefits:
			"University partnership opportunities, graduate recruitment access, and brand visibility across 10+ institutions.",
		event_follow_up:
			"Alumni network creation, job placement assistance, and advanced certification programs.",
		audience_engagement:
			"Computer science and finance students. Hands-on labs, group projects, and mentorship matching.",
		application_terms:
			"University agreements in place, student privacy policies agreed, all terms accepted.",
		event_timeline:
			"2 months curriculum development, 1 month recruitment, 5 days intensive program, 6 months follow-up.",
		marketing_strategy:
			"University partnerships, student ambassador programs, academic conference presentations, and social media outreach.",
		product_distribution:
			"Course recordings, project showcases, student testimonials, and educational content library. 40+ educational pieces.",
		service_definition:
			"Service means democratizing access to cutting-edge financial technology education.",
		service_numbers:
			"100 students, 10 universities, 15 instructors, 5 industry mentors, 20 hands-on projects.",
		milestones_information:
			"Month 1: Curriculum finalization, Month 2: Student applications, Event week, Follow-up programs.",
		team_info:
			"University professors, DeFi developers, and educational technology specialists with 25+ years combined experience.",
		organization_info:
			"Latin American Blockchain Education Initiative - 2 years active, partnerships with 15 universities.",
		position_explanation:
			"Education committee member, contributed to curriculum development and student outreach programs.",
		target_travel:
			"Students from 8 countries, estimated travel scholarships for 30 participants from remote areas.",
		previous_productions:
			"Created online course series with 10K+ enrolled students, educational videos with 500K+ views.",
		application_support:
			"Educational requirements are well-structured and realistic. Support from university partnerships.",
		additional_information:
			"Program includes diversity and inclusion initiatives to ensure equal access for all students.",
	},
	{
		id: "response_4",
		event_description:
			"Decentralized gaming tournament featuring play-to-earn games and NFT trading competitions. 3-day event with professional esports production and blockchain gaming workshops.",
		event_format:
			"Tournament brackets, live streaming, developer showcases, and NFT marketplace demonstrations. Professional casting and audience interaction.",
		sponsorship_decision:
			"Fast-track sponsorship required for prize pool funding and professional esports production equipment.",
		exception_understanding:
			"Partnering with gaming guilds and blockchain gaming development studios for authentic competition.",
		event_kind:
			"First major blockchain gaming tournament in our region. Team has esports and blockchain gaming expertise.",
		heard_about_polluladi:
			"Connected through gaming community channels, their support for innovative blockchain applications is well-known.",
		designs_and_visuals:
			"Tournament branding, player profiles, leaderboard designs, and streaming overlay graphics.",
		sponsorship_benefits:
			"In-game advertising, prize pool naming rights, VIP tournament access, and exclusive NFT giveaways.",
		event_follow_up:
			"Monthly tournaments, player development programs, and gaming guild partnerships.",
		audience_engagement:
			"Gamers, crypto enthusiasts, and esports fans. Interactive challenges, live competitions, and community voting.",
		application_terms:
			"Player agreements, streaming rights, and prize distribution terms all accepted.",
		event_timeline:
			"3 months tournament preparation, 1 month promotion, 3 days event execution, ongoing tournament series.",
		marketing_strategy:
			"Gaming influencer partnerships, social media campaigns, esports community outreach, and live streaming promotion.",
		product_distribution:
			"Live tournament streams, player interviews, game tutorials, and highlight reels. 60+ content pieces expected.",
		service_definition:
			"Service means creating competitive opportunities for blockchain gaming communities.",
		service_numbers:
			"150 players, 8 games, $50K prize pool, 3 streaming channels, 5000+ viewers expected.",
		milestones_information:
			"Month 1: Game selection, Month 2: Player registration, Month 3: Technical setup, Tournament execution.",
		team_info:
			"Esports producers, blockchain developers, and gaming content creators with 20+ years combined experience.",
		organization_info:
			"Blockchain Gaming Alliance - 18 months active, 1000+ player community. Website: blockchaingaming.org",
		position_explanation:
			"Gaming committee member, organized community tournaments and promoted blockchain gaming adoption.",
		target_travel:
			"Professional players from 6 countries, estimated travel and accommodation for 20 international participants.",
		previous_productions:
			"Produced 50+ hours of gaming content, managed live streams for 10+ tournaments with 100K+ total viewers.",
		application_support:
			"Technical requirements are comprehensive and achievable with our production partner. Gaming community support secured.",
		additional_information:
			"Tournament promotes sustainable gaming through carbon-offset initiatives and eco-friendly prizes.",
	},
	{
		id: "response_5",
		event_description:
			"DAO governance workshop series for established communities looking to implement decentralized decision-making. 4-week program covering voting mechanisms, proposal systems, and treasury management.",
		event_format:
			"Weekly 3-hour sessions combining theory, case studies, and hands-on governance simulation exercises.",
		sponsorship_decision:
			"Sponsorship enables expert facilitator fees and development of custom governance tools for participants.",
		exception_understanding:
			"Collaborating with established DAOs and governance research organizations for curriculum expertise.",
		event_kind:
			"DAO governance is complex and evolving. Our team has practical experience in multiple governance systems.",
		heard_about_polluladi:
			"Referred by governance researchers who praised Polluladi's support for institutional blockchain education.",
		designs_and_visuals:
			"Workshop materials, governance simulation interfaces, and educational infographics.",
		sponsorship_benefits:
			"Governance tool beta access, expert consultation sessions, and research collaboration opportunities.",
		event_follow_up:
			"Implementation support, governance health check-ins, and quarterly best practices sharing.",
		audience_engagement:
			"DAO operators, community managers, and governance enthusiasts. Interactive simulations and peer learning.",
		application_terms:
			"Participant agreements for governance simulation data and research participation consent obtained.",
		event_timeline:
			"1 month preparation, 4 weeks program delivery, 3 months implementation support.",
		marketing_strategy:
			"DAO community outreach, governance forum announcements, and expert network promotion.",
		product_distribution:
			"Workshop recordings, governance templates, case study documentation, and best practices guide. 25+ educational resources.",
		service_definition:
			"Service means empowering communities with effective decentralized governance capabilities.",
		service_numbers:
			"30 participants, 8 case studies, 4 governance simulations, 6 expert facilitators, 12 implementation hours.",
		milestones_information:
			"Week 1: Governance theory, Week 2: Voting mechanisms, Week 3: Treasury management, Week 4: Implementation planning.",
		team_info:
			"Governance researchers, DAO operators, and community management specialists with 18+ years combined experience.",
		organization_info:
			"Decentralized Governance Institute - 3 years research focus, advisory roles in 20+ DAOs.",
		position_explanation:
			"Governance working group member, contributed to governance framework development and community education.",
		target_travel:
			"Expert facilitators from 4 countries, estimated travel costs for 6 international speakers.",
		previous_productions:
			"Created governance documentation for 15+ DAOs, educational content with 50K+ community reach.",
		application_support:
			"Governance frameworks are proven and scalable. Support from established DAO communities.",
		additional_information:
			"Program includes diversity metrics and inclusive governance practices to ensure representative participation.",
	},
	{
		id: "response_6",
		event_description:
			"Sustainable blockchain conference focusing on environmental impact and green technology solutions. 2-day event highlighting carbon-neutral protocols and renewable energy integration.",
		event_format:
			"Keynote speeches, panel discussions, technical workshops, and sustainability showcase. Carbon-neutral event with virtual participation options.",
		sponsorship_decision:
			"Sponsorship supports renewable energy offsetting and sustainable event practices including zero-waste catering.",
		exception_understanding:
			"Collaborating with environmental organizations and green technology companies for authentic sustainability focus.",
		event_kind:
			"Blockchain environmental impact needs addressing. Our team combines environmental science with blockchain expertise.",
		heard_about_polluladi:
			"Engaged through sustainability initiatives, appreciate their commitment to responsible blockchain development.",
		designs_and_visuals:
			"Eco-friendly branding, sustainability infographics, and carbon footprint visualizations.",
		sponsorship_benefits:
			"Sustainability leadership positioning, green technology showcase opportunities, and environmental impact reporting.",
		event_follow_up:
			"Quarterly sustainability reports, green technology adoption tracking, and environmental impact assessments.",
		audience_engagement:
			"Environmental advocates, blockchain developers, and sustainability professionals. Interactive carbon calculators and green pledges.",
		application_terms:
			"Environmental impact agreements, sustainability reporting commitments, and carbon offset verification accepted.",
		event_timeline:
			"4 months sustainability planning, 2 months speaker coordination, 2 days event, ongoing impact monitoring.",
		marketing_strategy:
			"Environmental media partnerships, sustainability influencer collaborations, and green technology showcases.",
		product_distribution:
			"Sustainability reports, educational content, speaker presentations, and impact measurement tools. 35+ resources planned.",
		service_definition:
			"Service means promoting environmentally responsible blockchain development and adoption.",
		service_numbers:
			"300 attendees, 15 speakers, 8 workshops, 100% carbon neutral, 5 sustainability commitments.",
		milestones_information:
			"Month 1: Sustainability planning, Month 2: Speaker confirmation, Month 3: Registration launch, Event execution.",
		team_info:
			"Environmental scientists, blockchain developers, and sustainability consultants with 22+ years combined experience.",
		organization_info:
			"Green Blockchain Alliance - 2 years active, partnerships with 30+ environmental organizations.",
		position_explanation:
			"Sustainability committee member, contributed to environmental impact assessments and green technology promotion.",
		target_travel:
			"International speakers with carbon-offset travel, estimated sustainable travel arrangements for 12 participants.",
		previous_productions:
			"Created sustainability documentation for 10+ blockchain projects, environmental impact videos with 200K+ views.",
		application_support:
			"Sustainability requirements are ambitious but achievable with environmental partner support.",
		additional_information:
			"Event proceeds support reforestation projects and renewable energy blockchain research.",
	},
	{
		id: "response_7",
		event_description:
			"Web3 women's leadership summit empowering female entrepreneurs and developers in blockchain technology. 3-day intensive program with mentorship, networking, and funding opportunities.",
		event_format:
			"Leadership workshops, technical sessions, pitch competitions, and networking events. Mentorship matching and funding introductions.",
		sponsorship_decision:
			"Sponsorship enables childcare services, travel scholarships, and professional development resources for underrepresented participants.",
		exception_understanding:
			"Collaborating with women's tech organizations and female-led blockchain companies for authentic representation.",
		event_kind:
			"Gender diversity in blockchain needs improvement. Our team has extensive experience in women's tech advocacy.",
		heard_about_polluladi:
			"Recommended by female leaders in blockchain who highlighted Polluladi's commitment to diversity and inclusion.",
		designs_and_visuals:
			"Empowering branding, speaker spotlight designs, and professional networking materials.",
		sponsorship_benefits:
			"Diversity leadership positioning, talent pipeline access, and female entrepreneur network connections.",
		event_follow_up:
			"Mentorship program continuation, quarterly networking events, and women's leadership development initiatives.",
		audience_engagement:
			"Women in blockchain, female entrepreneurs, and diversity advocates. Interactive workshops and peer mentoring.",
		application_terms:
			"Diversity and inclusion commitments, mentorship agreements, and participant support terms accepted.",
		event_timeline:
			"3 months program development, 2 months recruitment, 3 days intensive summit, 12 months follow-up support.",
		marketing_strategy:
			"Women's tech community outreach, female influencer partnerships, and diversity organization collaborations.",
		product_distribution:
			"Leadership resources, mentorship guides, success stories, and networking tools. 45+ empowerment resources.",
		service_definition:
			"Service means creating equitable opportunities for women in blockchain technology and entrepreneurship.",
		service_numbers:
			"150 participants, 25 mentors, 10 funding partners, 5 pitch winners, 100% female speaker lineup.",
		milestones_information:
			"Month 1: Mentor recruitment, Month 2: Participant applications, Month 3: Program finalization, Summit execution.",
		team_info:
			"Women's tech advocates, blockchain entrepreneurs, and diversity specialists with 30+ years combined experience.",
		organization_info:
			"Women in Web3 - 4 years active, 2000+ member network. Website: womeninweb3.org",
		position_explanation:
			"Diversity committee member, organized women's networking events and promoted female leadership in blockchain.",
		target_travel:
			"Female leaders from 10 countries, estimated travel scholarships for 25 participants from underrepresented regions.",
		previous_productions:
			"Created empowerment content for 500+ women, leadership videos with 300K+ views across platforms.",
		application_support:
			"Diversity requirements are comprehensive and important. Support from women's tech organizations secured.",
		additional_information:
			"Summit includes childcare support and accessibility accommodations to ensure inclusive participation.",
	},
	{
		id: "response_8",
		event_description:
			"Blockchain music festival featuring NFT album releases, decentralized music streaming, and cryptocurrency payments. 2-day event combining live performances with Web3 technology demonstrations.",
		event_format:
			"Live performances, NFT minting stations, music streaming protocol demos, and artist-fan interaction experiences.",
		sponsorship_decision:
			"Sponsorship covers artist fees, NFT platform development, and professional music production equipment.",
		exception_understanding:
			"Collaborating with music NFT platforms and independent artists exploring blockchain monetization.",
		event_kind:
			"Music industry needs decentralized solutions. Our team combines music production with blockchain development expertise.",
		heard_about_polluladi:
			"Connected through creative industries program, impressed by support for innovative blockchain applications.",
		designs_and_visuals:
			"Festival branding, NFT artwork, stage designs, and music streaming interface mockups.",
		sponsorship_benefits:
			"Music industry connections, NFT platform partnerships, and artist collaboration opportunities.",
		event_follow_up:
			"Monthly music NFT releases, artist development programs, and blockchain music education initiatives.",
		audience_engagement:
			"Music lovers, NFT collectors, and blockchain enthusiasts. Interactive NFT creation and live music experiences.",
		application_terms:
			"Music licensing agreements, NFT distribution rights, and artist collaboration terms accepted.",
		event_timeline:
			"4 months artist booking, 2 months technical setup, 2 days festival, ongoing music platform development.",
		marketing_strategy:
			"Music influencer partnerships, NFT community outreach, and blockchain music media coverage.",
		product_distribution:
			"Live performance recordings, behind-the-scenes content, NFT creation tutorials, and artist interviews. 55+ content pieces.",
		service_definition:
			"Service means revolutionizing music distribution and monetization through blockchain technology.",
		service_numbers:
			"20 artists, 1000+ attendees, 500+ NFTs minted, 3 streaming platforms, 50+ music releases.",
		milestones_information:
			"Month 1: Artist selection, Month 2: NFT platform development, Month 3: Marketing launch, Festival execution.",
		team_info:
			"Music producers, blockchain developers, and event organizers with 25+ years combined experience.",
		organization_info:
			"Blockchain Music Collective - 2 years active, partnerships with 50+ independent artists.",
		position_explanation:
			"Creative industries committee member, promoted blockchain adoption in music and supported artist education.",
		target_travel:
			"International artists from 8 countries, estimated travel and accommodation for 15 performing artists.",
		previous_productions:
			"Produced music content for 100+ artists, NFT collections with 50K+ sales, streaming platform content.",
		application_support:
			"Music and blockchain integration is innovative and technically sound. Artist community support confirmed.",
		additional_information:
			"Festival promotes fair artist compensation and transparent music rights management through blockchain.",
	},
	{
		id: "response_9",
		event_description:
			"Decentralized finance security audit training program for smart contract developers. 5-day intensive bootcamp covering common vulnerabilities, testing methodologies, and security best practices.",
		event_format:
			"Technical workshops, vulnerability labs, code review sessions, and security tool demonstrations. Hands-on penetration testing exercises.",
		sponsorship_decision:
			"Sponsorship enables security expert fees and specialized testing environment setup for realistic vulnerability demonstrations.",
		exception_understanding:
			"Collaborating with security firms and audit companies for practical vulnerability examples and industry insights.",
		event_kind:
			"DeFi security is critical for industry growth. Our team has extensive smart contract security and audit experience.",
		heard_about_polluladi:
			"Referred by security professionals who praised Polluladi's commitment to blockchain security education.",
		designs_and_visuals:
			"Security training materials, vulnerability demonstration interfaces, and certification designs.",
		sponsorship_benefits:
			"Security expertise positioning, developer talent pipeline, and audit service partnerships.",
		event_follow_up:
			"Certification maintenance, security community participation, and ongoing vulnerability research collaboration.",
		audience_engagement:
			"Smart contract developers, security researchers, and DeFi professionals. Interactive vulnerability labs and peer code reviews.",
		application_terms:
			"Security training agreements, vulnerability disclosure protocols, and professional certification terms accepted.",
		event_timeline:
			"2 months curriculum development, 1 month expert coordination, 5 days intensive training, certification follow-up.",
		marketing_strategy:
			"Developer community outreach, security conference presentations, and professional network promotion.",
		product_distribution:
			"Security guidelines, vulnerability databases, training materials, and certification resources. 30+ security resources.",
		service_definition:
			"Service means enhancing blockchain security through comprehensive developer education and best practices.",
		service_numbers:
			"40 developers, 8 security experts, 15 vulnerability labs, 100+ code examples, 5 certification levels.",
		milestones_information:
			"Month 1: Expert recruitment, Month 2: Lab development, Training week, Certification assessment.",
		team_info:
			"Security researchers, smart contract auditors, and developer educators with 35+ years combined experience.",
		organization_info:
			"Blockchain Security Institute - 3 years research focus, audit partnerships with 25+ protocols.",
		position_explanation:
			"Security working group member, contributed to vulnerability research and developer security education.",
		target_travel:
			"Security experts from 5 countries, estimated travel costs for 8 international specialists.",
		previous_productions:
			"Created security documentation for 20+ protocols, educational content with 100K+ developer reach.",
		application_support:
			"Security requirements are thorough and industry-standard. Support from security firm partnerships.",
		additional_information:
			"Program includes responsible disclosure training and ethical hacking principles for comprehensive security education.",
	},
	{
		id: "response_10",
		event_description:
			"Blockchain for social impact conference highlighting humanitarian applications and social good initiatives. 3-day event showcasing identity solutions, financial inclusion, and transparency projects.",
		event_format:
			"Impact presentations, project showcases, funding roundtables, and implementation workshops. Focus on real-world social applications.",
		sponsorship_decision:
			"Sponsorship supports travel for social impact organizations and development of humanitarian blockchain solutions.",
		exception_understanding:
			"Collaborating with NGOs, humanitarian organizations, and social impact blockchain projects for authentic use cases.",
		event_kind:
			"Blockchain social impact potential is underexplored. Our team has extensive experience in social good technology applications.",
		heard_about_polluladi:
			"Engaged through social impact initiatives, appreciate their commitment to blockchain for positive change.",
		designs_and_visuals:
			"Impact-focused branding, project showcase materials, and social good infographics.",
		sponsorship_benefits:
			"Social impact leadership positioning, humanitarian partnerships, and positive change association.",
		event_follow_up:
			"Impact measurement tracking, project implementation support, and quarterly social good reporting.",
		audience_engagement:
			"Social workers, humanitarian professionals, and impact investors. Interactive impact calculators and project demonstrations.",
		additional_information:
			"Program includes responsible disclosure training and ethical hacking principles for comprehensive security education.",
	},
];

export const events: IEvent[] = [
	{
		id: 1,
		name: "Extraordinary Blockchain Summit",
		date: "2025-05-10",
		submissionType: "Extraordinary Event Template",
		submitterName: "Alice Smith",
		status: "reviewing",
		submittedAt: "2025-04-01T10:00:00Z",
		response: sampleResponses[0],
	},
	// {
	// 	id: 2,
	// 	name: "Key Industry Meetup",
	// 	date: "2025-06-15",
	// 	submissionType: "Key Event Template",
	// 	submitterName: "Bob Chen",
	// 	status: "approved",
	// 	submittedAt: "2025-05-10T14:30:00Z",
	// 	response: sampleResponses[1],
	// },
	// {
	// 	id: 3,
	// 	name: "Business Development Forum",
	// 	date: "2025-07-20",
	// 	submissionType: "BD Template",
	// 	submitterName: "Carol Lee",
	// 	status: "pending",
	// 	submittedAt: "2025-06-01T09:15:00Z",
	// 	response: sampleResponses[2],
	// },
	// {
	// 	id: 4,
	// 	name: "Web3 Community Meetup",
	// 	date: "2025-08-05",
	// 	submissionType: "Meetups Template",
	// 	submitterName: "David Kim",
	// 	status: "rejected",
	// 	submittedAt: "2025-07-10T11:45:00Z",
	// 	response: sampleResponses[3],
	// },
	// {
	// 	id: 5,
	// 	name: "Extraordinary Hackathon",
	// 	date: "2025-09-12",
	// 	submissionType: "Extraordinary Event Template",
	// 	submitterName: "Eva Turner",
	// 	status: "approved",
	// 	submittedAt: "2025-08-15T16:00:00Z",
	// 	response: sampleResponses[4],
	// },
	// {
	// 	id: 6,
	// 	name: "Key Event: DeFi Security",
	// 	date: "2025-10-18",
	// 	submissionType: "Key Event Template",
	// 	submitterName: "Frank Osei",
	// 	status: "reviewing",
	// 	submittedAt: "2025-09-20T13:20:00Z",
	// 	response: sampleResponses[5],
	// },
	// {
	// 	id: 7,
	// 	name: "BD Networking Night",
	// 	date: "2025-11-22",
	// 	submissionType: "BD Template",
	// 	submitterName: "Grace Park",
	// 	status: "pending",
	// 	submittedAt: "2025-10-25T18:10:00Z",
	// 	response: sampleResponses[6],
	// },
	// {
	// 	id: 8,
	// 	name: "Polkadot Meetups Global",
	// 	date: "2025-12-03",
	// 	submissionType: "Meetups Template",
	// 	submitterName: "Henry Zhao",
	// 	status: "approved",
	// 	submittedAt: "2025-11-05T08:30:00Z",
	// 	response: sampleResponses[7],
	// },
];

// type messages = {
// 	reference: {
// 		type: "Statusupdate" | "message" | "event" | "file"
// 		reference:{ status: "approve" },
// 	}
// 		digest: string;
// 	};
