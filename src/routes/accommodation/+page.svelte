<script lang="ts">
	interface Hotel {
		name: string;
		category: 'partner' | 'nearby';
		distance: string;
		rate: string;
		amenities: string[];
		bookingCode?: string;
	}

	interface Attraction {
		name: string;
		description: string;
		distance: string;
		type: 'cultural' | 'nature' | 'dining' | 'shopping';
	}

	const hotels: Hotel[] = [
		{
			name: "Grand Conference Hotel",
			category: "partner",
			distance: "On campus",
			rate: "$120/night",
			amenities: ["Free WiFi", "Breakfast included", "Gym", "Business center", "Shuttle service"],
			bookingCode: "ACADCONF2025"
		},
		{
			name: "University Inn",
			category: "partner",
			distance: "5 min walk",
			rate: "$95/night",
			amenities: ["Free WiFi", "Continental breakfast", "24/7 front desk", "Parking"],
			bookingCode: "CONF25"
		},
		{
			name: "City Center Suites",
			category: "nearby",
			distance: "10 min by car",
			rate: "$150/night",
			amenities: ["Free WiFi", "Pool", "Restaurant", "Spa", "Concierge"]
		},
		{
			name: "Budget Lodge",
			category: "nearby",
			distance: "15 min by bus",
			rate: "$65/night",
			amenities: ["Free WiFi", "Parking", "24/7 front desk"]
		}
	];

	const attractions: Attraction[] = [
		{
			name: "Historic Old Town",
			description: "Explore centuries-old architecture, museums, and local artisan shops",
			distance: "20 min by public transport",
			type: "cultural"
		},
		{
			name: "City Botanical Gardens",
			description: "Beautiful gardens featuring native and exotic plants, perfect for a relaxing walk",
			distance: "15 min walk",
			type: "nature"
		},
		{
			name: "Science Museum",
			description: "Interactive exhibits on technology, space exploration, and natural history",
			distance: "10 min by car",
			type: "cultural"
		},
		{
			name: "Riverside Restaurant District",
			description: "Diverse dining options from local cuisine to international favorites",
			distance: "25 min by public transport",
			type: "dining"
		},
		{
			name: "Central Shopping Mall",
			description: "Modern shopping center with international brands and local boutiques",
			distance: "30 min by car",
			type: "shopping"
		},
		{
			name: "University Art Gallery",
			description: "Contemporary art exhibitions featuring local and international artists",
			distance: "On campus",
			type: "cultural"
		}
	];

	const partnerHotels = hotels.filter(h => h.category === 'partner');
	const nearbyHotels = hotels.filter(h => h.category === 'nearby');

	function getTypeIcon(type: Attraction['type']) {
		switch(type) {
			case 'cultural': return 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z';
			case 'nature': return 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z';
			case 'dining': return 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z';
			case 'shopping': return 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z';
			default: return '';
		}
	}
</script>

<svelte:head>
	<title>Accommodation & Attractions - Academic Conference 2025</title>
	<meta name="description" content="Hotel accommodations and local attractions for Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-accent to-secondary text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Accommodation & Local Attractions</h1>
				<p class="text-xl">Make the most of your conference experience</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Partner Hotels</h2>
			<div class="alert alert-success mb-8">
				<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span>Special conference rates available! Use the booking codes when making reservations.</span>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each partnerHotels as hotel}
					<div class="card bg-base-200 shadow-xl">
						<div class="card-body">
							<h3 class="card-title text-primary">{hotel.name}</h3>
							<div class="badge badge-primary">{hotel.distance}</div>
							<p class="text-2xl font-bold text-accent">{hotel.rate}</p>
							{#if hotel.bookingCode}
								<p class="text-sm">Booking Code: <span class="font-mono font-bold">{hotel.bookingCode}</span></p>
							{/if}
							<div class="divider"></div>
							<p class="font-semibold mb-2">Amenities:</p>
							<ul class="space-y-1">
								{#each hotel.amenities as amenity}
									<li class="flex items-center gap-2">
										<svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
										</svg>
										<span class="text-sm">{amenity}</span>
									</li>
								{/each}
							</ul>
							<div class="card-actions justify-end mt-4">
								<button class="btn btn-primary">Book Now</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Other Nearby Hotels</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				{#each nearbyHotels as hotel}
					<div class="card bg-white shadow">
						<div class="card-body">
							<h3 class="card-title">{hotel.name}</h3>
							<div class="flex gap-4 items-center">
								<span class="badge badge-ghost">{hotel.distance}</span>
								<span class="text-xl font-bold">{hotel.rate}</span>
							</div>
							<p class="text-sm mt-2">Amenities: {hotel.amenities.join(', ')}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold mb-12">Local Attractions</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each attractions as attraction}
					<div class="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
						<div class="card-body">
							<div class="flex items-start gap-3">
								<div class="p-2 bg-primary/10 rounded-lg">
									<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={getTypeIcon(attraction.type)}></path>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="font-bold text-lg">{attraction.name}</h3>
									<p class="text-sm text-gray-600 mb-2">{attraction.distance}</p>
									<p class="text-sm">{attraction.description}</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Transportation</h2>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-secondary">Airport Shuttle</h3>
						<p>Conference shuttle service runs every hour between the airport and partner hotels (6 AM - 10 PM).</p>
						<p class="font-bold mt-2">Free for registered attendees</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-secondary">Public Transport</h3>
						<p>Excellent bus and metro connections. Day passes available at $8. Conference venue is at University Station.</p>
						<p class="font-bold mt-2">Metro Line 2 & Bus Routes 15, 23, 47</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-secondary">Taxi & Ride-sharing</h3>
						<p>Taxis and ride-sharing services readily available. Airport to venue approximately $35-45.</p>
						<p class="font-bold mt-2">Uber & Lyft pickup zones marked</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold mb-8">Practical Information</h2>
			<div class="space-y-4">
				<div class="collapse collapse-arrow bg-base-200">
					<input type="radio" name="info-accordion" />
					<div class="collapse-title text-xl font-medium">
						Weather & What to Bring
					</div>
					<div class="collapse-content">
						<p>June weather is typically warm and pleasant (20-25°C / 68-77°F). Bring comfortable walking shoes, light jacket for air-conditioned venues, and umbrella for occasional rain.</p>
					</div>
				</div>
				<div class="collapse collapse-arrow bg-base-200">
					<input type="radio" name="info-accordion" />
					<div class="collapse-title text-xl font-medium">
						Currency & Banking
					</div>
					<div class="collapse-content">
						<p>Local currency is USD. ATMs widely available. Credit cards accepted at most establishments. Currency exchange available at airport and major banks.</p>
					</div>
				</div>
				<div class="collapse collapse-arrow bg-base-200">
					<input type="radio" name="info-accordion" />
					<div class="collapse-title text-xl font-medium">
						Emergency Contacts
					</div>
					<div class="collapse-content">
						<p>Emergency: 911 | Conference Helpline: +1 (555) 123-4567 | University Security: +1 (555) 234-5678</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>