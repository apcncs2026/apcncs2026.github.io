export interface Hotel {
	id: string;
	name: string;
	subtitle?: string;
	distance: string;
	description: string;
	url?: string;
}

export const otherHotels: Hotel[] = [
	{
		id: "four-points-jurong",
		name: "Four Points by Sheraton Jurong",
		subtitle: "formerly Genting Hotel Jurong",
		distance: "~6.5 km (15 mins by taxi / 30 mins by public transport)",
		description:
			"Conveniently located near the Jurong East MRT interchange and major shopping malls (JEM, Westgate, and IMM), offering a wide variety of dining and retail options."
	},
	{
		id: "park-avenue-rochester",
		name: "Park Avenue Rochester",
		distance: "~12.5 km (20 mins by taxi / 45 mins by MRT)",
		description:
			"Surrounded by the beautiful Rochester Park and the Star Vista mall. This area is known for its excellent selection of restaurants and cafes set in colonial bungalows."
	},
	{
		id: "citadines-connect-rochester",
		name: "Citadines Connect Rochester Singapore",
		distance: "~12.5 km (20 mins by taxi / 45 mins by MRT)",
		description:
			"Offers \"Recharge\" rooms for early arrivals or late departures. It is highly integrated with the surrounding dining scene in the Buona Vista tech-corridor."
	},
	{
		id: "quay-hotel-west-coast",
		name: "The Quay Hotel West Coast",
		distance: "~11 km (15 mins by taxi / 40 mins by bus)",
		description:
			"Located near West Coast Park and the National University of Singapore (NUS). It is a quieter option for those looking for a more residential feel while remaining relatively close to NTU."
	}
];
