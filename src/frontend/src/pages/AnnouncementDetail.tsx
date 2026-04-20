import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { announcements } from "@/data/mock";
import type { Announcement } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  Calendar,
  ChevronRight,
  Info,
  Pin,
} from "lucide-react";
import { motion } from "motion/react";

type Priority = Announcement["priority"];

const priorityConfig: Record<
  Priority,
  {
    label: string;
    className: string;
    bannerClass: string;
    icon: React.ReactNode;
  }
> = {
  high: {
    label: "High Priority",
    className: "bg-destructive/15 text-destructive border-destructive/30",
    bannerClass: "border-l-4 border-l-destructive bg-destructive/5",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  medium: {
    label: "Medium Priority",
    className: "bg-primary/15 text-primary border-primary/30",
    bannerClass: "border-l-4 border-l-primary bg-primary/5",
    icon: <Info className="h-4 w-4" />,
  },
  low: {
    label: "Low Priority",
    className: "bg-muted text-muted-foreground border-border",
    bannerClass: "",
    icon: <Bell className="h-4 w-4" />,
  },
};

export default function AnnouncementDetail() {
  const { id } = useParams({ from: "/announcements/$id" });
  const ann = announcements.find((a) => a.id === id);
  const related = announcements
    .filter((a) => a.id !== id && a.category === ann?.category)
    .slice(0, 3);

  if (!ann) {
    return (
      <div className="p-6 text-center py-20">
        <p className="text-muted-foreground">Announcement not found.</p>
        <Link to="/announcements">
          <Button variant="outline" className="mt-4 gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Announcements
          </Button>
        </Link>
      </div>
    );
  }

  const pConfig = priorityConfig[ann.priority];

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/announcements">
          <Button
            data-ocid="announcement_detail.back_button"
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground -ml-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> All Announcements
          </Button>
        </Link>
      </motion.div>

      {/* Main content card */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        <Card
          className={`shadow-card border-border overflow-hidden ${pConfig.bannerClass}`}
        >
          <CardContent className="p-7 space-y-6">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                className={`text-xs px-2.5 py-0.5 border flex items-center gap-1.5 font-medium ${pConfig.className}`}
              >
                {pConfig.icon}
                {pConfig.label}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {ann.category}
              </Badge>
              {ann.isPinned && (
                <Badge className="text-xs bg-primary/10 text-primary border border-primary/20 flex items-center gap-1">
                  <Pin className="h-3 w-3" /> Pinned
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-2xl text-foreground leading-snug">
              {ann.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-3">
              <Avatar className="h-11 w-11 ring-2 ring-border">
                <AvatarImage src={ann.authorAvatar} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {ann.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  {ann.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {ann.authorRole}
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(ann.publishedAt).toLocaleDateString("en-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            <Separator />

            {/* Content well */}
            <div className="bg-muted/30 rounded-xl p-5 border border-border">
              <p className="text-base text-foreground leading-[1.8] whitespace-pre-line">
                {ann.content}
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Related announcements */}
      {related.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="space-y-3"
        >
          <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            Related in {ann.category}
          </h2>
          {related.map((rel, i) => (
            <Link key={rel.id} to="/announcements/$id" params={{ id: rel.id }}>
              <Card
                data-ocid={`announcement_detail.related.item.${i + 1}`}
                className="group hover:shadow-elevated hover:-translate-y-0.5 transition-smooth cursor-pointer border-border bg-card"
              >
                <CardContent className="p-4 flex items-start gap-3">
                  <Avatar className="h-8 w-8 flex-shrink-0 mt-0.5">
                    <AvatarImage src={rel.authorAvatar} />
                    <AvatarFallback className="text-xs bg-primary/10 text-primary font-semibold">
                      {rel.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {rel.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {rel.author} · {rel.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge
                      className={`text-[11px] border ${priorityConfig[rel.priority].className}`}
                    >
                      {rel.priority}
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-smooth" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
