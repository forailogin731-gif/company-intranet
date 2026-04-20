import type {
  Announcement,
  Department,
  Employee,
  NewsArticle,
  QuickLink,
} from "../types";

export const currentUser = {
  id: "emp-001",
  name: "Sarah Thompson",
  role: "HR Director",
  department: "Human Resources",
  avatar:
    "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
  notifications: 5,
};

export const departments: Department[] = [
  {
    id: "dept-1",
    name: "Engineering",
    headCount: 42,
    lead: "Marcus Chen",
    icon: "Code2",
  },
  {
    id: "dept-2",
    name: "Human Resources",
    headCount: 12,
    lead: "Sarah Thompson",
    icon: "Users",
  },
  {
    id: "dept-3",
    name: "Product",
    headCount: 18,
    lead: "Priya Patel",
    icon: "Package",
  },
  {
    id: "dept-4",
    name: "Design",
    headCount: 9,
    lead: "Lena Mueller",
    icon: "Palette",
  },
  {
    id: "dept-5",
    name: "Finance",
    headCount: 14,
    lead: "James Okafor",
    icon: "BarChart3",
  },
  {
    id: "dept-6",
    name: "Marketing",
    headCount: 16,
    lead: "Camila Reyes",
    icon: "Megaphone",
  },
  {
    id: "dept-7",
    name: "Legal",
    headCount: 7,
    lead: "David Kim",
    icon: "Scale",
  },
  {
    id: "dept-8",
    name: "Operations",
    headCount: 23,
    lead: "Anna Fischer",
    icon: "Settings",
  },
];

export const employees: Employee[] = [
  {
    id: "emp-001",
    name: "Sarah Thompson",
    role: "HR Director",
    department: "Human Resources",
    email: "sarah.thompson@acme.com",
    phone: "+1 (415) 555-0101",
    location: "San Francisco, CA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    startDate: "2019-03-15",
    bio: "Sarah leads HR strategy and people operations with a focus on culture and talent development.",
    isOnline: true,
  },
  {
    id: "emp-002",
    name: "Marcus Chen",
    role: "VP of Engineering",
    department: "Engineering",
    email: "marcus.chen@acme.com",
    phone: "+1 (415) 555-0102",
    location: "San Francisco, CA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus&backgroundColor=c0aede",
    startDate: "2018-06-01",
    bio: "Marcus oversees all engineering teams, driving technical excellence and delivery at scale.",
    isOnline: true,
  },
  {
    id: "emp-003",
    name: "Priya Patel",
    role: "Head of Product",
    department: "Product",
    email: "priya.patel@acme.com",
    phone: "+1 (415) 555-0103",
    location: "New York, NY",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=ffd5dc",
    startDate: "2020-01-20",
    bio: "Priya drives product vision and roadmap, ensuring alignment between customer needs and business goals.",
    isOnline: false,
  },
  {
    id: "emp-004",
    name: "Lena Mueller",
    role: "Design Lead",
    department: "Design",
    email: "lena.mueller@acme.com",
    phone: "+1 (415) 555-0104",
    location: "Berlin, Germany",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=lena&backgroundColor=d1d4f9",
    startDate: "2021-04-12",
    bio: "Lena leads visual design and UX strategy, shaping the product experience from concept to launch.",
    isOnline: true,
  },
  {
    id: "emp-005",
    name: "James Okafor",
    role: "CFO",
    department: "Finance",
    email: "james.okafor@acme.com",
    phone: "+1 (212) 555-0105",
    location: "New York, NY",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=b6e3f4",
    startDate: "2017-09-05",
    bio: "James manages financial strategy, planning, and risk management for the organization.",
    isOnline: false,
  },
  {
    id: "emp-006",
    name: "Camila Reyes",
    role: "Marketing Director",
    department: "Marketing",
    email: "camila.reyes@acme.com",
    phone: "+1 (310) 555-0106",
    location: "Los Angeles, CA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=camila&backgroundColor=ffd5dc",
    startDate: "2019-11-08",
    bio: "Camila crafts brand strategy and demand generation campaigns that drive pipeline and awareness.",
    isOnline: true,
  },
  {
    id: "emp-007",
    name: "David Kim",
    role: "General Counsel",
    department: "Legal",
    email: "david.kim@acme.com",
    phone: "+1 (415) 555-0107",
    location: "San Francisco, CA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=davidkim&backgroundColor=c0aede",
    startDate: "2020-07-14",
    bio: "David oversees all legal affairs including contracts, compliance, and intellectual property.",
    isOnline: true,
  },
  {
    id: "emp-008",
    name: "Anna Fischer",
    role: "Head of Operations",
    department: "Operations",
    email: "anna.fischer@acme.com",
    phone: "+49 30 555-0108",
    location: "Berlin, Germany",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=anna&backgroundColor=d1d4f9",
    startDate: "2018-02-28",
    bio: "Anna streamlines operational processes and cross-functional coordination across all offices.",
    isOnline: false,
  },
  {
    id: "emp-009",
    name: "Ryan Foster",
    role: "Senior Engineer",
    department: "Engineering",
    email: "ryan.foster@acme.com",
    phone: "+1 (415) 555-0109",
    location: "Austin, TX",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=ryan&backgroundColor=b6e3f4",
    startDate: "2021-08-16",
    bio: "Ryan specializes in distributed systems architecture and backend performance optimization.",
    isOnline: true,
  },
  {
    id: "emp-010",
    name: "Nadia Hassan",
    role: "Product Manager",
    department: "Product",
    email: "nadia.hassan@acme.com",
    phone: "+1 (415) 555-0110",
    location: "San Francisco, CA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=nadia&backgroundColor=ffd5dc",
    startDate: "2022-02-01",
    bio: "Nadia owns the platform product line and works closely with engineering to deliver high-impact features.",
    isOnline: true,
  },
  {
    id: "emp-011",
    name: "Tyler Brooks",
    role: "Financial Analyst",
    department: "Finance",
    email: "tyler.brooks@acme.com",
    phone: "+1 (212) 555-0111",
    location: "Chicago, IL",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=tyler&backgroundColor=c0aede",
    startDate: "2022-06-20",
    bio: "Tyler delivers financial modeling and analysis to support strategic decision-making across divisions.",
    isOnline: false,
  },
  {
    id: "emp-012",
    name: "Isabel Torres",
    role: "UX Researcher",
    department: "Design",
    email: "isabel.torres@acme.com",
    phone: "+1 (415) 555-0112",
    location: "San Francisco, CA",
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=isabel&backgroundColor=d1d4f9",
    startDate: "2023-01-09",
    bio: "Isabel uncovers user insights through research methods that inform product and design decisions.",
    isOnline: true,
  },
];

