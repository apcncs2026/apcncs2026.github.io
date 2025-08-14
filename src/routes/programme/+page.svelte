<script lang="ts">
	interface Session {
		time: string;
		title: string;
		type: 'keynote' | 'oral' | 'workshop' | 'break' | 'social';
		speaker?: string;
		location?: string;
		duration?: string;
	}

	interface DaySchedule {
		date: string;
		day: string;
		sessions: Session[];
	}

	const schedule: DaySchedule[] = [
		{
			date: "June 15, 2025",
			day: "Day 1 - Opening & Keynotes",
			sessions: [
				{ time: "08:00 - 09:00", title: "Registration & Welcome Coffee", type: "break" },
				{ time: "09:00 - 09:30", title: "Opening Ceremony", type: "social", location: "Main Auditorium" },
				{ time: "09:30 - 10:30", title: "Keynote: The Future of AI in Scientific Research", type: "keynote", speaker: "Prof. Alexandra Chen", location: "Main Auditorium" },
				{ time: "10:30 - 11:00", title: "Coffee Break", type: "break" },
				{ time: "11:00 - 12:30", title: "Parallel Sessions A", type: "oral", location: "Various Rooms" },
				{ time: "12:30 - 14:00", title: "Lunch Break", type: "break" },
				{ time: "14:00 - 15:30", title: "Workshop: Introduction to Machine Learning", type: "workshop", location: "Workshop Room 1" },
				{ time: "15:30 - 16:00", title: "Coffee Break", type: "break" },
				{ time: "16:00 - 17:30", title: "Poster Session I", type: "oral", location: "Exhibition Hall" },
				{ time: "18:00 - 20:00", title: "Welcome Reception", type: "social", location: "University Garden" }
			]
		},
		{
			date: "June 16, 2025",
			day: "Day 2 - Technical Sessions",
			sessions: [
				{ time: "09:00 - 10:00", title: "Keynote: Quantum Computing Applications", type: "keynote", speaker: "Dr. Marcus Johnson", location: "Main Auditorium" },
				{ time: "10:00 - 10:30", title: "Coffee Break", type: "break" },
				{ time: "10:30 - 12:00", title: "Parallel Sessions B", type: "oral", location: "Various Rooms" },
				{ time: "12:00 - 13:30", title: "Lunch Break", type: "break" },
				{ time: "13:30 - 15:00", title: "Panel Discussion: Ethics in AI", type: "oral", location: "Main Auditorium" },
				{ time: "15:00 - 15:30", title: "Coffee Break", type: "break" },
				{ time: "15:30 - 17:00", title: "Parallel Sessions C", type: "oral", location: "Various Rooms" },
				{ time: "17:00 - 18:30", title: "Industry Showcase", type: "oral", location: "Exhibition Hall" }
			]
		},
		{
			date: "June 17, 2025",
			day: "Day 3 - Workshops & Innovation",
			sessions: [
				{ time: "09:00 - 10:00", title: "Keynote: Biomedical Engineering Breakthroughs", type: "keynote", speaker: "Prof. Sarah Williams", location: "Main Auditorium" },
				{ time: "10:00 - 10:30", title: "Coffee Break", type: "break" },
				{ time: "10:30 - 12:00", title: "Concurrent Workshops", type: "workshop", location: "Workshop Rooms 1-4" },
				{ time: "12:00 - 13:30", title: "Lunch Break", type: "break" },
				{ time: "13:30 - 15:00", title: "Innovation Competition Finals", type: "oral", location: "Main Auditorium" },
				{ time: "15:00 - 15:30", title: "Coffee Break", type: "break" },
				{ time: "15:30 - 17:00", title: "Poster Session II", type: "oral", location: "Exhibition Hall" },
				{ time: "19:00 - 22:00", title: "Conference Gala Dinner", type: "social", location: "Grand Hotel Ballroom" }
			]
		},
		{
			date: "June 18, 2025",
			day: "Day 4 - Closing & Future Directions",
			sessions: [
				{ time: "09:00 - 10:30", title: "Parallel Sessions D", type: "oral", location: "Various Rooms" },
				{ time: "10:30 - 11:00", title: "Coffee Break", type: "break" },
				{ time: "11:00 - 12:00", title: "Best Paper Awards", type: "social", location: "Main Auditorium" },
				{ time: "12:00 - 13:00", title: "Closing Keynote: Future Research Directions", type: "keynote", speaker: "Prof. Elena Rodriguez", location: "Main Auditorium" },
				{ time: "13:00 - 13:30", title: "Closing Ceremony", type: "social", location: "Main Auditorium" },
				{ time: "13:30 - 15:00", title: "Farewell Lunch", type: "break" }
			]
		}
	];

	let selectedDay = 0;

	function getTypeColor(type: Session['type']) {
		switch(type) {
			case 'keynote': return 'badge-primary';
			case 'oral': return 'badge-secondary';
			case 'workshop': return 'badge-accent';
			case 'break': return 'badge-neutral';
			case 'social': return 'badge-info';
			default: return 'badge-ghost';
		}
	}
