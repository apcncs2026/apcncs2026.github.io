export type PageName = 'home' | 'international' | 'speakers' | 'organizers' | 'programme' | 'registration' | 'contact' | 'accommodation' | 'abstracts' | 'sponsors';

export interface HeroImageConfig {
  basePath: string;
  pages: Record<PageName, string>;
}

export const heroImages: HeroImageConfig = {
  basePath: '/images/hero/',
  pages: {
    home: 'home-ntu-arc.jpg',
    international: 'international.jpg',
    speakers: 'speakers-ntu-learning-hub.jpg',
    organizers: 'organizers-ntu-spms.jpg',
    programme: 'programme-ntu-spms-building.jpg',
    registration: 'registration-ntu-campus.jpg',
    contact: 'contact-ntu-campus.jpg',
    accommodation: 'accommodation-singapore-skyline.jpg',
    abstracts: 'call-for-abstracts-ntu-research.jpg',
    sponsors: 'sponsor.jpg'
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