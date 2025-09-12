export interface Person {
	id: string;
	name: string;
	affiliation: string;
	isPresident?: boolean;
	avatar?: boolean;
}

export interface CommitteeChair extends Person {
	role?: string;
}

export interface CommitteeData {
	advisoryCommittee: CommitteeChair[];
	conferenceChairs: CommitteeChair[];
	programmeChairs: CommitteeChair[];
	socialMediaChairs: CommitteeChair[];
	focusSessionChairs: CommitteeChair[];
	summerSchoolChairs: CommitteeChair[];
	sponsorshipChairs: CommitteeChair[];
	steeringCommittee: Person[];
	programmeCommittee: Person[];
}

export const organizers: CommitteeData = {
	advisoryCommittee: [
		{
			id: "peter-sloot",
			name: "Peter Sloot",
			affiliation: "Professor Emeritus, University of Amsterdam, former Co-Director of NTU Complexity Institute, former Director of University of Amsterdam Institute of Advanced Studies"
		},
		{
			id: "stefan-thurner",
			name: "Stefan Thurner",
			affiliation: "Professor, Medical University of Vienna, President of Complexity Science Hub @ Vienna"
		},
		{
			id: "misako-takayasu",
			name: "Misako Takayasu",
			affiliation: "Professor, Institute of Science Tokyo, Japan"
		},
		{
			id: "didier-sornette",
			name: "Didier Sornette",
			affiliation: "Professor, Southern University of Science and Technology, China"
		},
		{
			id: "carlos-gershenson",
			name: "Carlos Gershenson",
			affiliation: "Professor, Binghamton University, USA, President of Complex Systems Society"
		},
		{
			id: "guido-caldarelli",
			name: "Guido Caldarelli",
			affiliation: "Professor, Ca' Foscari University of Venice, Italy, former President of Complex Systems Society"
		}
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
			affiliation: "Nanyang Technological University, Singapore",
			avatar: true
		},
		{
			id: "soumyajyoti-biswas",
			name: "Soumyajyoti Biswas",
			affiliation: "SRM University AP, India",
			avatar: true
		},
		{
			id: "muhammad-azfar-ramli",
			name: "Muhammad Azfar Ramli",
			affiliation: "A*STAR Institute of High Performance Computing, Singapore",
			avatar: true
		},
		{
			id: "cynthia-siew",
			name: "Cynthia Siew",
			affiliation: "National University of Singapore, Singapore"
		},
		{
			id: "neil-huynh-hoai-nguyen",
			name: "Neil Huynh Hoai Nguyen",
			affiliation: "A*STAR Institute of High Performance Computing, Singapore"
		}
	],
	
	focusSessionChairs: [
		{
			id: "ling-feng",
			name: "Ling Feng",
			affiliation: "A*Star Institute of High Performance Computing, Singapore"
		},
		{
			id: "george-christopoulos",
			name: "George Christopoulos",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			id: "mile-gu",
			name: "Mile Gu",
			affiliation: "Nanyang Technological University, Singapore",
			avatar: true
		}
	],
	
	summerSchoolChairs: [
		{
			id: "ee-hou-yong",
			name: "Ee Hou Yong",
			affiliation: "Nanyang Technological University, Singapore",
			avatar: true
		},
		{
			id: "bo-yang",
			name: "Bo Yang",
			affiliation: "Nanyang Technological University, Singapore"
		},
		{
			id: "duane-loh",
			name: "Duane Loh",
			affiliation: "National University of Singapore, Singapore",
			avatar: true
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
		},
		{
			id: "kelin-xia",
			name: "Kelin Xia",
			affiliation: "Nanyang Technological University, Singapore"
		}
	],
	
	socialMediaChairs: [
		{
			id: "vahid-aryadoust",
			name: "Vahid Aryadoust",
			affiliation: "National Institute of Education, Singapore",
			avatar: true
		},
		{
			id: "sun-he",
			name: "Sun He",
			affiliation: "National Institute of Education, Singapore",
			avatar: true
		}
	],
	
	steeringCommittee: [],
	
	programmeCommittee: []
};