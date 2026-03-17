// src/data/projects.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "mindreader",
    title: "MindReader",
    description: "An interactive web application exploring cognitive biases like the framing effect and anchoring, blending HCI principles with psychology.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://mindreader.example.com",
    github: "https://github.com/yourusername/mindreader"
  },
  {
    id: "cshub-leetcode",
    title: "CSHub LeetCode Sessions",
    description: "Leading weekly technical interview preparation sessions, focusing on data structures, algorithms, and efficient problem-solving in C++ and Java.",
    tech: ["C++", "Java", "Algorithms"],
    github: "https://github.com/cshub-york"
  },
  {
    id: "portfolio",
    title: "Minimalist Portfolio",
    description: "A digital garden designed with an editorial aesthetic, built to showcase the intersection of computer science and neuroscience.",
    tech: ["Next.js 15", "React Compiler", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio"
  }
];