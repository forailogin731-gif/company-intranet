export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  startDate: string;
  bio: string;
  isOnline: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  category: string;
  imageUrl: string;
  readTime: number;
  tags: string[];
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar: string;
  authorRole: string;
  publishedAt: string;
  priority: "high" | "medium" | "low";
  category: string;
  isPinned: boolean;
}

export interface Department {
  id: string;
  name: string;
  headCount: number;
  lead: string;
  icon: string;
}

export interface QuickLink {
  id: string;
  label: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
}
