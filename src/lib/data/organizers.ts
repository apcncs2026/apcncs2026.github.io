export interface Person {
	id: string;
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
			id: "peter-a-m-sloot",
			name: "Peter A M Sloot",
			affiliation: "Professor Emeritus, University of Amsterdam, former Co-Director of NTU Complexity Institute, former Director of University of Amsterdam Institute of Advanced Studies"
		},
		{
			id: "stefan-thurner",
			name: "Stefan Thurner",
			affiliation: "Professor, Medical University of Vienna, President of Complexity Science Hub @ Vienna"
		},
	],
	
	conferenceChairs: [
		{
			id: "siew-ann-cheong",
			name: "Siew Ann Cheong",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			id: "anirban-chakraborti",
			name: "Anirban Chakraborti",
			affiliation: "Jawaharlal Nehru University, India"
		}
	],
	
	programmeChairs: [
		{
			id: "peter-yen",
			name: "Peter Yen",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			id: "soumyajyoti-biswas",
			name: "Soumyajyoti Biswas",
			affiliation: "SRM University, India"
		}
	],
	
	focusSectionChairs: [
		{
			id: "ling-feng",
			name: "Ling Feng",
			affiliation: "A*Star Institute of High Performance Computing, Singapore"
		},
		{
			id: "george-christopoulos",
			name: "George Christopoulos",
			affiliation: "Nanyang Technological University, Singapore"
		}
	],
	
	summerSchoolChairs: [
		{
			id: "ee-hou-yong",
			name: "Ee Hou Yong",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			id: "bo-yang",
			name: "Bo Yang",
			affiliation: "Nanyang Technological University, Singapore"
		}
	],
	
	sponsorshipChairs: [
		{
			id: "kang-hao-cheong",
			name: "Kang Hao Cheong",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			id: "hirdesh-kumar-pharasi",
			name: "Hirdesh Kumar Pharasi",
			affiliation: "BML Munjal University, India"
		}
	],
	
	socialMediaChairs: [
		{
			id: "vahid-aryadoust",
			name: "Vahid Aryadoust",
			affiliation: "National Institute of Education, Singapore"
		}
	],
	
	steeringCommittee: [],
	
	programmeCommittee: []
};