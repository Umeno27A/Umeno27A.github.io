import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    name: "タスク管理アプリ",
    description: "React + TypeScript + Supabaseで構築したモダンなタスク管理アプリケーション。リアルタイム同期とオフライン機能を実装。",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    github_url: "https://github.com/example/task-app",
    demo_url: "https://task-app-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description: "Next.js + Stripe決済を統合したECプラットフォーム。在庫管理、注文処理、管理者ダッシュボードを含む。",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github_url: "https://github.com/example/ecommerce",
    demo_url: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    name: "リアルタイムチャットアプリ",
    description: "WebSocketを使用したリアルタイムチャット機能付きのコミュニケーションツール。",
    technologies: ["Vue.js", "Node.js", "Socket.io", "Redis"],
    github_url: "https://github.com/example/chat-app",
    featured: false
  },
  {
    id: 4,
    name: "API Gateway & Microservices",
    description: "Go言語で構築したマイクロサービスアーキテクチャとAPI Gateway。Docker Compose対応。",
    technologies: ["Go", "Docker", "PostgreSQL", "Redis"],
    github_url: "https://github.com/example/api-gateway",
    featured: false
  }
];