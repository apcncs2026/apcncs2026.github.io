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
	}
];