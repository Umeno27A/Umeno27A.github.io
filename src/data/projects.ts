import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://task-app-demo.vercel.app",
    demo_url: "https://task-app-demo.vercel.app",
    show_github: true,
    show_demo: true
  },
  {
    id: 2,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://ecommerce-demo.vercel.app",
    demo_url: "https://ecommerce-demo.vercel.app",
    show_github: false,
    show_demo: true
  },
  {
    id: 3,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://chat-app-demo.vercel.app",
    demo_url: "https://chat-app-demo.vercel.app",
    show_github: true,
    show_demo: false
  },
  {
    id: 4,
    name: "デモ",
    description: "デモ",
    technologies: ["デモ"],
    github_url: "https://api-gateway-demo.vercel.app",
    demo_url: "https://api-gateway-demo.vercel.app",
    show_github: false,
    show_demo: false
  }
];