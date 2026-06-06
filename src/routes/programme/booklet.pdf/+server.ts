import { buildProgrammeBookletDoc } from '$lib/utils/programmeBookletPdf';

// Prerendered at build time: adapter-static writes the bytes to
// build/programme/booklet.pdf, served as a static file. Regenerated on every
// deploy, so it stays in sync with the programme data.
export const prerender = true;

export async function GET() {
	const doc = await buildProgrammeBookletDoc();
	const bytes = doc.output('arraybuffer');
	return new Response(bytes, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="APCNCS-2026-Programme-Booklet.pdf"'
		}
	});
}
