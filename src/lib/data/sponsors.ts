export interface Sponsor {
	id: string;
	name: string;
	logo: string;
	url?: string;
}

export interface SponsorData {
	institutionalSponsors: Sponsor[];
	keySponsors: Sponsor[];
	regularSponsors: Sponsor[];
	technicalSponsors: Sponsor[];
}

export const sponsors: SponsorData = {
	institutionalSponsors: [
		{
			id: "spms",
			name: "School of Physical and Mathematical Sciences, NTU",
			logo: "/images/sponsor/spms.webp",
			url: "https://www.ntu.edu.sg/spms"
		}
	],
	keySponsors: [
		{
			id: "mdpi-entropy",
			name: "MDPI Entropy",
			logo: "/images/sponsor/mdpi-entropy.webp",
			url: "https://www.mdpi.com/journal/entropy"
		},
		{
			id: "mdpi-complexities",
			name: "MDPI Complexities",
			logo: "/images/sponsor/mdpi-complexities.webp",
			url: "https://www.mdpi.com/journal/complexities"
		}
	],
	regularSponsors: [],
	technicalSponsors: []
};