export const announcements: Announcement[] = [
  {
    id: "ann-001",
    title: "Company Town Hall — June 15th at 2:00 PM",
    content:
      "Join us for our quarterly town hall where leadership will share Q2 results, upcoming product roadmap milestones, and answer your questions live. All-hands attendance is expected. Recording will be available for remote employees unable to join live.",
    author: "Sarah Thompson",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    authorRole: "HR Director",
    publishedAt: "2026-04-20T09:00:00Z",
    priority: "high",
    category: "Company",
    isPinned: true,
  },
  {
    id: "ann-002",
    title: "New Parental Leave Policy Effective July 1st",
    content:
      "We are expanding our parental leave to 20 weeks fully paid for all primary caregivers and 10 weeks for secondary caregivers, effective July 1st. Visit the Benefits Portal for full details and to update your preferences.",
    author: "Sarah Thompson",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    authorRole: "HR Director",
    publishedAt: "2026-04-18T10:30:00Z",
    priority: "high",
    category: "HR Policy",
    isPinned: true,
  },
  {
    id: "ann-003",
    title: "Office Renovation — East Wing Closed May 5–19",
    content:
      "The East Wing on floors 3 and 4 will be closed for renovation from May 5th through May 19th. All affected teams have been contacted and temporarily relocated to the West Wing collaboration spaces.",
    author: "Anna Fischer",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=anna&backgroundColor=d1d4f9",
    authorRole: "Head of Operations",
    publishedAt: "2026-04-15T14:00:00Z",
    priority: "medium",
    category: "Facilities",
    isPinned: false,
  },
  {
    id: "ann-004",
    title: "Security Awareness Training Required by April 30th",
    content:
      "All employees must complete the annual security awareness training module in the Learning Hub by April 30th. The training takes approximately 45 minutes. Completion is required for SOC 2 compliance.",
    author: "David Kim",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=davidkim&backgroundColor=c0aede",
    authorRole: "General Counsel",
    publishedAt: "2026-04-12T08:00:00Z",
    priority: "high",
    category: "Compliance",
    isPinned: false,
  },
  {
    id: "ann-005",
    title: "Introducing Peer Recognition Program",
    content:
      'Starting this month, employees can send recognition badges to colleagues through the new "Kudos" feature in the company portal. Top contributors will be featured in the monthly newsletter.',
    author: "Sarah Thompson",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    authorRole: "HR Director",
    publishedAt: "2026-04-10T11:00:00Z",
    priority: "low",
    category: "Culture",
    isPinned: false,
  },
  {
    id: "ann-006",
    title: "Q2 All-Hands Recap Available",
    content:
      "The recording and key takeaways from our Q2 All-Hands meeting are now available in the Policies section. Revenue targets exceeded by 12%, and three new product features are shipping next quarter.",
    author: "Marcus Chen",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus&backgroundColor=c0aede",
    authorRole: "VP of Engineering",
    publishedAt: "2026-04-08T16:00:00Z",
    priority: "medium",
    category: "Company",
    isPinned: false,
  },
  {
    id: "ann-007",
    title: "IT Maintenance Window — Saturday 2–6 AM",
    content:
      "Our IT team will perform infrastructure maintenance this Saturday between 2:00–6:00 AM. Email, Slack, and the internal portal will be intermittently unavailable. Plan accordingly.",
    author: "Anna Fischer",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=anna&backgroundColor=d1d4f9",
    authorRole: "Head of Operations",
    publishedAt: "2026-04-05T09:00:00Z",
    priority: "medium",
    category: "IT",
    isPinned: false,
  },
  {
    id: "ann-008",
    title: "Welcome Our New Engineering Interns",
    content:
      "We are thrilled to welcome 8 summer interns joining the Engineering and Design teams from June 3rd. Please extend a warm welcome to our new colleagues and offer guidance as they onboard.",
    author: "Sarah Thompson",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    authorRole: "HR Director",
    publishedAt: "2026-04-02T10:00:00Z",
    priority: "low",
    category: "HR Policy",
    isPinned: false,
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "news-001",
    title: "Project Apollo Achieves Q2 Milestone",
    summary:
      "The Apollo platform team delivered its second major milestone on schedule, with all integration tests passing and performance benchmarks exceeded.",
    content:
      "The Apollo platform team delivered its second major milestone on schedule this week, with all integration tests passing and performance benchmarks exceeded by an average of 18%. The system now processes 2.4 million requests per day with 99.97% uptime. This marks a critical step toward the Q3 general availability launch.",
    author: "Marcus Chen",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus&backgroundColor=c0aede",
    publishedAt: "2026-04-20T08:00:00Z",
    category: "Engineering",
    imageUrl: "/assets/generated/news-apollo.dim_600x340.jpg",
    readTime: 3,
    tags: ["Engineering", "Product", "On Track"],
  },
  {
    id: "news-002",
    title: "Integrating Diversity & Inclusion Into Strategy",
    summary:
      "Our D&I committee launched a new framework for embedding inclusion goals into quarterly planning cycles across all departments.",
    content:
      "Following our company-wide survey in Q1, the D&I committee has launched a structured framework for embedding inclusion goals directly into quarterly OKRs. Department heads have begun adopting the new rubric, with early results showing a 24% increase in cross-functional collaboration scores.",
    author: "Sarah Thompson",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    publishedAt: "2026-04-18T10:00:00Z",
    category: "Culture",
    imageUrl: "/assets/generated/news-diversity.dim_600x340.jpg",
    readTime: 4,
    tags: ["Culture", "D&I", "HR"],
  },
  {
    id: "news-003",
    title: "New Hire Spotlights — April 2026",
    summary:
      "Meet the nine colleagues who joined us this month across Engineering, Finance, and the Design teams.",
    content:
      "Nine new team members joined across Engineering, Finance, and Design this April. From full-stack engineers to senior financial analysts, each brings unique expertise that strengthens our teams. Read their brief profiles and reach out to say hello.",
    author: "Sarah Thompson",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah&backgroundColor=b6e3f4",
    publishedAt: "2026-04-16T11:00:00Z",
    category: "HR",
    imageUrl: "/assets/generated/news-newhires.dim_600x340.jpg",
    readTime: 2,
    tags: ["Hiring", "Culture"],
  },
  {
    id: "news-004",
    title: "Marketing Exceeds Lead Generation Target by 30%",
    summary:
      "Q1 results reveal that our marketing team generated 30% more qualified leads than forecasted, setting a strong pipeline heading into Q2.",
    content:
      "The marketing team delivered a standout Q1, generating 3,850 marketing-qualified leads — 30% above the 2,964 target. Key drivers included the refreshed content strategy, an expanded ABM program targeting enterprise accounts, and the successful launch of our webinar series.",
    author: "Camila Reyes",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=camila&backgroundColor=ffd5dc",
    publishedAt: "2026-04-14T09:30:00Z",
    category: "Marketing",
    imageUrl: "/assets/generated/news-marketing.dim_600x340.jpg",
    readTime: 3,
    tags: ["Marketing", "Growth", "Q1 Results"],
  },
  {
    id: "news-005",
    title: "Finance Team Completes Annual Audit Ahead of Schedule",
    summary:
      "For the third consecutive year, the Finance team completed our external audit two weeks early, with zero material findings.",
    content:
      "Our Finance team wrapped up the annual external audit two weeks ahead of schedule with zero material findings — a third consecutive year at this standard. The auditors praised our internal controls and documentation processes. Full audit report available in the Finance section of the portal.",
    author: "James Okafor",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=james&backgroundColor=b6e3f4",
    publishedAt: "2026-04-11T14:00:00Z",
    category: "Finance",
    imageUrl: "/assets/generated/news-finance.dim_600x340.jpg",
    readTime: 2,
    tags: ["Finance", "Compliance", "Milestone"],
  },
  {
    id: "news-006",
    title: "Design System 2.0 Now Available to All Teams",
    summary:
      "The Design team shipped Design System 2.0, featuring 60+ new components, updated brand tokens, and comprehensive Figma libraries.",
    content:
      "Design System 2.0 is now live and available to all teams. The update includes 60+ production-ready components, refreshed color and typography tokens, and fully documented Figma libraries. Engineering and Product teams are encouraged to migrate in their next sprint cycle.",
    author: "Lena Mueller",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=lena&backgroundColor=d1d4f9",
    publishedAt: "2026-04-08T08:00:00Z",
    category: "Design",
    imageUrl: "/assets/generated/news-design.dim_600x340.jpg",
    readTime: 3,
    tags: ["Design", "Engineering", "Product"],
  },
  {
    id: "news-007",
    title: "Customer Success Rate Reaches All-Time High of 94%",
    summary:
      "Our CSAT score climbed to 94% following the rollout of dedicated success managers for enterprise accounts.",
    content:
      "Customer satisfaction scores hit an all-time high of 94% this quarter, up from 88% in Q3 2025. The improvement follows the rollout of dedicated customer success managers for all enterprise accounts. Key friction points around onboarding and support response times have been resolved.",
    author: "Priya Patel",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=priya&backgroundColor=ffd5dc",
    publishedAt: "2026-04-05T10:00:00Z",
    category: "Product",
    imageUrl: "/assets/generated/news-csat.dim_600x340.jpg",
    readTime: 3,
    tags: ["Product", "Customer Success", "Milestone"],
  },
  {
    id: "news-008",
    title: "Berlin Office Expansion Complete — 40 New Desks",
    summary:
      "The Berlin office has completed its expansion adding 40 workstations, three new meeting rooms, and a rooftop event space.",
    content:
      "Our Berlin office expansion is complete, adding 40 workstations across two new floors, three meeting rooms equipped with top-tier AV, and a rooftop event space for team gatherings. The expansion supports 22 new hires joining the Berlin team across Q2 and Q3.",
    author: "Anna Fischer",
    authorAvatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=anna&backgroundColor=d1d4f9",
    publishedAt: "2026-04-02T09:00:00Z",
    category: "Operations",
    imageUrl: "/assets/generated/news-berlin.dim_600x340.jpg",
    readTime: 2,
    tags: ["Operations", "Facilities", "Growth"],
  },
];

export const quickLinks: QuickLink[] = [
  {
    id: "ql-1",
    label: "Benefits Portal",
    url: "#",
    icon: "Heart",
    description: "Manage health, dental, and 401k",
    color: "text-destructive",
  },
  {
    id: "ql-2",
    label: "Time Tracking",
    url: "#",
    icon: "Clock",
    description: "Log hours and view timesheets",
    color: "text-primary",
  },
  {
    id: "ql-3",
    label: "IT Support",
    url: "#",
    icon: "Monitor",
    description: "Submit help desk tickets",
    color: "text-secondary-foreground",
  },
  {
    id: "ql-4",
    label: "Brand Assets",
    url: "#",
    icon: "Layers",
    description: "Logos, templates, guidelines",
    color: "text-accent-foreground",
  },
  {
    id: "ql-5",
    label: "Learning Hub",
    url: "#",
    icon: "BookOpen",
    description: "Courses and certifications",
    color: "text-accent",
  },
  {
    id: "ql-6",
    label: "Travel Booking",
    url: "#",
    icon: "Plane",
    description: "Book flights and hotels",
    color: "text-muted-foreground",
  },
];
