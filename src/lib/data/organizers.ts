export interface Person {
	name: string;
	title?: string;
	affiliation: string;
	avatar?: string;
	isPresident?: boolean;
}

export interface CommitteeChair extends Person {
	role: string;
}

export interface CommitteeData {
	conferenceChairs: CommitteeChair[];
	programmeChairs: CommitteeChair[];
	socialMediaChairs: CommitteeChair[];
	steeringCommittee: Person[];
	programmeCommittee: Person[];
}

export const organizers: CommitteeData = {
	conferenceChairs: [
		{
			name: "CHEONG Siew Ann",
			title: "Prof.",
			affiliation: "Nanyang Technological University",
			role: "Committee Chair"
		},
		{
			name: "CHEW Lock Yue",
			title: "Prof.",
			affiliation: "Nanyang Technological University",
			role: "Committee Member"
		},
		{
			name: "YONG Ee Hou",
			title: "Prof.",
			affiliation: "Nanyang Technological University",
			role: "Committee Member"
		},
		{
			name: "CHEONG Kang Hao",
			title: "Prof.",
			affiliation: "Nanyang Technological University",
			role: "Committee Member"
		}
	],
	
	programmeChairs: [],
	
	socialMediaChairs: [],
	
	steeringCommittee: [],
	
	programmeCommittee: []
};