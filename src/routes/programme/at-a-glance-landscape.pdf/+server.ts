import { buildProgrammeDoc } from '$lib/utils/programmePdf';

// Prerendered to build/programme/at-a-glance-landscape.pdf at build time.
export const prerender = true;

export function GET() {
	const bytes = buildProgrammeDoc().output('arraybuffer');
	return new Response(bytes, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="APCNCS-2026-Programme-Landscape.pdf"'
		}
	});
}
