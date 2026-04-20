import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  announcements,
  currentUser,
  newsArticles,
  quickLinks,
} from "@/data/mock";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Plus, TrendingUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "motion/react";

type LucideIconName = keyof typeof LucideIcons;

function DynamicIcon({
  name,
  className,
}: { name: string; className?: string }) {
  const Icon = LucideIcons[name as LucideIconName] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return null;
  return <Icon className={className} />;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days} days ago`;
}

const priorityColors: Record<string, string> = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-primary/10 text-primary",
  low: "bg-muted text-muted-foreground",
};

export default function Dashboard() {
  const pinnedAnnouncement =
    announcements.find((a) => a.isPinned) ?? announcements[0];
  const sideNews = newsArticles.slice(0, 3);

  return (
    <div className="p-6 max-w-[1600px] mx-auto space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-start justify-between gap-4"
      >
        <div>
          <h1 className="font-display text-4xl text-foreground leading-tight">
            Welcome back, {currentUser.name.split(" ")[0]}.
          </h1>
          <p className="text-primary mt-1 font-medium">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <Button
          data-ocid="dashboard.quick_create_button"
          className="gap-2 hidden sm:flex"
          variant="outline"
        >
          <Plus className="h-4 w-4" />
          Quick Create
        </Button>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          {
            label: "Total Employees",
            value: "141",
            delta: "+9 this month",
            icon: "Users",
          },
          {
            label: "Open Announcements",
            value: String(announcements.length),
            delta: `${announcements.filter((a) => a.priority === "high").length} high priority`,
            icon: "Megaphone",
          },
          {
            label: "Departments",
            value: "8",
            delta: "All active",
            icon: "Building2",
          },
          {
            label: "News Articles",
            value: String(newsArticles.length),
            delta: "This quarter",
            icon: "Newspaper",
          },
        ].map((stat, i) => (
          <Card
            key={stat.label}
            data-ocid={`dashboard.stat.item.${i + 1}`}
            className="bg-card border-border shadow-subtle"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </span>
                <DynamicIcon
                  name={stat.icon}
                  className="h-4 w-4 text-primary"
                />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-accent" />
                {stat.delta}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Announcements — col 1 */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <Card
            data-ocid="dashboard.announcements.card"
            className="h-full flex flex-col shadow-subtle"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-foreground">
                  Announcements
                </CardTitle>
                <Link to="/announcements">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-primary h-7 gap-1 px-2"
                  >
                    All <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4 pt-0">
              {/* Pinned */}
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 flex flex-col gap-3">
                <Badge
                  className={`w-fit text-xs ${priorityColors[pinnedAnnouncement.priority]}`}
                >
                  {pinnedAnnouncement.priority.toUpperCase()}
                </Badge>
                <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2">
                  {pinnedAnnouncement.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3">
                  {pinnedAnnouncement.content}
                </p>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={pinnedAnnouncement.authorAvatar} />
                    <AvatarFallback className="text-[10px]">
                      {pinnedAnnouncement.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">
                    {pinnedAnnouncement.author}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto">
                    {timeAgo(pinnedAnnouncement.publishedAt)}
                  </span>
                </div>
                <Link
                  to="/announcements/$id"
                  params={{ id: pinnedAnnouncement.id }}
                >
                  <Button
                    data-ocid="dashboard.announcement.view_details_button"
                    size="sm"
                    className="w-full text-xs h-8"
                  >
                    View Details
                  </Button>
                </Link>
              </div>

              <div className="space-y-2">
                {announcements.slice(1, 4).map((ann, i) => (
                  <Link
                    key={ann.id}
                    to="/announcements/$id"
                    params={{ id: ann.id }}
                  >
                    <div
                      data-ocid={`dashboard.announcement.item.${i + 1}`}
                      className="flex items-start gap-3 py-2 px-2 rounded-md hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div
                        className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${ann.priority === "high" ? "bg-destructive" : ann.priority === "medium" ? "bg-primary" : "bg-muted-foreground"}`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-foreground line-clamp-2">
                          {ann.title}
                        </p>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {timeAgo(ann.publishedAt)} · {ann.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Links — col 2 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card
            data-ocid="dashboard.quick_links.card"
            className="h-full shadow-subtle"
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 grid grid-cols-2 gap-3">
              {quickLinks.map((link, i) => (
                <a
                  key={link.id}
                  href={link.url}
                  data-ocid={`dashboard.quick_link.item.${i + 1}`}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background hover:bg-muted/60 transition-smooth p-4 text-center group"
                >
                  <div className={`${link.color}`}>
                    <DynamicIcon name={link.icon} className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </a>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Internal News Feed — col 3 */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <Card
            data-ocid="dashboard.news_feed.card"
            className="h-full flex flex-col shadow-subtle"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-foreground">
                  Internal News Feed
                </CardTitle>
                <Link to="/news">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-primary h-7 gap-1 px-2"
                  >
                    All <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-3 pt-0">
              {sideNews.map((article, i) => (
                <div
                  key={article.id}
                  data-ocid={`dashboard.news.item.${i + 1}`}
                >
                  <div className="flex items-start gap-3 group cursor-pointer">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="h-14 w-20 rounded-md object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] text-muted-foreground">
                          {formatDate(article.publishedAt)}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <Avatar className="h-4 w-4">
                          <AvatarImage src={article.authorAvatar} />
                          <AvatarFallback className="text-[8px]">
                            {article.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] text-muted-foreground truncate">
                          {article.author}
                        </span>
                        <Badge
                          variant="secondary"
                          className="ml-auto text-[10px] px-1.5 py-0 h-4"
                        >
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  {i < sideNews.length - 1 && <Separator className="mt-3" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
