<script lang="ts">
	import { getHeroBackgroundStyle } from '$lib/config/heroImages';
	import { galleryPhotos, type GalleryPhoto } from '$lib/data/galleryPhotos';
	import Icon from '$lib/components/Icon.svelte';

	// Per-day labels for the filter tabs (capture dates confirmed from photo EXIF).
	const dayMeta: Record<number, { title: string; sub: string }> = {
		1: { title: '9 June', sub: 'Summer School' },
		2: { title: '10 June', sub: 'Conference' }
	};

	const days = [...new Set(galleryPhotos.map((p) => p.day))].sort((a, b) => a - b);

	let activeDay = $state<number | 'all'>('all');
	let visible = $derived(
		activeDay === 'all' ? galleryPhotos : galleryPhotos.filter((p) => p.day === activeDay)
	);

	const thumbSrc = (p: GalleryPhoto) => `/gallery/thumb/day${p.day}/${p.id}.webp`;
	const largeSrc = (p: GalleryPhoto) => `/gallery/large/day${p.day}/${p.id}.webp`;

	// Lightbox: index into `visible`, or null when closed.
	let lightboxIndex = $state<number | null>(null);
	let current = $derived(lightboxIndex === null ? null : visible[lightboxIndex] ?? null);

	function setDay(day: number | 'all') {
		activeDay = day;
		lightboxIndex = null;
	}

	function open(i: number) {
		lightboxIndex = i;
	}
	function close() {
		lightboxIndex = null;
	}
	function prev() {
		if (lightboxIndex !== null) lightboxIndex = (lightboxIndex - 1 + visible.length) % visible.length;
	}
	function next() {
		if (lightboxIndex !== null) lightboxIndex = (lightboxIndex + 1) % visible.length;
	}

	function onKey(e: KeyboardEvent) {
		if (lightboxIndex === null) return;
		if (e.key === 'Escape') close();
		else if (e.key === 'ArrowLeft') prev();
		else if (e.key === 'ArrowRight') next();
	}

	// Lock background scroll while the lightbox is open.
	$effect(() => {
		if (typeof document === 'undefined') return;
		document.body.style.overflow = lightboxIndex === null ? '' : 'hidden';
		return () => {
			document.body.style.overflow = '';
		};
	});
</script>

<svelte:head>
	<title>Photo Gallery - APCNCS 2026</title>
	<meta
		name="description"
		content="Photos from the Asia-Pacific Summer School and Conference on Networks and Complex Systems 2026 at NTU Singapore."
	/>
</svelte:head>

<svelte:window onkeydown={onKey} />

<div class="min-h-screen">
	<section class="hero hero-bg" style={getHeroBackgroundStyle('gallery')}>
		<div class="hero-content text-center hero-content-overlay">
			<div class="max-w-4xl">
				<h1 class="text-4xl md:text-5xl font-bold hero-text mb-4">Photo Gallery</h1>
				<p class="text-lg md:text-xl hero-text-secondary">
					Moments from APCNCS 2026 at Nanyang Technological University, Singapore
				</p>
			</div>
		</div>
	</section>

	<section class="py-12 px-4">
		<div class="max-w-7xl mx-auto">
			<p class="text-center text-base-content/70 mb-8">
				Photos by the SPMS Communications Team. Click any photo to view it larger.
			</p>

			<!-- Day filter -->
			<div class="flex justify-center mb-10">
				<div role="tablist" class="tabs tabs-box bg-base-200 flex-wrap justify-center gap-1">
					<button
						role="tab"
						class="tab {activeDay === 'all' ? 'tab-active' : ''}"
						onclick={() => setDay('all')}
					>
						All photos
						<span class="badge badge-sm ml-2">{galleryPhotos.length}</span>
					</button>
					{#each days as day}
						{@const count = galleryPhotos.filter((p) => p.day === day).length}
						<button
							role="tab"
							class="tab {activeDay === day ? 'tab-active' : ''}"
							onclick={() => setDay(day)}
						>
							{dayMeta[day]?.title ?? `Day ${day}`}
							<span class="hidden sm:inline opacity-70 ml-1">· {dayMeta[day]?.sub}</span>
							<span class="badge badge-sm ml-2">{count}</span>
						</button>
					{/each}
				</div>
			</div>

			<!-- Grid: reads left-to-right, then top-to-bottom. Uniform cells keep rows
			     tidy; thumbnails are center-cropped, the full frame shows in the lightbox. -->
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
				{#each visible as p, i (p.day + '-' + p.id)}
					<button
						type="button"
						class="group relative block aspect-[3/2] overflow-hidden rounded-lg bg-base-200 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
						onclick={() => open(i)}
						aria-label="View photo {i + 1} of {visible.length} larger"
					>
						<img
							src={thumbSrc(p)}
							alt="APCNCS 2026 at NTU Singapore"
							loading="lazy"
							decoding="async"
							class="w-full h-full object-cover transition duration-300 group-hover:scale-105"
						/>
					</button>
				{/each}
			</div>
		</div>
	</section>
</div>

<!-- Lightbox -->
{#if current}
	<div class="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Photo viewer">
		<button class="absolute inset-0 bg-black/90 cursor-zoom-out" aria-label="Close photo viewer" onclick={close}></button>

		<!-- Top toolbar: download + close -->
		<div class="absolute top-4 right-4 z-10 flex items-center gap-2">
			<a
				class="btn btn-circle btn-ghost text-white hover:bg-white/20"
				href={largeSrc(current)}
				download="APCNCS2026-day{current.day}-{current.id}.webp"
				aria-label="Download this photo"
				title="Download this photo"
			>
				<Icon name="download" class_="w-6 h-6" />
			</a>
			<button
				class="btn btn-circle btn-ghost text-white hover:bg-white/20"
				aria-label="Close"
				onclick={close}
			>
				<Icon name="x" class_="w-6 h-6" />
			</button>
		</div>

		<!-- Prev / Next -->
		{#if visible.length > 1}
			<button
				class="absolute left-2 sm:left-4 z-10 btn btn-circle btn-ghost text-white hover:bg-white/20"
				aria-label="Previous photo"
				onclick={prev}
			>
				<Icon name="chevron-left" class_="w-7 h-7" />
			</button>
			<button
				class="absolute right-2 sm:right-4 z-10 btn btn-circle btn-ghost text-white hover:bg-white/20"
				aria-label="Next photo"
				onclick={next}
			>
				<Icon name="chevron-right" class_="w-7 h-7" />
			</button>
		{/if}

		<!-- Image -->
		<img
			src={largeSrc(current)}
			alt="APCNCS 2026 at NTU Singapore, enlarged view"
			class="relative z-[5] max-h-[88vh] max-w-[92vw] object-contain rounded shadow-2xl pointer-events-none select-none"
		/>

		<!-- Counter -->
		<div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/90 text-sm bg-black/40 rounded-full px-3 py-1">
			{(lightboxIndex ?? 0) + 1} / {visible.length}
		</div>
	</div>
{/if}
