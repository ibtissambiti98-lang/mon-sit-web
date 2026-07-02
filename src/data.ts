export type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
};

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Business Websites',
    description:
      'A clean, fast, mobile-friendly website that tells your story and turns visitors into customers — built with modern tech and optimized for Moroccan audiences.',
    features: ['Responsive design', 'Arabic & French support', 'SEO-ready', 'Fast loading'],
  },
  {
    icon: 'ShoppingCart',
    title: 'Online Stores',
    description:
      'Sell your products online with a full e-commerce setup — from product pages to secure checkout and cash-on-delivery support tailored for the Moroccan market.',
    features: ['Product catalog', 'COD integration', 'Secure checkout', 'Order management'],
  },
  {
    icon: 'Smartphone',
    title: 'Local SEO & Google Maps',
    description:
      'Get found by customers searching in your city. I set up your Google Business Profile, optimize for local search, and make sure you show up when it matters.',
    features: ['Google Business Profile', 'Local keyword optimization', 'Review management', 'Maps integration'],
  },
  {
    icon: 'Palette',
    title: 'Branding & Visual Identity',
    description:
      'A memorable logo, color palette, and visual style that sets you apart from the competition and builds trust with every customer interaction.',
    features: ['Logo design', 'Color systems', 'Brand guidelines', 'Social media kits'],
  },
  {
    icon: 'Settings',
    title: 'Maintenance & Support',
    description:
      'Your website stays updated, secure, and running smoothly. I handle the technical side so you can focus on running your business.',
    features: ['Security updates', 'Content changes', 'Performance monitoring', 'Monthly reports'],
  },
  {
    icon: 'Rocket',
    title: 'Performance Optimization',
    description:
      'Already have a website but it is slow or outdated? I audit, optimize, and modernize it so it loads fast and ranks better on Google.',
    features: ['Speed audits', 'Core Web Vitals', 'Code optimization', 'Hosting migration'],
  },
];

export const projects: Project[] = [
  {
    title: 'Atlas Olive Co.',
    category: 'E-Commerce',
    description:
      'A full online store for a family-owned olive oil producer in Morocco, featuring COD checkout and bilingual product pages.',
    image: 'https://images.pexels.com/photos/8472898/pexels-photo-8472898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2',
    tags: ['E-Commerce', 'Bilingual', 'COD'],
    url: '#',
  },
  {
    title: 'Riad Zitoun',
    category: 'Hospitality',
    description:
      'A booking-focused website for a traditional riad in Fes, with photo galleries, room availability, and WhatsApp integration.',
    image: 'https://images.pexels.com/photos/3909539/pexels-photo-3909539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2',
    tags: ['Hospitality', 'Booking', 'Gallery'],
    url: '#',
  },
  {
    title: 'Café Argan',
    category: 'Restaurant',
    description:
      'A warm, inviting website for a Casablanca café with an interactive menu, location map, and online reservation system.',
    image: 'https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2',
    tags: ['Restaurant', 'Menu', 'Reservations'],
    url: '#',
  },
  {
    title: 'Souk Crafts',
    category: 'Marketplace',
    description:
      'An online marketplace connecting Moroccan artisans with international buyers, featuring artisan profiles and secure payments.',
    image: 'https://images.pexels.com/photos/6212738/pexels-photo-6212738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2',
    tags: ['Marketplace', 'Artisans', 'International'],
    url: '#',
  },
  {
    title: 'Medina Tours',
    category: 'Tourism',
    description:
      'A visually stunning website for a Tangier-based tour company, with itinerary showcases and multilingual support.',
    image: 'https://images.pexels.com/photos/3909539/pexels-photo-3909539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2',
    tags: ['Tourism', 'Multilingual', 'Itineraries'],
    url: '#',
  },
  {
    title: 'PharmaCare',
    category: 'Health',
    description:
      'A professional website for a Rabat pharmacy chain with store locator, online consultation booking, and health articles.',
    image: 'https://images.pexels.com/photos/2680807/pexels-photo-2680807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=800&dpr=2',
    tags: ['Health', 'Locator', 'Consultations'],
    url: '#',
  },
];

export const stats = [
  { value: '40+', label: 'Local businesses launched' },
  { value: '6', label: 'Cities across Morocco' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3yr', label: 'Average partnership' },
];

export const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We sit down (in person or over a call) to understand your business, your customers, and your goals.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'I create a visual design that reflects your brand and resonates with your local audience — you approve before we build.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Your website is developed with modern, fast, and reliable technology — optimized for mobile and search engines.',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    description: 'We go live, I train you on managing content, and I provide ongoing support to help your online presence grow.',
  },
];

export const testimonials = [
  {
    quote:
      'Ibtissam transformed our small bakery into a brand. We now get orders through our website every day. It changed everything for us.',
    author: 'Fatima Z.',
    role: 'Owner, Boulangerie Nour — Casablanca',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
  {
    quote:
      'Professional, fast, and he really understands the Moroccan market. Our riad bookings doubled within three months of launching.',
    author: 'Hassan M.',
    role: 'Manager, Riad Zitoun — Fes',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
  {
    quote:
      'I did not think my pottery shop needed a website. Now I sell to customers in France and Spain. Ibtissam made it simple.',
    author: 'Aicha B.',
    role: 'Founder, Souk Crafts — Safi',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2',
  },
];
