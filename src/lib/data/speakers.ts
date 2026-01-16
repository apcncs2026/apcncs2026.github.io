export interface Speaker {
	id: string;
	name: string;
	affiliation: string;
	specialNote?: string; // For notes like "MDPI Entropy Invited Speaker"
	bio?: string;
	avatar?: boolean;
	tier: 1 | 2 | 3; // Speaker tier for display grouping
}

export const invitedSpeakers: Speaker[] = [
	// Tier 1
	{
		id: "jose-fernando-mendes",
		name: "José Fernando Mendes",
		affiliation: "University of Aveiro, Portugal",
		specialNote: "MDPI Entropy Invited Speaker",
		avatar: true,
		tier: 1
	},
	{
		id: "marton-karsai",
		name: "Márton Karsai",
		affiliation: "Central European University, Austria",
		specialNote: "World Scientific Invited Speaker",
		avatar: true,
		tier: 1
	},
	// Tier 2 (alphabetical by family name)
	{
		id: "ginestra-bianconi",
		name: "Ginestra Bianconi",
		affiliation: "Queen Mary University of London, UK",
		avatar: true,
		tier: 2
	},
	{
		id: "carlos-gershenson",
		name: "Carlos Gershenson",
		affiliation: "Binghamton University, USA",
		avatar: true,
		tier: 2
	},
	{
		id: "hawoong-jeong",
		name: "Hawoong Jeong",
		affiliation: "Korea Advanced Institute of Science and Technology (KAIST), South Korea",
		avatar: true,
		tier: 2
	},
	{
		id: "misako-takayasu",
		name: "Misako Takayasu",
		affiliation: "Tokyo Institute of Technology, Japan",
		avatar: true,
		tier: 2
	},
	// Tier 3 (alphabetical by family name)
	{
		id: "fatimah-abdul-razak",
		name: "Fatimah Abdul Razak",
		affiliation: "Universiti Kebangsaan Malaysia (The National University of Malaysia), Malaysia",
		avatar: true,
		tier: 3
	},
	{
		id: "hsuan-yi-chen",
		name: "Hsuan-Yi Chen",
		affiliation: "National Central University, Taiwan",
		avatar: true,
		tier: 3
	},
	{
		id: "lock-yue-chew",
		name: "Lock Yue Chew",
		affiliation: "Nanyang Technological University, Singapore",
		avatar: true,
		tier: 3
	},
	{
		id: "sarah-russell",
		name: "Sarah Russell",
		affiliation: "Peter MacCallum Cancer Centre & Swinburne University of Technology, Australia",
		avatar: true,
		tier: 3
	},
	{
		id: "parongama-sen",
		name: "Parongama Sen",
		affiliation: "University of Calcutta, India",
		avatar: true,
		tier: 3
	}
];