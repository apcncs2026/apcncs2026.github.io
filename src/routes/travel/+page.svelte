<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import Link from '$lib/components/Link.svelte';
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
</script>

<svelte:head>
	<title>Travel - APCNCS 2026</title>
	<meta name="description" content="How to travel to Singapore and Nanyang Technological University for APCNCS 2026" />
</svelte:head>

<div class="min-h-screen">
	<section class="hero hero-bg hero-page" style={getHeroBackgroundStyle('travel')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold hero-text mb-4">Travel</h1>
				<p class="text-xl hero-text-secondary">How to travel to Singapore and Nanyang Technological University</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<div class="prose prose-lg max-w-none">
				<h2 class="text-3xl font-bold mb-6">Air travel to Singapore</h2>
				<p>
					Singapore is an air travel hub, and is served by direct flights from many parts of the world. If there are no direct flights from where you are, you can consider a connecting flight through another major air travel hub.
				</p>
				<ul>
					<li>
						<strong>From countries outside Asia:</strong> Due to the US&ndash;Iran conflict, airlines from Europe or the Eastern Americas may be disrupted. Please consult your travel agent for the best way to travel to Singapore by air.
					</li>
					<li>
						<strong>From within the Asia&ndash;Pacific region:</strong> Travelling from Asia&ndash;Pacific countries to Singapore is less affected by the US&ndash;Iran conflict. In addition, there are many budget airlines such as Tigerair Taiwan, Jetstar Asia, Scoot, Lion Air, Cebu Pacific, IndiGo, and AirAsia that you can choose from.
					</li>
				</ul>

				<h2 class="text-3xl font-bold mt-12 mb-6">Where is Nanyang Technological University (NTU)?</h2>

				<figure class="my-6">
					<img
						src="/images/travel/singapore-ntu-map.webp"
						alt="Map of Singapore showing NTU in the west and Changi Airport in the east"
						class="rounded-lg shadow-md w-full"
					/>
				</figure>

				<p>
					As shown on the map of Singapore on OneMap, Nanyang Technological University (NTU) is located in the western part of Singapore (pink shaded circle). Travelling from Changi Airport (orange shaded box in the easternmost part of Singapore) to NTU will take more than one hour. The following modes of transportation are recommended:
				</p>

				<h3 class="text-2xl font-bold mt-10 mb-4">1. By MRT train</h3>

				<figure class="my-6">
					<img
						src="/images/travel/mrt-route-changi-pioneer.webp"
						alt="Singapore MRT map highlighting Changi Airport (CG2), Tanah Merah (EW4), and Pioneer (EW28) stations on the East-West Line"
						class="rounded-lg shadow-md w-full"
					/>
				</figure>

				<ol>
					<li>Go to Terminal 2 to take the MRT train from the Changi Airport station (CG2) to Tanah Merah station (EW4).</li>
					<li>At the Tanah Merah station (EW4), transfer to the East-West (green) line and choose the direction that heads toward Tuas Link.</li>
					<li>Exit at the Pioneer station (EW28).</li>
					<li>
						After passing the fare gate, turn left and go down the stairs. After heading straight for 1 minute, you will see a bus stop. Take Bus Service 179 and exit at the Hall 2 stop.
					</li>
				</ol>

				<figure class="my-6">
					<img
						src="/images/travel/pioneer-station-bus-stop.webp"
						alt="Aerial map showing the route from Pioneer (EW28) station exit to the nearby bus stop for Bus 179"
						class="rounded-lg shadow-md w-full"
					/>
				</figure>

				<ol start="5">
					<li>
						If you are staying in the Nanyang Executive Centre (NEC), please follow the path (red color) shown below. This will be a 10-minute walk.
					</li>
				</ol>

				<figure class="my-6">
					<img
						src="/images/travel/hall2-nec-walking-path.webp"
						alt="NTU campus map showing the 10-minute red walking path from the Hall 2 bus stop to the Nanyang Executive Centre"
						class="rounded-lg shadow-md w-full"
					/>
				</figure>

				<ol start="6">
					<li>
						If you are staying in a student dormitory, please transfer to the free Red Line NTU shuttle bus at the Hall 2 bus stop. This loop service will pass every student dormitory in NTU.
					</li>
				</ol>

				<p>
					Link to NTU shuttle bus map:
					<Link
						href="https://www.ntu.edu.sg/images/default-source/life-at-ntu/transport/shuttle-bus/ntu-internal-shuttle-bus-network_11-dec-2025.jpg?sfvrsn=fa6ec50b_0"
						text="NTU Internal Shuttle Bus Network"
					/>
				</p>

				<h3 class="text-2xl font-bold mt-10 mb-4">2. By Taxi</h3>
				<p>
					After you pick up your luggage and pass through Customs, look for signs that will direct you to the taxi stands. You may also check with the nearby information counter for the location of these taxi stands.
				</p>

				<h3 class="text-2xl font-bold mt-10 mb-4">3. By Grab</h3>
				<p>
					Grab is the largest ride-sharing platform in Singapore. If you book a ride on their phone app, they will arrange to pick you up at designated pick-up points in the terminals. Please be aware that the taxi stands and the ride-hailing pick-up points are separate locations.
				</p>

				<h2 class="text-3xl font-bold mt-12 mb-6">How to pay the transportation fare</h2>
				<ol>
					<li>
						<strong>By credit card / debit card.</strong> You can flash your credit card or debit card at the fare gate when taking the MRT. You can also flash it at the charging machine while riding a bus in the city.
					</li>
					<li>
						<strong>EZ-Link card.</strong> Alternatively, at any MRT station, you can buy an EZ-Link card at the ticket office and top up some money in it. You can then use the EZ-Link card to take the MRT or ride a bus to travel in Singapore.
					</li>
				</ol>

				<h2 class="text-3xl font-bold mt-12 mb-6">Map of NTU and campus bus service</h2>
				<ul>
					<li>Interactive map: <Link href="https://maps.ntu.edu.sg" text="maps.ntu.edu.sg" /></li>
					<li>Campus bus: <Link href="https://www.ntu.edu.sg/about-us/visiting-ntu/internal-campus-shuttle" text="NTU Internal Campus Shuttle" /></li>
				</ul>
				<p>
					Visitors can use the maps to explore the location of the main conference site (SPMS), the conference dinner site (Nanyang Lake Pavilion), and accommodation sites (NEC and dormitories).
				</p>

				<h2 class="text-3xl font-bold mt-12 mb-6">Getting between SPMS and Pioneer Hall</h2>
				<p>
					Students and postdocs hosted at <strong>Pioneer Hall</strong> can travel to and from the main conference venue at SPMS on the free NTU shuttle buses. The map below shows the relevant shuttle stops.
				</p>

				<figure class="my-6">
					<img
						src="/images/travel/pioneer-spms-shuttle-map.webp"
						alt="Aerial NTU campus map showing the shuttle stops between Pioneer Hall and SPMS: the Hall 6, Hall 1 and Hall 7 stops and the SPMS stop"
						class="rounded-lg shadow-md w-full"
					/>
				</figure>

				<p>
					<strong>From Pioneer Hall to SPMS:</strong> Board the <strong>NTU Blue Line</strong> shuttle bus from <strong>Hall 6 Stop</strong>, and drop off at the <strong>SPMS Stop</strong>. The NTU Red Line shuttle bus does not stop in front of SPMS, and also goes around a longer distance.
				</p>

				<p>
					<strong>From SPMS to Pioneer Hall:</strong> Board the <strong>NTU Red Line</strong> shuttle bus from <strong>Hall 7 Stop</strong>, and drop off at the <strong>Hall 1 Stop</strong>. You can also board the NTU Blue Line shuttle bus from SPMS Stop, and drop off at the Hall 6 Stop, if you do not mind it going around a longer distance.
				</p>

				<h2 class="text-3xl font-bold mt-12 mb-6">Food near Pioneer Hall</h2>

				<figure class="my-6">
					<img
						src="/images/travel/pioneer-hall-canteens-map.webp"
						alt="Aerial NTU campus map showing food options near Pioneer Hall: the Pioneer Hall Canteen, Food Court 1 (Hall 1), Food Court 2 (Hall 2) and a Prime Supermarket"
						class="rounded-lg shadow-md w-full"
					/>
				</figure>

				<p>
					The <strong>Pioneer Hall Canteen</strong> is a convenient place to take breakfast (3&ndash;4 SGD) before proceeding to the conference venue at SPMS, or for dinner (5&ndash;6 SGD) after coming back from the conference. There are two canteens within walking distance of Pioneer Hall: (1) <strong>Food Court 1 (Hall 1)</strong>, and (2) <strong>Food Court 2 (Hall 2)</strong>. There is also a <strong>Prime Supermarket</strong> next to Food Court 2. If you do not mind venturing further, you can board the NTU Red Line shuttle bus from the Hall 1 Stop, and drop off at the Hall 11 Stop, and cross the road to reach the North Hill Food Court. There are also an Indian restaurant and a hot pot restaurant in this dormitory complex. If you stay on the bus and drop off at the Nanyang Crescent Halls Stop, you will reach the Nanyang Crescent Food Court.
				</p>

				<div class="alert alert-info mt-10">
					<Icon name="info" class_="stroke-current shrink-0 h-6 w-6" />
					<span>Travel information has been reviewed by the organizing committee. Please refer back to this page closer to the conference for any updates.</span>
				</div>
			</div>
		</div>
	</section>
</div>