</script>

<svelte:head>
	<title>Programme - Academic Conference 2025</title>
	<meta name="description" content="Conference programme and schedule for Academic Conference 2025">
</svelte:head>

<div class="min-h-screen">
	<section class="hero bg-gradient-to-r from-secondary to-primary text-white py-20">
		<div class="hero-content text-center">
			<div class="max-w-4xl">
				<h1 class="text-5xl font-bold mb-4">Conference Programme</h1>
				<p class="text-xl">Four days of cutting-edge research and networking</p>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-6xl mx-auto">
			<div class="tabs tabs-boxed bg-base-200 mb-8">
				{#each schedule as day, index}
					<button 
						class="tab {selectedDay === index ? 'tab-active' : ''}"
						on:click={() => selectedDay = index}
					>
						{day.date.split(',')[0]}
					</button>
				{/each}
			</div>

			<div class="card bg-base-200 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-2xl mb-6">{schedule[selectedDay].day}</h2>
					<div class="overflow-x-auto">
						<table class="table w-full">
							<thead>
								<tr>
									<th>Time</th>
									<th>Session</th>
									<th>Type</th>
									<th>Speaker/Location</th>
								</tr>
							</thead>
							<tbody>
								{#each schedule[selectedDay].sessions as session}
									<tr class="{session.type === 'break' ? 'bg-base-300' : ''}">
										<td class="font-semibold whitespace-nowrap">{session.time}</td>
										<td class="font-medium">{session.title}</td>
										<td>
											<span class="badge {getTypeColor(session.type)}">
												{session.type}
											</span>
										</td>
										<td class="text-sm">
											{#if session.speaker}
												<div>{session.speaker}</div>
											{/if}
											{#if session.location}
												<div class="text-gray-600">{session.location}</div>
											{/if}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-base-200">
		<div class="max-w-6xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-12">Session Types</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-primary">Keynote Sessions</h3>
						<p>Inspiring talks by world-renowned experts covering breakthrough research and future directions in their fields.</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-secondary">Oral Presentations</h3>
						<p>15-minute presentations of accepted papers followed by Q&A sessions. Grouped by research themes.</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-accent">Workshops</h3>
						<p>Hands-on sessions providing practical skills and in-depth knowledge on specific topics and methodologies.</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-info">Poster Sessions</h3>
						<p>Interactive presentations where researchers showcase their work and engage in one-on-one discussions.</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-warning">Panel Discussions</h3>
						<p>Expert panels discussing current challenges and future opportunities in various research domains.</p>
					</div>
				</div>
				<div class="card bg-white shadow">
					<div class="card-body">
						<h3 class="card-title text-success">Networking Events</h3>
						<p>Social gatherings designed to foster collaborations and build professional relationships.</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4">
		<div class="max-w-4xl mx-auto">
			<h2 class="text-3xl font-bold text-center mb-8">Important Information</h2>
			<div class="space-y-4">
				<div class="alert alert-info">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span>All sessions will be held at the University Conference Center unless otherwise noted.</span>
				</div>
				<div class="alert">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span>Please arrive 10 minutes early for keynote sessions as seating is first-come, first-served.</span>
				</div>
				<div class="alert alert-warning">
					<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
					</svg>
					<span>Programme is subject to change. Check the conference app for real-time updates.</span>
				</div>
			</div>
		</div>
	</section>

	<section class="py-16 px-4 bg-primary text-white">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-bold mb-6">Download Full Programme</h2>
			<p class="text-xl mb-8">Get the complete conference programme with detailed session information</p>
			<div class="flex gap-4 justify-center flex-wrap">
				<button class="btn btn-accent">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
					</svg>
					PDF Programme
				</button>
				<button class="btn btn-ghost btn-outline text-white">
					<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
					</svg>
					Mobile App
				</button>
			</div>
		</div>
	</section>
</div>