export type PageName = 'home' | 'international' | 'speakers' | 'organizers' | 'programme' | 'registration' | 'contact' | 'accommodation' | 'abstracts' | 'sponsors' | 'focus';

export interface HeroImageConfig {
  basePath: string;
  pages: Record<PageName, string>;
}

export const heroImages: HeroImageConfig = {
  basePath: '/images/hero/',
  pages: {
    home: 'home-ntu-arc.webp',
    international: 'international.webp',
    speakers: 'speakers-ntu-learning-hub.webp',
    organizers: 'organizers-ntu-spms.webp',
    programme: 'programme-ntu-spms-building.webp',
    registration: 'registration-ntu-campus.webp',
    contact: 'contact-ntu-campus.webp',
    accommodation: 'accommodation-singapore-skyline.webp',
    abstracts: 'call-for-abstracts-ntu-research.webp',
    sponsors: 'sponsor.webp',
    focus: 'call-for-abstracts-ntu-research.webp'
  }
};

// Helper function to get full image path
export function getHeroImage(pageName: PageName): string {
  const filename = heroImages.pages[pageName];
  if (!filename) {
    return `${heroImages.basePath}${heroImages.pages.home}`; // fallback to home
  }
  return `${heroImages.basePath}${filename}`;
}

// Helper function to get background image style
export function getHeroBackgroundStyle(pageName: PageName): string {
  const imagePath = getHeroImage(pageName);
  return `background-image: url('${imagePath}')`;
}