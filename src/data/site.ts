// Personal details and the About section. Edit freely.

import antonia from '../assets/team/antonia-baae.jpg';
import spyros from '../assets/team/papavlasopoulos-spyros.jpg';

export const person = {
  name: 'Spyros Papavlasopoulos',
  location: 'Berlin, Germany',
  since: 2007,
};

// Never printed as plain text: use <Email /> so scrapers can't read it.
export const email = 'hello@thedigitalgreek.com';

export const contact = [
  { label: 'GitHub', text: 'Profile', href: 'https://github.com/spyros-papavlasopoulos' },
  { label: 'LinkedIn', text: 'Profile', href: 'https://www.linkedin.com/in/spyros-papavlasopoulos/' },
];

export const team: { name: string; role: string; photo: ImageMetadata; sameAs?: string[] }[] = [
  { name: 'Antonia Baae', role: 'Project Manager', photo: antonia },
  {
    name: 'Spyros Papavlasopoulos',
    role: 'Web Developer',
    photo: spyros,
    sameAs: ['https://github.com/spyros-papavlasopoulos', 'https://www.linkedin.com/in/spyros-papavlasopoulos/'],
  },
];

export const core = ['Astro', 'Drupal', 'WordPress', 'Tailwind CSS', 'SEO', 'Linux'];

export const toolkit = [
  { label: 'Languages', items: 'HTML5, CSS3, JavaScript, Twig' },
  { label: 'CMS', items: 'Drupal setup & theming, WordPress, Shopify, WooCommerce, Contentful' },
  { label: 'Styling', items: 'Tailwind CSS, Bootstrap' },
  { label: 'Jamstack', items: 'Astro' },
  { label: 'Local development', items: 'Linux, DDEV, Docker, Node.js, Composer, Drush' },
  { label: 'Servers', items: 'Nginx, Apache setup & some DevOps' },
  { label: 'Collaboration', items: 'Jira, Asana, Trello' },
  { label: 'Version control', items: 'GitHub, Bitbucket' },
  { label: 'Images', items: 'Illustrator, Photoshop' },
  { label: 'Email', items: 'Mailchimp setup & custom email templates' },
  { label: 'Testing', items: 'Optimizely for A/B testing' },
];
