import { buildProgrammePortraitDoc } from '$lib/utils/programmePdf';

// Prerendered to build/programme/at-a-glance-portrait.pdf at build time.
export const prerender = true;

export function GET() {
	const bytes = buildProgrammePortraitDoc().output('arraybuffer');
	return new Response(bytes, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="APCNCS-2026-Programme-Portrait.pdf"'
		}
	});
}
