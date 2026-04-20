import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { announcements } from "@/data/mock";
import type { Announcement } from "@/types";
import { Link, useParams } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Calendar, Info } from "lucide-react";
import { motion } from "motion/react";

const priorityConfig: Record<
  Announcement["priority"],
  { label: string; className: string; icon: React.ReactNode }
> = {
  high: {
    label: "High Priority",
    className: "bg-destructive/10 text-destructive border-destructive/20",
    icon: <AlertTriangle className="h-4 w-4" />,
  },
  medium: {
    label: "Medium Priority",
    className: "bg-primary/10 text-primary border-primary/20",
    icon: <Info className="h-4 w-4" />,
  },
  low: {
    label: "Low Priority",
    className: "bg-muted text-muted-foreground border-border",
    icon: <Info className="h-4 w-4" />,
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      >
        <Card className="shadow-subtle border-border">
          <CardContent className="p-6 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className={`gap-1.5 border text-xs ${pConfig.className}`}>
                {pConfig.icon}
                {pConfig.label}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {ann.category}
              </Badge>
            </div>

            <h1 className="font-display text-2xl text-foreground leading-snug">
              {ann.title}
            </h1>

            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={ann.authorAvatar} />
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  {ann.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {ann.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {ann.authorRole}
                </p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(ann.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>

            <Separator />

            <div className="prose prose-sm max-w-none text-foreground leading-relaxed">
              <p className="text-base">{ann.content}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {related.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="space-y-3"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Related Announcements
          </h2>
          {related.map((rel, i) => (
            <Link key={rel.id} to="/announcements/$id" params={{ id: rel.id }}>
              <Card
                data-ocid={`announcement_detail.related.item.${i + 1}`}
                className="group hover:shadow-elevated transition-smooth cursor-pointer border-border bg-card"
              >
                <CardContent className="p-4 flex items-start gap-3">
                  <Avatar className="h-8 w-8 flex-shrink-0 mt-0.5">
                    <AvatarImage src={rel.authorAvatar} />
                    <AvatarFallback className="text-xs">
                      {rel.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {rel.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {rel.author} · {rel.category}
                    </p>
                  </div>
                  <Badge
                    className={`text-[11px] flex-shrink-0 border ${priorityConfig[rel.priority].className}`}
                  >
                    {rel.priority}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}
