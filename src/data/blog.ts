export interface BlogPost {
  id: string;
  title: string;
  oneLiner: string;
  date: string;
  content: string; // You can use Markdown here later
}

export const blogPosts: BlogPost[] = [
  {
    id: "cognitive-biases-in-ui",
    title: "Cognitive Biases in UI",
    oneLiner: "How the framing effect changes the way users interact with buttons.",
    date: "2026-03-15",
    content: "Full blog content goes here..."
  },
  {
    id: "baking-and-algorithms",
    title: "Baking and Algorithms",
    oneLiner: "What sourdough starter taught me about recursive functions.",
    date: "2026-02-28",
    content: "Full blog content goes here..."
  }
];