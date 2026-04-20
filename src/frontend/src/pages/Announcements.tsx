import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { announcements } from "@/data/mock";
import type { Announcement } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Bell,
  ChevronRight,
  Info,
  Pin,
  ShieldAlert,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Safety",
  "Production",
  "Quality",
  "HR",
  "IT",
  "Maintenance",
  "Operations",
  "Stores",
  "Training",
  "Achievement",
];

type Priority = Announcement["priority"];

const priorityConfig: Record<
  Priority,
  { label: string; className: string; icon: React.ReactNode }
> = {
  high: {
    label: "High Priority",
    className: "bg-destructive/15 text-destructive border-destructive/30",
    icon: <AlertTriangle className="h-3.5 w-3.5" />,
  },
  medium: {
    label: "Medium",
    className: "bg-primary/15 text-primary border-primary/30",
    icon: <Info className="h-3.5 w-3.5" />,
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground border-border",
    icon: <Bell className="h-3.5 w-3.5" />,
  },
};

const categoryIcons: Record<string, React.ReactNode> = {
  Safety: <ShieldAlert className="h-3.5 w-3.5" />,
  Production: <Zap className="h-3.5 w-3.5" />,
  IT: <Info className="h-3.5 w-3.5" />,
  HR: <Bell className="h-3.5 w-3.5" />,
  Quality: <ShieldAlert className="h-3.5 w-3.5" />,
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  return new Date(dateStr).toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
  });
}

function AnnouncementCard({
  ann,
  index,
  isPinned,
}: { ann: Announcement; index: number; isPinned?: boolean }) {
  const pConfig = priorityConfig[ann.priority];
  return (
    <Link to="/announcements/$id" params={{ id: ann.id }}>
      <Card
        data-ocid={`announcements.announcement.item.${index + 1}`}
        className={`group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth cursor-pointer ${
          isPinned
            ? "border-primary/30 bg-primary/[0.025] shadow-sm"
            : "border-border bg-card"
        }`}
      >
        <CardContent className="p-5">
          {/* Top meta row */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {isPinned && (
                <span className="flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                  <Pin className="h-3 w-3" /> Pinned
                </span>
              )}
              <Badge
                className={`text-[11px] px-2 py-0.5 border flex items-center gap-1 font-medium ${pConfig.className}`}
              >
                {pConfig.icon}
                {pConfig.label}
              </Badge>
              <Badge
                variant="secondary"
                className="text-[11px] flex items-center gap-1"
              >
                {categoryIcons[ann.category]}
                {ann.category}
              </Badge>
            </div>
            <span className="text-xs text-muted-foreground flex-shrink-0">
              {timeAgo(ann.publishedAt)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
            {ann.title}
          </h3>

          {/* Content preview */}
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
            {ann.content}
          </p>

          {/* Author footer */}
          <div className="flex items-center gap-2.5 pt-3 border-t border-border">
            <Avatar className="h-7 w-7 flex-shrink-0">
              <AvatarImage src={ann.authorAvatar} />
              <AvatarFallback className="text-[10px] bg-primary/10 text-primary font-semibold">
                {ann.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-medium text-foreground">
                {ann.author}
              </span>
              <span className="text-xs text-muted-foreground">
                {" "}
                · {ann.authorRole}
              </span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function Announcements() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = announcements.filter(
    (a) => activeCategory === "All" || a.category === activeCategory,
  );
  const pinned = filtered.filter((a) => a.isPinned);
  const rest = filtered.filter((a) => !a.isPinned);
  const highCount = announcements.filter((a) => a.priority === "high").length;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
      >
        <div>
          <div className="flex items-center gap-2.5 mb-1">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Bell className="h-5 w-5 text-primary" />
            </div>
            <h1 className="font-display text-3xl text-foreground">
              Announcements
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            {announcements.length} total ·{" "}
            <span className="text-destructive font-medium">
              {highCount} high priority
            </span>{" "}
            · {pinned.length} pinned
          </p>
        </div>
      </motion.div>

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.06 }}
        className="flex flex-wrap gap-2"
        data-ocid="announcements.category.tab"
      >
        {CATEGORIES.map((cat) => {
          const count =
            cat === "All"
              ? announcements.length
              : announcements.filter((a) => a.category === cat).length;
          if (count === 0 && cat !== "All") return null;
          return (
            <button
              type="button"
              key={cat}
              data-ocid={`announcements.category.${cat.toLowerCase().replace(/\s+/g, "_")}_tab`}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full border font-medium transition-smooth ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary bg-card"
              }`}
            >
              {cat} <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </motion.div>

      {/* Pinned section */}
      {pinned.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
            <Pin className="h-3.5 w-3.5 text-primary" />
            <span>Pinned</span>
          </div>
          {pinned.map((ann, i) => (
            <AnnouncementCard key={ann.id} ann={ann} index={i} isPinned />
          ))}
        </motion.div>
      )}

      {/* Rest */}
      {rest.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.14 }}
          className="space-y-3"
        >
          {pinned.length > 0 && (
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Recent
            </div>
          )}
          {rest.map((ann, i) => (
            <AnnouncementCard
              key={ann.id}
              ann={ann}
              index={pinned.length + i}
            />
          ))}
        </motion.div>
      )}

      {filtered.length === 0 && (
        <div
          data-ocid="announcements.empty_state"
          className="text-center py-20 text-muted-foreground"
        >
          <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <Bell className="h-7 w-7 opacity-30" />
          </div>
          <p className="font-semibold text-foreground">No announcements</p>
          <p className="text-sm mt-1">No announcements in this category yet</p>
        </div>
      )}
    </div>
  );
}
