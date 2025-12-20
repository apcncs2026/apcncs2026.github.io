export interface Speaker {
	id: string;
	name: string;
	affiliation: string;
	specialNote?: string; // For notes like "MDPI Entropy Invited Speaker"
	bio?: string;
	avatar?: boolean;
}

export const invitedSpeakers: Speaker[] = [
	{
		id: "lock-yue-chew",
		name: "Lock Yue Chew",
		affiliation: "Nanyang Technological University, Singapore",
		avatar: true
	},
	{
		id: "jose-fernando-mendes",
		name: "José Fernando Mendes",
		affiliation: "University of Aveiro, Portugal",
		specialNote: "MDPI Entropy Invited Speaker",
		avatar: true
	},
	{
		id: "hawoong-jeong",
		name: "Hawoong Jeong",
		affiliation: "Korea Advanced Institute of Science and Technology (KAIST), South Korea",
		avatar: true
	},
	{
		id: "misako-takayasu",
		name: "Misako Takayasu",
		affiliation: "Tokyo Institute of Technology, Japan",
		avatar: true
	},
	{
		id: "hsuan-yi-chen",
		name: "Hsuan-Yi Chen",
		affiliation: "National Central University, Taiwan",
		avatar: true
	},
	{
		id: "fatimah-abdul-razak",
		name: "Fatimah Abdul Razak",
		affiliation: "Universiti Kebangsaan Malaysia (The National University of Malaysia), Malaysia",
		avatar: true
	},
	{
		id: "carlos-gershenson",
		name: "Carlos Gershenson",
		affiliation: "Binghamton University, USA",
		avatar: true
	},
	{
		id: "parongama-sen",
		name: "Parongama Sen",
		affiliation: "University of Calcutta, India",
		avatar: true
	},
	{
		id: "sarah-russell",
		name: "Sarah Russell",
		affiliation: "Peter MacCallum Cancer Centre & Swinburne University of Technology, Australia",
		avatar: true
	},
	{
		id: "ginestra-bianconi",
		name: "Ginestra Bianconi",
		affiliation: "Queen Mary University of London, UK",
		avatar: true
	}
];