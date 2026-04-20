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

export interface DepartmentKPI {
  label: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  headCount: number;
  lead: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  kpiSummary: DepartmentKPI[];
}

export interface WorkOrder {
  id: string;
  title: string;
  department: string;
  assignedTo: string;
  priority: "critical" | "high" | "medium" | "low";
  status: "open" | "in-progress" | "completed" | "on-hold";
  dueDate: string;
  client: string;
  partNumber: string;
  quantity: number;
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  department: string;
  status: "operational" | "maintenance" | "breakdown" | "idle";
  lastServiced: string;
  nextService: string;
  oee: number;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  department: string;
  severity: "critical" | "warning" | "info";
  timestamp: string;
  isResolved: boolean;
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  unit: string;
  minStock: number;
  location: string;
  supplier: string;
  lastUpdated: string;
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
