
import React from 'react';
import { Leaf, Award, Users, GraduationCap, ClipboardCheck, Zap } from 'lucide-react';
import { Service, BreedInfo, NavLink } from './types';

export const COLORS = {
  primary: '#013220', // The Deep Forest Green from the logo text
  secondary: '#004225', 
  accent: '#82c91e', // The vibrant Lime Green from the logo mark
  text: '#1a1a1a',
  light: '#ffffff',
  bg: '#fcfcfc', 
};

export const IMAGE_ASSETS = {
  // IMPORTANT: This URL is a placeholder. Please replace it with a permanent, publicly accessible
  // DIRECT LINK to your logo image file (e.g., .png, .jpg, .webp).
  // The previous link was a Gemini conversation share link, not an image.
  logo: "https://via.placeholder.com/150/013220/FFFFFF?text=Logo", 
  boranMain: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&q=90&w=1600",
  boranService: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&q=80&w=1200",
  tuliMain: "https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&q=90&w=1600",
  tuliService: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1200",
  feedlot: "https://images.unsplash.com/photo-1551091748-02456488a034?auto=format&fit=crop&q=80&w=1200",
  commercialHerd: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
  dorperSheep: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&q=80&w=1200",
  academyHero: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=90&w=1200",
  visualBreak: "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&q=90&w=2000",
  contactMapBg: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'The Genetics', href: '#genetics' },
  { label: 'Operations', href: '#services' },
  { label: 'RuZhoWa Academy', href: '#training' },
  { label: 'Contact', href: '#contact' },
];

export const CORE_SERVICES: Service[] = [
  {
    id: 'boran',
    title: 'RuZhoWa Boran Breeding',
    description: 'Specializing in elite Zimbabwean Boran genetics, optimized for Highveld & Lowveld performance.',
    icon: <Award className="w-6 h-6" />,
    imageUrl: IMAGE_ASSETS.boranService,
  },
  {
    id: 'tuli',
    title: 'RuZhoWa Tuli Breeding',
    description: 'Indigenous, naturally polled, and perfectly adapted to the semi-arid bushveld.',
    icon: <Leaf className="w-6 h-6" />,
    imageUrl: IMAGE_ASSETS.tuliService,
  },
  {
    id: 'commercial',
    title: 'Precision Herd Management',
    description: 'Strategic commercial management for maximum export-grade beef yield in the SADC region.',
    icon: <ClipboardCheck className="w-6 h-6" />,
    imageUrl: IMAGE_ASSETS.commercialHerd,
  },
  {
    id: 'dorper',
    title: 'Dorper Sheep Genetics',
    description: 'Fast-maturing genetics designed for high-efficiency meat production in Southern Africa.',
    icon: <Zap className="w-6 h-6" />,
    imageUrl: IMAGE_ASSETS.dorperSheep,
  },
  {
    id: 'feedlot',
    title: 'Commercial Feedlots',
    description: 'Modern finishing operations for high-quality, consistent meat supply.',
    icon: <Users className="w-6 h-6" />,
    imageUrl: IMAGE_ASSETS.feedlot,
  },
  {
    id: 'training',
    title: 'RuZhoWa Academy',
    description: 'Empowering the next generation with modern breeding and livestock management skills.',
    icon: <GraduationCap className="w-6 h-6" />,
    imageUrl: IMAGE_ASSETS.academyHero,
  },
];

export const BREED_DETAILS: BreedInfo[] = [
  {
    name: 'RuZhoWa Boran',
    tagline: 'Precision Genetics. Elite Performance.',
    description: 'Our Boran stud stock represents the pinnacle of Zimbabwean genetic selection. We prioritize thick musculature, deep quarters, and impeccable structural correctness.',
    traits: ['Robust Bone Structure', 'Natural Immunity', 'High Carcass Yield', 'Exceptional Vigor'],
    imageUrl: IMAGE_ASSETS.boranMain,
  },
  {
    name: 'RuZhoWa Tuli',
    tagline: 'Zimbabwe\'s Indigenous Powerhouse',
    description: 'Naturally polled and extremely hardy. The RuZhoWa Tuli line focus is on extreme fertility and superior grazing efficiency in natural veld.',
    traits: ['Naturally Polled', 'Extreme Fertility', 'Grazing Efficiency', 'Tick Resistance'],
    imageUrl: IMAGE_ASSETS.tuliMain,
  },
];