import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { announcements } from "@/data/mock";
import type { Announcement } from "@/types";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Pin } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CATEGORIES = [
  "All",
  "Company",
  "HR Policy",
  "Facilities",
  "Compliance",
  "Culture",
  "IT",
];

const priorityConfig: Record<
  Announcement["priority"],
  { label: string; className: string }
> = {
  high: {
    label: "High Priority",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
  medium: {
    label: "Medium",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  low: {
    label: "Low",
    className: "bg-muted text-muted-foreground border-border",
  },
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function Announcements() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = announcements.filter(
    (a) => activeCategory === "All" || a.category === activeCategory,
  );

  const pinned = filtered.filter((a) => a.isPinned);
  const rest = filtered.filter((a) => !a.isPinned);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <h1 className="font-display text-3xl text-foreground">Announcements</h1>
        <p className="text-muted-foreground mt-1">
          {announcements.length} announcements ·{" "}
          {announcements.filter((a) => a.priority === "high").length} high
          priority
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList
            data-ocid="announcements.category.tab"
            className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1"
          >
            {CATEGORIES.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                data-ocid={`announcements.category.${cat.toLowerCase().replace(/\s+/g, "_")}_tab`}
                className="text-xs"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Pinned */}
      {pinned.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            <Pin className="h-3.5 w-3.5" />
            Pinned
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
          transition={{ duration: 0.35, delay: 0.15 }}
          className="space-y-3"
        >
          {pinned.length > 0 && (
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              Recent
            </div>
          )}
          {rest.map((ann, i) => (
            <AnnouncementCard key={ann.id} ann={ann} index={i} />
          ))}
        </motion.div>
      )}

      {filtered.length === 0 && (
        <div
          data-ocid="announcements.empty_state"
          className="text-center py-20 text-muted-foreground"
        >
          <p className="font-medium">No announcements in this category</p>
        </div>
      )}
    </div>
  );
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
        className={`group hover:shadow-elevated transition-smooth cursor-pointer border-border ${isPinned ? "border-primary/30 bg-primary/[0.02]" : "bg-card"}`}
      >
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {isPinned && (
                  <Pin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                )}
                <Badge
                  className={`text-[11px] px-2 py-0.5 border ${pConfig.className}`}
                >
                  {pConfig.label}
                </Badge>
                <Badge variant="secondary" className="text-[11px]">
                  {ann.category}
                </Badge>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm leading-snug">
                {ann.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                {ann.content}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={ann.authorAvatar} />
                  <AvatarFallback className="text-[10px]">
                    {ann.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">
                  {ann.author}
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">
                  {ann.authorRole}
                </span>
                <span className="text-xs text-muted-foreground ml-auto">
                  {timeAgo(ann.publishedAt)}
                </span>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1 group-hover:text-primary transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
