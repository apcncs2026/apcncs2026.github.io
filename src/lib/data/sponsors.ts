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
			id: "mdpi",
			name: "MDPI",
			logo: "/images/sponsor/mdpi.webp",
			url: "https://www.mdpi.com"
		},
		{
			id: "world-scientific",
			name: "World Scientific",
			logo: "/images/sponsor/world-scientific.webp",
			url: "https://www.worldscientific.com"
		}
	],
	regularSponsors: [],
	technicalSponsors: []
};