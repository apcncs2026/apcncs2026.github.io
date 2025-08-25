export interface Person {
	name: string;
	affiliation: string;
	avatar?: string;
	isPresident?: boolean;
}

export interface CommitteeChair extends Person {
	role?: string;
}

export interface CommitteeData {
	advisoryCommittee: CommitteeChair[];
	conferenceChairs: CommitteeChair[];
	programmeChairs: CommitteeChair[];
	socialMediaChairs: CommitteeChair[];
	focusSectionChairs: CommitteeChair[];
	summerSchoolChairs: CommitteeChair[];
	sponsorshipChairs: CommitteeChair[];
	steeringCommittee: Person[];
	programmeCommittee: Person[];
}

export const organizers: CommitteeData = {
	advisoryCommittee: [
		{
			name: "Peter A M Sloot",
			affiliation: "Professor Emeritus, University of Amsterdam, former Co-Director of NTU Complexity Institute, former Director of University of Amsterdam Institute of Advanced Studies"
		},
		{
			name: "Stefan Thurner",
			affiliation: "Professor, Medical University of Vienna, President of Complexity Science Hub @ Vienna"
		},
	],
	
	conferenceChairs: [
		{
			name: "Siew Ann Cheong",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			name: "Anirban Chakraborti",
			affiliation: "Jawaharlal Nehru University, India"
		}
	],
	
	programmeChairs: [
		{
			name: "Peter Yen",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			name: "Soumyajyoti Biswas",
			affiliation: "SRM University, India"
		}
	],
	
	focusSectionChairs: [
		{
			name: "Ling Feng",
			affiliation: "A*Star Institute of High Performance Computing, Singapore"
		},
		{
			name: "George Christopoulos",
			affiliation: "Nanyang Technological University, Singapore"
		}
	],
	
	summerSchoolChairs: [
		{
			name: "Ee Hou Yong",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			name: "Bo Yang",
			affiliation: "Nanyang Technological University, Singapore"
		}
	],
	
	sponsorshipChairs: [
		{
			name: "Kang Hao Cheong",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			name: "Hirdesh Kumar Pharasi",
			affiliation: "BML Munjal University, India"
		}
	],
	
	socialMediaChairs: [
		{
			name: "Vahid Aryadoust",
			affiliation: "National Institute of Education, Singapore"
		}
	],
	
	steeringCommittee: [],
	
	programmeCommittee: []
};