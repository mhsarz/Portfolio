export interface Hobby {
  id: number;
  title: string;
  description: string;
  image?: string; // Add your image paths here later
}

export const hobbies: Hobby[] = [
  { id: 1, title: "Artisan Baking", description: "Exploring the chemistry of sourdough and pastries." },
  { id: 2, title: "Digital Illustration", description: "Sketching concepts at the intersection of tech and art." },
  { id: 3, title: "Nature Photography", description: "Capturing the minimalist geometry of the outdoors." },
  { id: 4, title: "Neuroscience Reading", description: "Staying updated on brain-computer interface research." },
  { id: 5, title: "Tea Blending", description: "A sensory hobby focused on precision and patience." },
  { id: 6, title: "Chess", description: "Practicing strategic thinking and pattern recognition." },
];